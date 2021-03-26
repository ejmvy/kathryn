<template>
  <div class="displayImageArea">
    <div v-for="img in images" :key="img">
      <img class="displayImg" :src="require(`../../assets/${img}`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
};
</script>

<style scoped>
.displayImageArea {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.displayImg {
  height: 250px;
  width: 350px;
  flex: 1;
  margin: 20px;
}

@media screen and (max-width: 700px) {
  .displayImg {
    margin: 20px 0;
  }
}

@media screen and (max-width: 370px) {
  .displayImg {
    width: 300px;
    margin: 0;
  }
}
</style>