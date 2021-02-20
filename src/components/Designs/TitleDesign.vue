<template>
  <div class="titleArea">
    <div class="leftLine"></div>
    <div class="titleText">{{ title }}</div>
    <div class="rightLine"></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.titleArea {
  align-items: center;
  width: 90%;
  margin: 80px 0 50px 0;
  display: flex;
  justify-content: center;
}
.leftLine,
.rightLine {
  background: rgba(32, 72, 88, 0.7);
  width: 100%;
  height: 1px;
}

.titleText {
  width: 60%;
  /* border: 2px solid red; */
  /* padding: 0 30px; */
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Nova Mono", monospace;
}
</style>