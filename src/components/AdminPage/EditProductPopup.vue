<template>
  <div class="mainPopupArea">
    <div class="ImageArea">
      <img class="productImage" src="../../assets/Irish_Pottery_main.jpg" />
    </div>
    <div class="textArea">
      <h2>Edit {{ productObject.name }}</h2>
      <div class="topLine">
        <div class="inputArea">
          <label>Name:</label>
          <input
            
            type="text"
            :value="productObject.name"
          />
          <!-- v-model="editedProduct.name" -->
        </div>
        <div class="inputArea">
          <label>Price:</label>
          <input
            type="text"
            :value="productObject.price"
          />
        </div>
      </div>
      <div class="inputArea">
        <label>Description:</label>
        <input
          type="text"
          :value="productObject.description"
        />
      </div>
      <div class="inputArea">
        <label>Washing:</label>
        <input v-model="editedProduct.washing" type="text" />
      </div>
      <div>
        <div class="topLine">
          <div class="inputArea">
            <label>Dimensions:</label>
            <input v-model="editedProduct.dimensions" type="text" />
          </div>
          <div class="inputArea">
            <label>Colours:</label>
            <input v-model="editedProduct.colours" type="text" />
          </div>
        </div>

        <div class="buttonArea">
          <button @click="closePopup()" class="btn smBtn">Back</button>
          <button @click="saveEdits()" class="btn smBtn">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productObject"],
  data() {
    return {
      editedProduct: {
        name: "",
        price: "",
        description: "",
        washing: "",
        dimensions: "",
        colours: "",
      },
    };
  },
  methods: {
    saveEdits() {
      console.log("EDITS");
      console.log(this.productObject);
    //   fetch(`http://localhost:3000/products/${this.productObject._id}`, {
    //       method: 'PUT',
    //       headers: {
    //           'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         name: this.editedProduct.name,
    //         price: this.editedProduct.price,
    //         genreId: this.productObject.category._id,
    //         description: this.editedProduct.description,

    //       })
    //   })
      this.closePopup();
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  created() {
      console.log('EDIT OBJECT:')
      console.log(this.productObject);
  }
};
</script>

<style scoped>
.mainPopupArea {
  width: 60%;
  /* height: 40%; */
  background: white;
  position: absolute;
  top: 10%;
  left: 20%;
  z-index: 2;
  border-radius: 8px;
  display: flex;
  box-shadow: 0 0 35px #8d8c8c;
}

.ImageArea {
  /* width: 60%; */
  /* width: 500px; */
  /* flex: 2 ; */
  display: flex;
}

.productImage {
  height: 100%;
  width: 100%;
}

.textArea {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-top: 15px;
}

h2 {
  margin-bottom: 10px;
  margin-left: 20px;
}

button {
  margin-left: 20px;
}

input {
  /* background: #f2f2f2; */
  box-shadow: inset 0 0 5px #ccc;
  padding: 15px;
  /* width: 100%; */
  border: none;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
  margin: 10px 20px;
}

input:focus {
  outline: none;
  border-bottom: 1px solid #365a69;
}

label {
  font-size: 13px;
  text-align: left;
  padding-top: 5px;
  padding-left: 20px;
}

.topLine {
  display: flex;
}

.inputArea {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.buttonArea {
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;
}
</style>