<template>
  <router-link :to="{ name: 'ItemDisplay', params: { id: displayItem._id } }">
    <!-- <img class='itemImage' :src='require(`../../assets/${displayItem.img}`)' /> -->
   <div class='imageArea'>
     <div class='hoverBtn'>
       <button class='btn whiteBtn'>View</button>
     </div>
    <img class="itemImage" :src="displayItem.imageUrl" />
   </div>
  </router-link>
  <h3>{{ displayItem.name }}</h3>
  <p>{{ displayItem.price }}</p>
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

.imageArea {
  width: 250px;
  height: 200px;
  margin: 20px;
}

.hoverBtn {
  opacity: 0;
  position: absolute;
  width: 250px;
  height: 200px;
  background: rgba(251,251,251,0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

}

.hoverBtn:hover {
  opacity: 1
}

.whiteBtn {
  background: none;
  border: 2px solid white;
  padding: 5px 20px;
  font-size: 20px;
  margin-top: 0;
  color: white;
  /* border-radius: 15px; */
}

.itemImage {
  width: 250px;
  height: 200px;
  box-shadow: 2px 4px 5px 0px rgba(184,184,184,0.75);
  cursor: pointer;
  /* margin: 80px 30px 0 30px; */
}

p {
  margin-top: -10px;
  color: #696969;
}

@media screen and (max-width: 700px) {
  .imageArea {
    min-width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;

  }

  .hoverBtn  {
    min-width: 300px;
    height: 250px;
  }

  .itemImage {
    width: 100%;
    height: 100%;
   object-fit: cover;
    margin: 0;
  }

}
</style>