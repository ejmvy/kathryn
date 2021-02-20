<template>
  <section id="mainImage">
    <div class="mainImageArea">
      <div
        class="fullImage"
        style="
          background-image: url(https://i.ibb.co/2yfX0rk/Irish-Pottery-main.jpg);
        "
      ></div>
    </div>
    <div class="mainTextArea">
      <h1>Kathryn McVey</h1>
      <h2>Irish Ceramic Artist</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>
      <button class="btn">SHOP NOW</button>
    </div>
  </section>
</template>

<style scoped>
#mainImage {
  position: relative;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
}
#mainImage .fullImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
}
#mainImage .mainTextArea {
  position: absolute;
  text-align: center;
  top: 80%;
  /* background: rgba(234, 234, 234, 0.6); */
  background: rgba(250, 250, 250, 0.9);
  width: 40%;
  padding: 10px 40px 30px 40px;
  z-index: 4;
  box-shadow: 0 5px 15px #ccc;
}
</style>