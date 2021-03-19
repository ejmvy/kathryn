<template>
  <Header></Header>
  <section class="shopPage">
      <div class='shopNavInfo'>
            <div class='shopNav'>
                <router-link class='routerLink' to='/shop'>Collection</router-link>
                <div class='breakLine'>/</div>
                <p>{{ categoryName }}</p>
            </div>
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
import Header from "../Header.vue";
import Footer from "../Footer.vue";
// import TitleDesign from "../components/Designs/TitleDesign.vue";
import ItemCard from "../Designs/ItemCard.vue";
export default {
  data() {
    return {
      titleText: "Our Collection",
      productData: [],
      categoryName: '',
      categoryTitle: ''
    };
  },
  
  created() {
     const categoryParam = this.$route.params.category;
     console.log('category: '+ categoryParam);
     this.categoryName = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
    fetch("http://localhost:3000/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var dataArr = [];
        data.forEach((item) => {
            if(item.category.name == this.categoryName) {
                dataArr.push(item);
            }
        })
        // console.log(dataArr);
        this.productData = dataArr;
        // var dataArr = data.map((item) => {
        //     return item.category.name.toLowerCase() == categoryName;
        // })
        
      });
  },
  components: {
    Header,
    Footer,
    // TitleDesign,
    ItemCard,
  },
};
</script>

<style scoped>
.shopPage {
  padding-top: 100px;
  margin-bottom: 80px;
}

.shopNavInfo {
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.routerLink {
    text-decoration: none !important;
    color: #666666;
    /* font-weight: bold; */
    cursor: pointer;
    padding: 10px 0;
}

.routerLink:hover {
    border-bottom: 2px solid #ccc;
    /* text-decoration: underline; */
}

.shopNav {
    display: flex;
    align-items: center;
    color: #666666;
}

.breakLine {
    padding: 0 20px;
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
    padding-top: 30px;
    justify-content: center;
  }
}
</style>