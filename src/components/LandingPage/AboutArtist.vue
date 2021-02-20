<template>
  <section>
    <TitleDesign :title="titleHeader"></TitleDesign>

    <div class="aboutSection">
      <div class="aboutText">
        <h1>Kathryn O'Kelly</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour. There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour.
        </p>
      </div>
      <img class="artistImg" src="../../assets/latestDesigns/artist.jpg" />
    </div>
  </section>
</template>

<script>
import TitleDesign from "../Designs/TitleDesign.vue";
export default {
  data() {
    return {
      titleHeader: "From Lockdown to Passion",
    };
  },
  components: {
    TitleDesign,
  },
};
</script>

<style scoped>
.aboutSection {
  display: flex;
  width: 80%;
  align-items: center;
}

.aboutText {
  width: 60%;
  padding: 0 50px;
  line-height: 2;
}

.artistImg {
  height: 500px;
  width: 550px;
  border-radius: 50%;
}
p {
  font-size: 15px;
}
</style>