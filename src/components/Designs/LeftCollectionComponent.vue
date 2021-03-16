<template>
  <div class="reason">
    <div class="picture">
      <img
        class="reasonImage"
        :src="require(`../../assets/${displayCollection.img}`)"
      />
      <!-- <img class="reasonImage" src="../../assets/latestDesigns/dish1.jpeg" /> -->
    </div>
    <div class="reasonText">
      <div class="designTop">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="dot"></div>
      </div>
      <div class="textSection">
        <h2>{{ displayCollection.title }}</h2>
        <p>
          {{ getProductText ? displayCollection.shortText : displayCollection.longText }}
        </p>
        <router-link :to="{ name: 'ShowCollection', params: { category: collection } }">
          <button class="btn">SHOP NOW</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["displayCollection", "collection"],
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.addEventListener('rezise', () => {
      this.windowWidth = window.innerWidth;
    })
  },
  computed: {
    getProductText() {
      return this.windowWidth <= 600;
  }
  }
};
</script>

<style scoped>
h2 {
  padding-bottom: 10px;
}
.reason {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 400px !important; */
  margin: 30px 0;
}
.reason .picture {
  width: 50%;
  height: 400px;
  flex: 2;
}
.reason .picture .reasonImage {
  width: 100%;
  height: 100%;
}
.reason .reasonText {
  position: relative;
  left: -50px;
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  box-shadow: 0 5px 15px #ccc;
}

.textSection {
  font-size: 15px;
}

button {
  margin-top: 12px;
}

@media screen and (max-width: 900px) {
  .reason {
    width: 60%;
    flex-direction: column;
     /* margin-right: 5%; */
  }
  .reason .reasonText {
    left: 0;
    order: 1;
    top: -70px;
    width: 80%;
  }
  .reason .picture {
     width: 100%;
      order: 0;
      height: 300px;
  }
}
@media screen and (max-width: 700px) {
  .reason {
    width: 90%;
    margin: 0; 
  }
}

@media screen and (max-width: 400px) {
  .reason .reasonText {
    width: 90%;
  }
}
</style>