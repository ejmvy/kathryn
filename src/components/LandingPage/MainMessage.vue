<template>
  <section id="welcomeMessage">
    <div class="welcome">
      <div class="message">
        <p>"Thoughtful, Authentic, Personal"</p>
      </div>
    </div>
    <LatestDesigns></LatestDesigns>
  </section>
</template>

<script>
import LatestDesigns from "./LatestDesigns.vue";
export default {
  components: {
    LatestDesigns,
  },
};
</script>

<style scoped>
#welcomeMessage {
  background: white;
  padding: 180px 0 20px 0;
}
#welcomeMessage .welcome {
  /* width: 40%; */
  /* width: 90%; */
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
#welcomeMessage .welcome .message {
  margin-top: 30px;
  /* padding-bottom: 20px; */
  font-size: 35px;
}
.designTop,
.designBottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 60px;
}
.line1 {
  width: 300px;
  height: 3px;
  background: #604800;
  border-radius: 40%;
}
.line2 {
  width: 200px;
  height: 3px;
  background: #604800;
  border-radius: 40%;
  margin-top: 10px;
}
.dot {
  width: 10px;
  height: 10px;
  background: #604800;
  border-radius: 50%;
  margin-top: 10px;
}
.designBottom .line1 {
  margin-top: 10px;
}
</style>