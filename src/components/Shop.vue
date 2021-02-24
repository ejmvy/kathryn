<template>
  <section class="shopPage">
    <TitleDesign :title="titleText"></TitleDesign>
    <div class="shopInfo">
      <p>Collections / All</p>
      <p>{{ productData.length }} items</p>
    </div>
    <div class="itemsArea">
      <div v-for="item in productData" :key="item">
        <ItemCard :displayItem="item"></ItemCard>
      </div>
    </div>
  </section>
</template>

<script>
import TitleDesign from "../components/Designs/TitleDesign.vue";
import ItemCard from "../components/Designs/ItemCard.vue";
export default {
  data() {
    return {
      titleText: "Our Collection",
      productData: [],
    };
  },
  created() {
    fetch("http://localhost:3000/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.productData = data;
      });
  },
  components: {
    TitleDesign,
    ItemCard,
  },
};
</script>

<style scoped>
.shopPage {
  padding-top: 100px;
  margin-bottom: 80px;
}

.shopInfo {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.itemsArea {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>