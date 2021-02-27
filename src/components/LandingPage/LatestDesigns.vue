<template>
  <section>
    <TitleDesign :title="titleHeader"></TitleDesign>
    <ImageDisplay :images="recentImages"></ImageDisplay>

  </section>
</template>

<script>
import TitleDesign from "../Designs/TitleDesign.vue";
import ImageDisplay from "../Designs/ImageDisplay.vue";
export default {
  data() {
    return {
      titleHeader: "Latest Designs",
      recentImages: [
        "latestDesigns/bowl1.jpeg",
        "latestDesigns/dish1.jpeg",
        "latestDesigns/bowl2.jpeg",
        "latestDesigns/mug1.jpeg",
        "latestDesigns/mug2.jpeg",
        "latestDesigns/misc1.jpeg",
        "latestDesigns/dish2.jpeg",
        "latestDesigns/mug3.jpeg",
      ],
    };
  },
  components: {
    TitleDesign,
    ImageDisplay,
  },
};
</script>

<style scoped>
</style>