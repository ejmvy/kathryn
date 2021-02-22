<template>
  <MainPhoto></MainPhoto>
  <MainMessage></MainMessage>
  <Collection></Collection>
  <AboutArtist></AboutArtist>
</template>

<script>
import MainPhoto from "./LandingPage/TopPhoto.vue";
import MainMessage from "./LandingPage/MainMessage.vue";
import Collection from "./LandingPage/Collection.vue";
import AboutArtist from "./LandingPage/AboutArtist.vue";

export default {
  components: {
    MainPhoto,
    MainMessage,
    Collection,
    AboutArtist,
  },
};
</script>

<style scoped>
</style>