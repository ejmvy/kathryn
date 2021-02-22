<template>
  <section class="shopPage">
    <TitleDesign :title="titleText"></TitleDesign>
    <div class='shopInfo'>
        <p>Collections / All</p>
        <p>{{ items.length }} items</p>
    </div>
    <div class='itemsArea'>
    <div v-for='item in items' :key='item'>
        <ItemCard :displayItem='item'></ItemCard>
    </div>

    </div>
  </section>
</template>

<script>
import TitleDesign from "../components/Designs/TitleDesign.vue";
import ItemCard from '../components/Designs/ItemCard.vue';
export default {
  data() {
    return {
      titleText: "Our Collection",
      items: [
          {
              'name': 'Bowl 1',
              'id': '1',
              'price': '14.99',
              'img': 'latestDesigns/bowl1.jpeg'
          },
          {
              'name': 'Dish 1',
              'id': '2',
              'price': '24.99',
              'img': 'latestDesigns/dish1.jpeg'
          },
          {
              'name': 'Mug 3',
              'id': '3',
              'price': '12.99',
              'img': 'latestDesigns/mug3.jpeg'
          },
          {
              'name': 'Dish 2',
              'id': '4',
              'price': '18.99',
              'img': 'latestDesigns/dish2.jpeg'
          },
          {
              'name': 'Mug 2',
              'id': '5',
              'price': '9.99',
              'img': 'latestDesigns/mug2.jpeg'
          },
          {
              'name': 'Bowl 3',
              'id': '6',
              'price': '14.99',
              'img': 'latestDesigns/bowl3.jpeg'
          },
          {
              'name': 'Bowl 2',
              'id': '7',
              'price': '17.99',
              'img': 'latestDesigns/bowl2.jpeg'
          },
          {
              'name': 'Small Cups',
              'id': '8',
              'price': '12.99',
              'img': 'latestDesigns/misc1.jpeg'
          },
          {
              'name': 'Mug 2',
              'id': '9',
              'price': '14.99',
              'img': 'latestDesigns/mug2.jpeg'
          },
          {
              'name': 'Bowl 1',
              'id': '10',
              'price': '14.99',
              'img': 'latestDesigns/bowl1.jpeg'
          },
          {
              'name': 'Dish 1',
              'id': '11',
              'price': '24.99',
              'img': 'latestDesigns/dish1.jpeg'
          },
          {
              'name': 'Mug 3',
              'id': '12',
              'price': '12.99',
              'img': 'latestDesigns/mug3.jpeg'
          },

      ]
    };
  },
  components: {
    TitleDesign,
    ItemCard
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