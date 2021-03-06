<template>
  <div id="collectionArea">
    <div class='collectionSection'>
      <TitleDesign :title="titleText"></TitleDesign>
      <LeftCollectionComponent
        :displayCollection="dishCollection"
        :collection='dishes'
      ></LeftCollectionComponent>
      <RightCollectionComponent
        :displayCollection="mugCollection"
        :collection='mugs'
      ></RightCollectionComponent>
      <LeftCollectionComponent
        :displayCollection="bowlCollection"
        :collection='bowls'
      ></LeftCollectionComponent>
      <RightCollectionComponent
        :displayCollection="miscCollection"
        :collection='misc'
      ></RightCollectionComponent>
    </div>
  </div>
</template>

<script>
import TitleDesign from "../Designs/TitleDesign.vue";
import LeftCollectionComponent from "../Designs/LeftCollectionComponent.vue";
import RightCollectionComponent from "../Designs/RightCollectionComponent.vue";
export default {
  data() {
    return {
      titleText: "The Collection",
      dishes: 'dishes',
      mugs: 'mugs',
      bowls: 'bowls',
      misc: 'misc',
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.collectionSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  /* border: 2px solid red; */
}

@media only screen and (min-width:1200px) {
  /* .indexMain {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
  .collectionSection {
   width: 80%;

  }
}
</style>