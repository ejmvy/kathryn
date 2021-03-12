<template>
  <div class="mainPopupArea">
    
    <div class="textArea">
      <h2>{{ productObject.name ? (editTitle + productObject.name) : addTitle }}</h2>
      <form>
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
          <div class="inputArea">
              <label>Stock No:</label>
              <input 
                :value="productObject.numberInStock" 
                type="text" 
                @change="saveEdit('stock')"
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
          <div class="bottomLine">
            <div class="inputArea">
              <label>Dimensions:</label>
              <input 
                :value="productObject.dimensions" 
                type="text" 
                @change="saveEdit('dimensions')"
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
            <div class="inputArea">
              
            </div>
          </div>

          <div class="buttonArea">
            <button @click="closePopup()" class="btn smBtn">Back</button>
            <button @click.prevent="saveEdits()" class="btn smBtn">Save</button>
          </div>
        </div>
      </form>
      
    </div>

    <div class="ImageArea">
      
      <div class='largeImageArea'>
        <!--  -->
        <img v-if='editedProduct.imageUrlArray[0] || productObject.imageUrlArray[0]' class="productImage" :src='editedProduct.imageUrlArray[0] ? editedProduct.imageUrlArray[0] : productObject.imageUrlArray[0]' />

      </div>
        
      <div class='smallImageArea'>
        <div class='smImageArea' @click.prevent='onPickFile2'>
          <img v-if='editedProduct.imageUrlArray[1]  || productObject.imageUrlArray[1]' class='smImage' :src='editedProduct.imageUrlArray[1] ? editedProduct.imageUrlArray[1] : productObject.imageUrlArray[1]' />  
        </div> 
        <div class='smImageArea'>
          <img v-if='editedProduct.imageUrlArray[2]  || productObject.imageUrlArray[2]' class='smImage' :src='editedProduct.imageUrlArray[2] ? editedProduct.imageUrlArray[2] : productObject.imageUrlArray[2]' />  
        </div>
        <div class='smImageArea'>
          <img v-if='editedProduct.imageUrlArray[3]  || productObject.imageUrlArray[3]' class='smImage' :src='editedProduct.imageUrlArray[3] ? editedProduct.imageUrlArray[3] : productObject.imageUrlArray[3]' />  
        </div>
      </div>
      <button class='btn contactBtn imageBtn' @click.prevent='onPickFile'>Upload Images</button>
        <input
          type='file'
          style='display: none'
          ref='fileInput'
          accept='image/*'
          multiple
          @change.prevent='onFilePicked'
          />
    </div>
  </div>
</template>

<script>
export default {
  props: ["productObject"],
  data() {
    return {
      imageUrl: '',
      imageRaw: null,
      editTitle: 'Edit ',
      addTitle: 'Add New Product',
      editedProduct: {
        name: "",
        price: "",
        description: "",
        washing: "",
        dimensions: "",
        colours: "",
        stock: "",
        imageUrl: '',
        imageRaw: null,
        smallImage1Url: '',
        imageUrlArray: ['', '', '', ''],
        imageRawFiles: [],
      },
    };
  },
  methods: {
    saveEdit(edit) {
      console.log(event.target.value);
      return this.editedProduct[edit] = event.target.value;
      
    },
    saveEdits() {
      console.log("OLD");
      console.log(this.productObject);
      var keys = Object.keys(this.productObject);


      const newEdits = {
        _id: (keys.length) ? this.productObject._id : '',
        name: this.editedProduct.name ? this.editedProduct.name : this.productObject.name,
        price: this.editedProduct.price ? this.editedProduct.price : this.productObject.price,
        genreId: (keys.length) ? this.productObject.category._id : '',
        description: this.editedProduct.description ? this.editedProduct.description : this.productObject.description,
        washing: this.editedProduct.washing ? this.editedProduct.washing : this.productObject.washing,
        dimensions: this.editedProduct.dimensions ? this.editedProduct.dimensions : this.productObject.dimensions,
        colour: this.editedProduct.colour ? this.editedProduct.colour : this.productObject.colour,
        numberInStock: this.editedProduct.stock ? this.editedProduct.stock : this.productObject.numberInStock,
        imageUrl: this.editedProduct.imageUrl[0] ? this.editedProduct.imageUrl[0] : this.productObject.imageUrl[0],
        imageRaw: this.editedProduct.imageRaw,
        imageUrlArray: this.editedProduct.imageUrlArray ? this.editedProduct.imageUrlArray : this.productObject.imageUrlArray,
      }

      this.$emit('saveProduct', newEdits);

    },
    closePopup() {
      this.$emit("closePopup");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    // onPickFile2() {
    //   console.log('file picking');
    //   this.$refs.fileInput2.click();
    // },
    onFilePicked(e) {
      this.editedProduct.imageUrlArray = [];
      const files = e.target.files;
      console.log('FILES');
      console.log(files.length);
     
      for (var file in Object.entries(files)) {
        let filename = files[file].name;
        console.log(filename);
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file');
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.editedProduct.imageUrlArray.push(fileReader.result)
        })
        fileReader.readAsDataURL(files[file])
        this.editedProduct.imageRawFiles.push(files[file]);
      }
      
       
      // }

      console.log('URL FILES')
      // console.log(imageNewArr);
      console.log(this.editedProduct.imageUrlArray);
    },
    // onFile2Picked(e) {
    //   const files = e.target.files;
    //   let filename = files[0].name;
    //   if (filename.lastIndexOf('.') <= 0) {
    //     return alert('Please add a valid file');
    //   }
    //   const fileReader = new FileReader()
    //   fileReader.addEventListener('load', () => {
    //     this.editedProduct.smallImage1Url = fileReader.result
    //   })
    //   fileReader.readAsDataURL(files[0])
    //   // this.editedProduct.imageRaw = files[0];
    // }
  },
  created() {
      console.log('EDIT OBJECT:')
      console.log(this.productObject);
  }
};
</script>

<style scoped>

.mainPopupArea {
  width: 80%;
  background: white;
  position: fixed;
  top: 15%;
  left: 10%;
  z-index: 2;
  border-radius: 8px;
  display: flex;
  box-shadow: 0 0 35px #8d8c8c;
  box-sizing: border-box;
}

input[type='file'] {
  display: none;
}

.custom-file-upload {
    border-radius: 50%;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    position: absolute;
    bottom: 20px;
    /* right: 20px;  */
    text-decoration: underline;
}

form {
  width: inherit;
  padding: 0;
}

.ImageArea {
  flex: 1;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  background: #365a69;
  padding: 10px;
}

.largeImageArea {
  height: 50%;
  border: 2px solid #ccc;
  border-style: dashed;
  width: 100%;
  border-radius: 5px;
}

.productImage {
  position: relative;
  height: 100%;
  width: 100%;
  /* z-index: -1; */
}

.smImage {
  width: 100%;
  height: 100%;

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

.inputArea {
  flex: 1 1 50%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* padding: 0; */
  padding: 0 10px;
}

input {
  width: 100%;
  flex: 1 2 auto;
  /* box-shadow: inset 0 0 5px #ccc; */
  padding: 15px 0 10px 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
  margin: 10px 0;
}


input:focus {
  outline: none;
  border-bottom: 1px solid #365a69;
}

label {
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  padding-top: 5px;
}

.topLine, .bottomLine {
  display: flex;
}

.buttonArea {
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;
}

.imageBtn {
  position: absolute;
  bottom: 20px;
}

.smallImageArea {
  display: flex;
  /* border: 2px solid yellow; */
  margin-top: 20px;
}

.smImageArea {
  flex: 1;
  height: 60px;
  width: inherit;
  min-width: 60px;
  /* width:100%; */
  border: 2px solid #ccc;
  border-style: dashed;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
}
</style>