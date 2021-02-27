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
            @change="saveEdit('name')"
          />
        </div>
        <div class="inputArea">
          <label>Price:</label>
          <input
            type="text"
            :value="productObject.price"
            @change="saveEdit('price')"
          />
        </div>
      </div>
      <div class="inputArea">
        <label>Description:</label>
        <input
          type="text"
          :value="productObject.description"
          @change="saveEdit('description')"
        />
      </div>
      <div class="inputArea">
        <label>Washing:</label>
        <input 
          :value="productObject.washing" 
          type="text" 
          @change="saveEdit('washing')"
        />
      </div>
      <div>
        <div class="topLine">
          <div class="inputArea">
            <label>Dimensions:</label>
            <input 
              class='smInput'
              :value="productObject.dimensions" 
              type="text" 
              @change="saveEdit('dimensions')"
            />
          </div>
          <div class="inputArea">
            <label>Stock No:</label>
            <input 
              class='smInput'
              :value="productObject.numberInStock" 
              type="text" 
              @change="saveEdit('stock')"
            />
          </div>
          <div class="inputArea">
            <label>Colours:</label>
            <input 
              :value="productObject.colour" 
              type="text" 
              @change="saveEdit('colour')"
            />
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
    saveEdit(edit) {
      console.log(event.target.value);
      return this.editedProduct[edit] = event.target.value;
      
    },
    saveEdits() {
      // console.log("OLD");
      // console.log(this.productObject);
      

      const newEdits = {
        name: this.editedProduct.name ? this.editedProduct.name : this.productObject.name,
        price: this.editedProduct.price ? this.editedProduct.price : this.productObject.price,
        description: this.editedProduct.description ? this.editedProduct.description : this.productObject.description,
        washing: this.editedProduct.washing ? this.editedProduct.washing : this.productObject.washing,
        dimensions: this.editedProduct.dimensions ? this.editedProduct.dimensions : this.productObject.dimensions,
        colour: this.editedProduct.colour ? this.editedProduct.colour : this.productObject.colour,
      }

    console.log("FINAL");
      console.log(newEdits);


      fetch(`http://localhost:3000/api/products/${this.productObject._id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: newEdits.name,
            price: newEdits.price,
            genreId: this.productObject.category._id,
            description: newEdits.description,
            washing: newEdits.washing,
            dimensions: newEdits.dimensions,
            colour: newEdits.colour,

          })
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('RETURNED: ');
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

      this.$emit('refreshList', this.productObject.category._id);

      this.closePopup();
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  created() {
      // console.log('EDIT OBJECT:')
      // console.log(this.productObject);
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
  flex: 1;
  display: flex;
}

.productImage {
  height: 100%;
  width: 100%;
}

.textArea {
  flex: 2;
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
  box-shadow: inset 0 0 5px #ccc;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
  margin: 10px 20px;
}

.smInput {
  width: 60px;
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