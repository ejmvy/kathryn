<template>
  <section id="collectionArea">
    <TitleDesign :title="titleText"></TitleDesign>
    <LeftCollectionComponent
      :displayCollection="dishCollection"
    ></LeftCollectionComponent>
    <RightCollectionComponent
      :displayCollection="mugCollection"
    ></RightCollectionComponent>
    <LeftCollectionComponent
      :displayCollection="bowlCollection"
    ></LeftCollectionComponent>
    <RightCollectionComponent
      :displayCollection="miscCollection"
    ></RightCollectionComponent>
  </section>
</template>

<script>
import TitleDesign from "../Designs/TitleDesign.vue";
import LeftCollectionComponent from "../Designs/LeftCollectionComponent.vue";
import RightCollectionComponent from "../Designs/RightCollectionComponent.vue";
export default {
  data() {
    return {
      titleText: "The Collection",
      dishCollection: {
        title: "Dishes",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: "latestDesigns/dish1.jpeg",
      },
      bowlCollection: {
        title: "Bowls",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: "latestDesigns/bowl1.jpeg",
      },
      mugCollection: {
        title: "Mugs",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: "latestDesigns/mug3.jpeg",
      },
      miscCollection: {
        title: "Misc",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: "latestDesigns/misc1.jpeg",
      },
    };
  },
  components: {
    TitleDesign,
    LeftCollectionComponent,
    RightCollectionComponent,
  },
};
</script>

<style scoped>
#collectionArea {
  background: #f5f5f5;
  padding-bottom: 30px;
}
</style>