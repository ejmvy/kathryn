<template >
  <div class="adminBg">
    <div class="adminArea">
      <!-- v-bind:class="[showAddCategoryPopup ? 'hide' : 'show']" -->
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
                <img class="icon" src="../../assets/right.png" />
              </div>

              <button @click="addNewCategory()" class="btn categoryPadding">
                Add Category
              </button>
            </div>
          </div>
        </div>
        <div class="panelSection productPanel">
          <div class="productSection">
            <h4>Products</h4>

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
                    <div class="itemFont">{{ product.quantity }}</div>
                  </div>
                  <div class="productIcons">
                    <img
                      @click="deleteProduct(product)"
                      class="icon"
                      src="../../assets/bin-green.png"
                    />
                    <img
                      @click="editProduct(product)"
                      class="icon"
                      src="../../assets/pencil.png"
                    />
                  </div>
                </div>

              </div>
            </div>

            <button
              @click="addNewProduct()"
              class="btn categoryPadding"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
      <div v-if="showAddCategoryPopup">
        <!-- :class="{ popupOpened: showAddCategoryPopup }" -->
        <AddNewPopup @category-saved="saveNewCategory"></AddNewPopup>
      </div>
                <div v-if="showEditProductPopup">
                  <EditProductPopup
                    :productObject="productToEdit"
                    @closePopup="closeEditPopup"
                  ></EditProductPopup>
                </div>
    </div>
  </div>
</template>

<script>
import AddNewPopup from "../AdminPage/AddNewPopup.vue";
import EditProductPopup from "../AdminPage/EditProductPopup.vue";
export default {
  data() {
    return {
      hideProductBtn: false,
      categoryList: [],
      productList: [],
      showAddCategoryPopup: false,
      showEditProductPopup: false,
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
          console.log("category items: ", data);
          this.productList = data;
        });
    },
    deleteProduct(product) {
      console.log("DELETE PRODUCT", product);
    },
    editProduct(product) {
      console.log("EDIT PRODUCT");
      this.productToEdit = product;
      product.edit = !product.edit;
      this.hideProductBtn = !this.hideProductBtn;
      this.showEditProductPopup = !this.showEditProductPopup;
    },
    addNewProduct() {
      console.log("ADD NEW PRODUCT");
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
      this.showEditProductPopup = false;
    },
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
    AddNewPopup,
    EditProductPopup,
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

/* .productItem:hover {
  background: rgb(223, 222, 222);
} */

/* .productEditBar {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s 0.1s, height 0.3s, padding-top 0.1s;
}
/* 

.editBarOpened .productEditBar {
  padding-top: 15px;
  opacity: 1;
  height: 100%;
  transition: opacity 0.3s 0.1s, height 0.3s 0.1s, padding-top 0.1s;
}
/* //,  */

/* .answerArea .answerText {
    /* padding-top: 10px; 
    opacity: 1;
    height: 30px;
    transition: opacity 0.3s 0.1s, height 0.3s;
}

.answerText {
    text-align: left;
    opacity: 0;
    height: 0;
    transition: opacity 0.3s, height 0.3s 0.1s;
} */

/* .cartImport {
  position: relative;
  right: -100px;
  opacity: 0;
  transition: right 0.3s, opacity 0.3s;
}

.cartOpened .cartImport {
  right: 0;
  opacity: 1;
} */
/* 
.editSection {
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: -5px 0;
}

.editSection label {
  font-size: 13px;
}

.editSection input {
  border: none;
  border-bottom: 1px solid #365a69;
  width: 120px;
  padding: 4px;
}

.editSection input:focus {
  outline: none;
} */

.btnRight {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
}
</style>