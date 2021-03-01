<template>
  <router-link :to="{ name: 'ItemDisplay', params: { id: displayItem._id } }">
    <!-- <img class='itemImage' :src='require(`../../assets/${displayItem.img}`)' /> -->
    <img class="itemImage" :src="displayItem.imageUrl" />
  </router-link>
  <h3>{{ displayItem.name }}</h3>
  <p>{{ displayItem.price }}</p>
  <button class="btn smBtn" @click="addItemToCart(displayItem)">
    Add to Cart
  </button>
</template>

<script>
export default {
  props: ["displayItem"],
  methods: {
    addItemToCart(item) {
      console.log("item to send:", item.name);
      fetch("http://localhost:3000/api/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: item.name,
          price: item.price,
          description: item.description,
          quantity: 1,
        }),
      });
    },
  },
};
</script>

<style scoped>
.itemImage {
  width: 250px;
  height: 200px;
  box-shadow: 0 0 4px #666666;
  /* margin-top: 50px; */
  cursor: pointer;
  margin: 80px 30px 0 30px;
}

p {
  margin-top: -10px;
  color: #696969;
}
</style>