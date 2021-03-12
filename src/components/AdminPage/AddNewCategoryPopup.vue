<template>
  <div class="mainPopupArea">
    <!-- <img class='closeBtn' src='../../assets/icons/down-green.png' /> -->
    <img @click='closePopup' class='closeBtn' src='../../assets/icons/close-grey.png' />
    <h2>New Category</h2>
    <div class="inputArea">
      <label>Enter Category Name:</label>
      <input v-model="newCategoryName" type="text" />
    </div>
    <div>
      <button @click="categoryAdded()" class="btn">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCategoryName: "",
    };
  },
  methods: {
    categoryAdded() {
      console.log(`name: ${this.newCategoryName}`);
      this.$emit("category-saved", this.newCategoryName);
    },
    closePopup() {
      this.$emit('closeCategoryPopup');
    }
  },
};
</script>

<style scoped>
.closeBtn {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.mainPopupArea {
  width: 40%;
  /* height: 40%; */
  background: white;
  position: absolute;
  top: 5%;
  left: 30%;
  z-index: 2;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px #c0bfbf;
}

h2 {
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: left;
}

input {
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
}

input:focus {
  outline: none;
  border-bottom: 1px solid #365a69;
}

label {
  font-size: 13px;
  text-align: left;
  padding-bottom: 15px;
}

.inputArea {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>