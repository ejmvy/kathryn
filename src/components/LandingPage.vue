<template>
  <Header></Header>
  <MainPhoto></MainPhoto>
  <MainMessage></MainMessage>
  <Collection></Collection>
  <AboutArtist></AboutArtist>
  <Footer></Footer>
</template>

<script>
import MainPhoto from "./LandingPage/TopPhoto.vue";
import MainMessage from "./LandingPage/MainMessage.vue";
import Collection from "./LandingPage/Collection.vue";
import AboutArtist from "./LandingPage/AboutArtist.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    MainPhoto,
    MainMessage,
    Collection,
    AboutArtist,
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>