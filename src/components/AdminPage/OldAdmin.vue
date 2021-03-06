<template >
  <div class="adminBg">
    <AdminLogin v-if='!userLoggedIn' @loggedIn='userLoggedIn = true'></AdminLogin>
    <div class='noteAppear'>
      <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType'></Notification>
      </transition>
    </div>

    <div v-if='userLoggedIn' class='headerLogos'>
      <img class='headerLogo' src='../../assets/icons/edit.png' />
      <div class='line'></div>
      <img class='headerLogo' src='../../assets/icons/file.png' />
      <div class='line'></div>
      <img class='headerLogo' src='../../assets/icons/chart.png' />
    </div>

    <div v-if='userLoggedIn' class="adminArea">
      <h3>Admin Panel - Welcome Kathryn!</h3>
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
                    <div class="itemName">{{ product.name }}</div>
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
        <AddNewPopup @category-saved="saveNewCategory"></AddNewPopup>
      </div>
      <div v-if="showEditProductPopup">
        <EditProductPopup
          :productObject="productToEdit"
          @saveProduct='saveProductEdits'
          @closePopup="closeEditPopup"
        ></EditProductPopup>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLogin from '../AdminPage/AdminLogin.vue';
import AddNewPopup from "../AdminPage/AddNewPopup.vue";
import EditProductPopup from "../AdminPage/EditProductPopup.vue";
import Notification from '../../components/Designs/Notification.vue';
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
      userLoggedIn: false
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
        this.notificationType = true;
        this.showNotification = true;

        setTimeout(() => {
          this.showNotification = false;
        }, 2000)

      })
      .catch((err) => {
        console.log(err);
        this.notificationType = false;
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2000)
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
        this.notificationType = true;
        this.showNotification = true;

        setTimeout(() => {
          this.showNotification = false;
        }, 2000)
      })
      .catch((err) => {
        console.log(err);
        this.notificationType = false;
        this.showNotification = true;

        setTimeout(() => {
          this.showNotification = false;
        }, 2000)
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
    AdminLogin,
    AddNewPopup,
    EditProductPopup,
    Notification
  },
};
</script>

<style scoped>
h4 {
  text-transform: uppercase;
  padding-bottom: 30px;
  padding-left: 10px;
}

.itemFont {
  font-size: 13px;
  padding: 0 40px;
}

.itemName {
  padding-right: 40px;
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

.adminBg {
  position: absolute;
  /* z-index: 5; */
  width: 100%;
  height: 100%;
  background: rgba(32, 72, 88, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.adminArea {
  width: 80%;
  height: 80%;
  background: white;
  box-shadow: 0 0 20px rgb(100, 98, 98);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.adminPanel {
  display: flex;
  justify-content: space-between;
  margin: 40px;
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
  bottom: 20%;
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
  padding: 10px 0;
}

.productDesc {
  flex: 4;
}

.productIcons {
  flex: 1;
  margin-left: 50px;
  justify-content: space-between;
}

.btnRight {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
}

.headerLogos {
  display: flex;
  position: absolute;
  top: 20px;
  width: 60%;
  justify-content: space-between;
  align-items: center;
}

.headerLogo {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  width: 100px;
  height: 3px;
  background: white;
  border-radius: 5px;
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