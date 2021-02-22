<template>
  <section>
    <TitleDesign :title="titleText"></TitleDesign>
    <div class="imageDisplay">
      <div v-for="img in imagesToDisplay" :key="img">
        <img class="pic" :src="require(`../../assets/${img}`)" />
      </div>
    </div>
  </section>
</template>

<script>
import TitleDesign from "../Designs/TitleDesign.vue";
export default {
  data() {
    return {
      titleText: "Keep In Touch!",
      imagesToDisplay: [
        "instaImages/hands.jpeg",
        "instaImages/class3.jpeg",
        "instaImages/jug.jpeg",
        "instaImages/class2.jpeg",
        "instaImages/jug2.jpeg",
      ],
    };
  },
  components: {
    TitleDesign,
  },
};
</script>

<style scoped>
.imageDisplay {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.pic {
  width: 150px;
  height: 120px;
  padding: 0 10px;
}
</style>