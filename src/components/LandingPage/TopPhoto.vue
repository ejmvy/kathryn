<template>
  <section>
    <div class='mainImage'>
      <div class="mainTextArea">
        <h1 class='logo'>Ceramics By Kathryn</h1>
        <h3>Irish Ceramic Artist</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button class="btn">SHOP NOW</button>
      </div>
      <div class="mainImageArea">
        <img class='topImage' src='../../assets/people-reverse.jpg'/>

      </div>
    </div>
    
  </section>
</template>

<style scoped>


.mainImage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 2px solid red; */
  padding-top: 100px;
  min-height: 90vh;
/* border-bottom: 1px solid #ccc; */
}

.mainTextArea {
  /* border: 2px solid green; */
  padding-left: 10%;
  padding-right: 30px;
  text-align: left;
  flex: 1;
  z-index: 3; 
  width: 900px;
  /* border: 2px solid red; */
}

.mainTextArea p {
  font-size: 14px;
  color: #666666;
  letter-spacing: 1.5px; 
}

.mainImageArea {
  /* flex: 5; */
  height: 60vh;
  flex: 2;
  /* border: 2px solid green;  */
  z-index: -1;
}

.topImage {
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
}
</style>