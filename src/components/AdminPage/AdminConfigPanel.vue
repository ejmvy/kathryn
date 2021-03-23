<template>
  <div style='height: 100%'>
      <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType'></Notification>
      </transition>
      <div class="adminPanel">
        <div class="panelSection categoryPanel">
          <div class="categorySection">
            <h4>Categories</h4>

            <div class="scroll">
              <div
                class="categoryItem"
                v-for="category in categoryList"
                :key="category"
                @click="viewCategory(category)"
              >
                <div class="cat">{{ category.name }}</div>
                <img class="icon" src="../../assets/icons/right.png" />
              </div>

              <button @click="addNewCategory()" class="btn categoryPadding">
                Add Category
              </button>
            </div>
          </div>
        </div>
        <div class="panelSection productPanel">
          <div class="productSection">
            <h4 v-if='categorySelected'>Products</h4>

            <div class="scroll">
              <div
                class="productItem"
                v-for="product in productList"
                :key="product"
              >
                <div class="productShow">
                  <div class="productDesc">
                    <div class="itemFont itemName">{{ product.name }}</div>
                    <div class="itemFont">{{ product.price }}</div>
                    <div class="itemFont">{{ product.numberInStock }}</div>
                  </div>
                  <div class="productIcons">
                    <img
                      @click="deleteProduct(product)"
                      class="icon"
                      src="../../assets/icons/bin-green.png"
                    />
                    <img
                      @click="editProduct(product)"
                      class="icon"
                      src="../../assets/icons/pencil.png"
                    />
                  </div>
                </div>

              </div>
            </div>

            <button
              v-if='categorySelected'
              @click="addNewProductBtn()"
              class="btn categoryPadding"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
      <div v-if="showAddCategoryPopup">
        <AddNewCategoryPopup @category-saved="saveNewCategory" @closeCategoryPopup='showAddCategoryPopup = false'></AddNewCategoryPopup>
      </div>
      <div v-if="showEditProductPopup">
        <EditProductPopup
          :productObject="productToEdit"
          @saveProduct='saveProductEdits'
          @closePopup="closeEditPopup"
        ></EditProductPopup>
      </div>
  </div>
    
</template>

<script>
import AddNewCategoryPopup from "./AddNewCategoryPopup.vue";
import EditProductPopup from "./EditProductPopup.vue";
import Notification from '../Designs/Notification.vue';
export default {
    data() {
    return {
      hideProductBtn: false,
      categoryList: [],
      productList: [],
      showAddCategoryPopup: false,
      showEditProductPopup: false,
      showNewProductPopup: false,
      categorySelected: '',
      notificationType: '',
      showNotification: '',
      productToEdit: {},
    };
  },
  methods: {
    viewCategory(category) {
      fetch(`http://localhost:3000/api/products/category/${category._id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.productList = data;
        });
        this.categorySelected = category._id;
    },
    deleteProduct(product) {
      console.log("DELETE PRODUCT", product);
    },
    editProduct(product) {
      this.productToEdit = product;
      product.edit = !product.edit;
      this.hideProductBtn = !this.hideProductBtn;
      this.showEditProductPopup = !this.showEditProductPopup;
    },
    addNewProductBtn() {
      console.log("ADD NEW PRODUCT");
      this.showEditProductPopup = true;
    },
    addNewCategory() {
      console.log("ADD NEW CATEGORY");
      this.showAddCategoryPopup = !this.showAddCategoryPopup;
    },
    saveNewCategory(categoryName) {
      fetch("http://localhost:3000/api/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: categoryName,
        }),
      });
      this.showAddCategoryPopup = false;
    },
    closeEditPopup() {
      this.productToEdit = {};
      this.showEditProductPopup = false;
    },
    refreshProducts() {
       fetch(`http://localhost:3000/api/products/category/${this.categorySelected}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("category items: ", data);
          this.productList = data;
        });
    },
    saveProductEdits(productInfo) { 
      console.log('SAVING: ');
        console.log(productInfo);     
      if (productInfo._id) {
        console.log('product edited');
        this.saveEditedProduct(productInfo);
      } else {
        console.log('new product');
        productInfo.genreId = this.categorySelected;
        console.log(productInfo);  
        this.addNewProduct(productInfo);
      }
      this.closeEditPopup();
      this.productToEdit = {};
    },
    saveEditedProduct(productObj) {
      fetch(`http://localhost:3000/api/products/${productObj._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productObj)
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.refreshProducts();
        const noteObj = {
          type: true,
          message: "New Details saved!"
        }
        console.log(noteObj);
        this.$emit('notificationPopup', noteObj);

      })
      .catch((err) => {
        console.log(err);
        const noteObj = {
          type: false,
          message: "Information not saved."
        }
        console.log(noteObj);
        this.$emit('notificationPopup', noteObj);
      })
    },
    addNewProduct(productObj) {
      fetch(`http://localhost:3000/api/products/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productObj)
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.refreshProducts();
        const noteObj = {
            type: true,
            message: "New Product saved!"
          }
          console.log(noteObj);
          this.$emit('notificationPopup', noteObj);
      })
      .catch((err) => {
        console.log(err);
        const noteObj = {
          type: false,
          message: "Information not saved."
        }
        console.log(noteObj);
        this.$emit('notificationPopup', noteObj);
      })
    }
    
  },
  created() {
    fetch("http://localhost:3000/api/categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categoryList = data;
      });
  },
  components: {
    AddNewCategoryPopup,
    EditProductPopup,
    Notification
  },
}
</script>

<style scoped>
h4 {
  text-transform: uppercase;
  padding-bottom: 30px;
  padding-left: 10px;
}

.itemFont {
  text-align: left;

  font-size: 13px;
  /* padding: 0 40px; */
  width: 30%;
}

.itemName {
  padding-right: 40px;
  font-size: 15px;
  /* width: 40%; */
}

.saveBtn {
  padding: 5px 15px;
  font-size: 13px;
}

button {
  transition: all 1s ease-in-out;
}

.hide {
  opacity: 0;
}

.show {
  opacity: 1;
}

.adminPanel {
  display: flex;
  justify-content: space-between;
  /* margin: 40px; */
  height: 100%;
  /* border: 2px solid green; */
}

.panelSection {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  text-align: left;
  padding: 0 20px;
}

.categoryPanel {
  flex: 1;
}

.productPanel {
  flex: 2;
}

.scroll {
  overflow: auto;
  height: 300px;
}

.categoryItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.categoryItem:hover {
  background: rgb(223, 222, 222);
}

.icon {
  width: 20px;
  height: 20px;
}

.categoryPadding {
  position: absolute;
  bottom: 25%;
  padding: 5px 15px;
}

.productItem {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.productShow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.productDesc,
.productIcons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* text-align: left; */
  padding: 10px 0;
}

.productDesc {
  flex: 4;
  text-align: left;
}

.productIcons {
  flex: 1;
  width: 20%;
  justify-content: space-between;
}

.btnRight {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
}
/* 
@keyframes appear {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.appear-enter-active {
    animation: appear 1.8s;
}

.appear-leave-active {
    animation: appear 2s reverse;
} */
</style>