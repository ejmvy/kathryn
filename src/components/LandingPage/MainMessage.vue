<template>
  <section id="welcomeMessage">
    <div class="welcome">
      <div class="designTop">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="dot"></div>
      </div>
      <div class="message">
        <h1>From Lockdown to Love</h1>
        <h2>How curiosity turned into a passion</h2>
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

<style scoped>
#welcomeMessage {
  position: relative;
  width: 100%;
  text-align: center;
  height: 600px;
  background: white;
  padding: 300px 0 50px 0;
}
#welcomeMessage .welcome {
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
#welcomeMessage .welcome .message {
  margin: 30px 0;
  padding-bottom: 20px;
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