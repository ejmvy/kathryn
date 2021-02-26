<template >
  <div class="adminBg">
    <div class="adminArea">
      <h3>Admin Panel - Welcome Kathryn!</h3>
      <div class="adminPanel">
        <div class="panelSection">
          <div class="categorySection">
            <h4>Categories</h4>

            <div
              class="categoryItem"
              v-for="category in categories"
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
        <div class="panelSection">
          <div class="productSection">
            <h4>Products</h4>

            <div class="productItem" v-for="product in products" :key="product">
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
              <!-- <div class="productEditBar" v-if="product.edit" > -->
              <div :class="{ editBarOpened: product.edit }">
                <div class="productEditBar">
                  <div class="editSection">
                    <label>Name</label>
                    <input type="text" :placeholder="product.name" />
                  </div>
                  <div class="editSection">
                    <label>Price</label>
                    <input type="text" :placeholder="product.price" />
                  </div>
                  <div class="editSection">
                    <label>Quantity</label>
                    <input type="number" :placeholder="product.quantity" />
                  </div>
                  <div class="btnRight">
                    <button class="btn saveBtn">Save</button>
                  </div>
                </div>
              </div>

              <!-- </div> -->
            </div>
            <button
              v-if="!hideProductBtn"
              @click="addNewProduct()"
              class="btn categoryPadding"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideProductBtn: false,
      categories: [
        {
          name: "Bowls",
          id: "1",
        },
        {
          name: "Plates",
          id: "2",
        },
        {
          name: "Mugs",
          id: "3",
        },
        {
          name: "Misc",
          id: "4",
        },
      ],
      products: [
        {
          name: "Bowl 1",
          price: "12.99",
          quantity: "3",
          edit: false,
        },
        {
          name: "Bowl 2",
          price: "22.99",
          quantity: "3",
          edit: false,
        },
        {
          name: "Bowl 3",
          price: "30.00",
          quantity: "3",
          edit: false,
        },
        {
          name: "Bowl 4",
          price: "14.50",
          quantity: "3",
          edit: false,
        },
      ],
    };
  },
  methods: {
    viewCategory(category) {
      console.log("VIEW CATEGORY");
      console.log(category);
    },
    deleteProduct(product) {
      console.log("DELETE PRODUCT");
      console.log(product);
    },
    editProduct(product) {
      console.log("EDIT PRODUCT");
      console.log(product);
      product.edit = !product.edit;
      this.hideProductBtn = !this.hideProductBtn;
    },
    addNewProduct() {
      console.log("ADD NEW PRODUCT");
    },
    addNewCategory() {
      console.log("ADD NEW CATEGORY");
    },
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
}

.saveBtn {
  padding: 5px 15px;
  font-size: 13px;
}

button {
  transition: all 1s ease-in-out;
}
.adminBg {
  position: absolute;
  z-index: 5;
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
  justify-content: space-between;
  padding: 10px 0;
}

.productDesc {
  flex: 4;
  margin-right: 50px;
}

.productIcons {
  flex: 1;
}

/* .productItem:hover {
  background: rgb(223, 222, 222);
} */

.productEditBar {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s 0.1s, height 0.3s;
}
/* */

.editBarOpened .productEditBar {
  opacity: 1;
  height: 100%;
  transition: opacity 0.3s 0.1s, height 0.3s 0.1s;
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

.editSection {
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 5px 0;
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
}

.btnRight {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
}
</style>