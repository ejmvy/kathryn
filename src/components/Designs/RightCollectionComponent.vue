<template>
  <div class="reason">
    <div class="reasonText">
      <div class="designTop">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="dot"></div>
      </div>
      <div class="textSection">
        <h2>{{ displayCollection.title }}</h2>
        <p>
          {{ displayCollection.text }}
        </p>
        <button class="btn">SHOP NOW</button>
      </div>
    </div>
    <div class="picture">
      <img
        class="reasonImage"
        :src="require(`../../assets/${displayCollection.img}`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["displayCollection"],
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
  /* margin: 10px 0; */
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
  left: 50px;
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
</style>