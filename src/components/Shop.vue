<template>
  <div class='noteAppear'>
    <transition name='appear' :duration="{ enter: 800, leave: 800 }">
      <Notification v-if='showNotification' :type='notificationType'></Notification>
    </transition>
  </div>
  <Header></Header>
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
  <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TitleDesign from "../components/Designs/TitleDesign.vue";
import ItemCard from "../components/Designs/ItemCard.vue";
import Notification from '../components/Designs/Notification.vue';
export default {
  data() {
    return {
      titleText: "Our Collection",
      productData: [],
      showNotification: '',
      notificationType: ''
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
    Notification,
    Header,
    Footer,
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

@media screen and (max-width: 700px) {
  .itemsArea {
    justify-content: center;
  }
}
</style>