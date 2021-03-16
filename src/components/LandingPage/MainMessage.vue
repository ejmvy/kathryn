<template>
  <section id="welcomeMessage">
    <div class="welcome">
      <div class="designTop">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="dot"></div>
      </div>
      <div class="message">
        <h1>Kathryn Ceramics</h1>
        <h4>"Thoughtful, Authentic, Personal"</h4>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <div class="designBottom">
        <div class="dot"></div>
        <div class="line2"></div>
        <div class="line1"></div>
      </div>
    </div>

  </section>
</template>

<script>
// import LatestDesigns from "./LatestDesigns.vue";
export default {
  components: {
    // LatestDesigns,
  },
};
</script>

<style scoped>
#welcomeMessage {
  width: 100%;
  padding-bottom: 0;
}
#welcomeMessage .welcome {
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 30px 0;
}
#welcomeMessage .welcome .message {
  margin-top: 30px;
  /* padding-bottom: 20px; */
  font-size: 25px;
}
.designTop,
.designBottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 60px;
}
.designBottom {
  margin-top: 40px;
}
/* .line1 {
  width: 300px;
  height: 3px;
  background: #204858;
  border-radius: 40%;
}
.line2 {
  width: 200px;
  height: 3px;
  background: #204858;
  border-radius: 40%;
  margin-top: 10px;
}
.dot {
  width: 10px;
  height: 10px;
  background: #204858;
  border-radius: 50%;
  margin-top: 10px;
} */
.designBottom .line1 {
  margin-top: 10px;
}

@media screen and (max-width: 600px) {
  #welcomeMessage .welcome {
    width: 80%;
  }

  h4 {
    margin: 40px 0;

  }
}
</style>