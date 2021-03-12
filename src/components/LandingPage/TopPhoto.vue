<template>
  <section>
    <div class='mainImage'>
      <div class="mainTextArea">
        <h1 class='logo'>Kathryn O'Kelly</h1>
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
        <!-- <img class='topImage' src='../../assets/people-reverse.jpg'/> -->
        <img class='topImage' src='../../assets/latestDesigns/cups1.jpeg'/>
      </div>

      
    </div>
    
  </section>
</template>

<style scoped>

section {
  padding-bottom: 0;
}

.mainImage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background: #ecedf1; */
  /* border: 2px solid red; */
  /* padding-top: 90px; */
  min-height: 100vh;
/* border-bottom: 1px solid #ccc; */
}

.mainTextArea {
  position: absolute;
  /* bottom: -50px; */
  width: 50%;
  left: 25%;
  bottom: 0;
  margin: 0 auto;
  /* margin-left: 5%; */
  padding: 10px 20px 20px 20px;
  text-align: center;
  flex: 1;
  z-index: 3; 
  
}

button {
  margin-top: 15px;
}

h1 {
  font-size: 40px;
  color: #204858;
}

.mainTextArea p {
  font-size: 14px;
  color: #494949;
  letter-spacing: 1.5px; 
}

.mainImageArea {
  /* flex: 5; */
  position: absolute;
  width: 100vw;
  height: 100vh;
  flex: 2;
  /* border: 2px solid green;  */
  z-index: -1;
}

.topImage {
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
}

@media only screen and (min-width:1200px) {

  section {
    width: 100%;

  }
}
</style>