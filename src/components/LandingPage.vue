<template>
  <MainPhoto></MainPhoto>
  <MainMessage></MainMessage>

  <section id="whyStaging">
    <h1>The Process of Ceramics</h1>
    <div class="reason">
      <div class="picture">
        <img class="reasonImage" src="https://i.ibb.co/r2dQ5Jd/A.jpg" />
      </div>
      <div class="reasonText">
        <div class="designTop">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="dot"></div>
        </div>
        <div class="textSection">
          <h2>Increased Buyer Interest</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
    <div class="reason">
      <div class="reasonText">
        <div class="designTop">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="dot"></div>
        </div>
        <div class="textSection">
          <h2>Higher Sales Price</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
      <div class="picture">
        <img class="reasonImage" src="https://i.ibb.co/r2dQ5Jd/A.jpg" />
      </div>
    </div>
    <div class="reason">
      <div class="picture">
        <img class="reasonImage" src="https://i.ibb.co/r2dQ5Jd/A.jpg" />
      </div>
      <div class="reasonText">
        <div class="designTop">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="dot"></div>
        </div>
        <div class="textSection">
          <h2>Sell Property Faster</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
    <div class="reason">
      <div class="reasonText">
        <div class="designTop">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="dot"></div>
        </div>
        <div class="textSection">
          <h2>Allow Buyers To Visualise</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
      <div class="picture">
        <img class="reasonImage" src="https://i.ibb.co/r2dQ5Jd/A.jpg" />
      </div>
    </div>
  </section>
  <section id="projectCircles">
    <h1>Recent projects</h1>
    <div class="circleCanvas">
      <a class="circlePosition" href="#" id="topLeft">
        <div class="circleCards">
          <img
            class="circle1 front"
            src="https://i.ibb.co/S6sVKS0/04-apartment-furniture-lede-w1200-h630.jpg"
          /><img
            class="circle1 back"
            src="https://i.ibb.co/s67B0vS/Empty-Room.jpg"
          />
        </div>
      </a>
      <div class="circle8"></div>
      <a class="circlePosition" href="#" id="middleLeft">
        <div class="circleCards">
          <img
            class="circle2 front"
            src="https://i.ibb.co/XjfgNjg/2-Test-62-Lake-063.jpg"
          /><img
            class="circle2 back"
            src="https://i.ibb.co/s67B0vS/Empty-Room.jpg"
          />
        </div>
      </a>
      <div class="circle3"></div>
      <a class="circlePosition" href="#" id="topRight">
        <div class="circleCards">
          <img
            class="circle4 front"
            src="https://i.ibb.co/XjfgNjg/2-Test-62-Lake-063.jpg"
          /><img
            class="circle4 back"
            src="https://i.ibb.co/s67B0vS/Empty-Room.jpg"
          />
        </div> </a
      ><a class="circlePosition" href="#" id="middleRight">
        <div class="circleCards">
          <img
            class="circle5 front"
            src="https://i.ibb.co/S6sVKS0/04-apartment-furniture-lede-w1200-h630.jpg"
          /><img
            class="circle5 back"
            src="https://i.ibb.co/s67B0vS/Empty-Room.jpg"
          />
        </div> </a
      ><a class="circlePosition" href="#" id="bottomRight">
        <div class="circleCards">
          <img class="circle6 front" src="https://i.ibb.co/r2dQ5Jd/A.jpg" /><img
            class="circle6 back"
            src="https://i.ibb.co/s67B0vS/Empty-Room.jpg"
          />
        </div>
      </a>
      <div class="circle7"></div>
      <div class="circle9"></div>
      <div class="circle10"></div>
      <button class="btn" id="projectsBtn">View Projects</button>
    </div>
    <div class="hiddenCirlces"></div>
  </section>
  <section id="projectQuestion">
    <div
      class="projectQuestionImage"
      style="
        background-image: url(https://i.ibb.co/XjfgNjg/2-Test-62-Lake-063.jpg);
      "
    ></div>
    <div class="questionArea">
      <h1>Want to get in touch?</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </p>
      <button class="btn">Contact Us</button>
    </div>
  </section>
</template>

<script>
import MainPhoto from "./LandingPage/TopPhoto.vue";
import MainMessage from "./LandingPage/MainMessage.vue";
export default {
  components: {
    MainPhoto,
    MainMessage,
  },
};
</script>

<style scoped>
#whyStaging {
  padding-top: 30px;
  width: 100%;
  background: #eaeaea;
}
#whyStaging .reason {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}
#whyStaging .reason .picture {
  width: 50%;
  height: 80%;
  flex: 2;
}
#whyStaging .reason .picture .reasonImage {
  width: 100%;
  height: 100%;
}
#whyStaging .reason .reasonText {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  box-shadow: 0 5px 15px #ccc;
}
#projectCircles {
  padding-top: 50px;
  background: white;
  width: 100%;
  position: relative;
  min-height: 800px;
}
#projectCircles .circleCanvas {
  width: 70%;
  margin: 0 auto;
  height: 700px;
  position: absolute;
  top: 150px;
  margin-bottom: 50px;
  transition: all 0.8s ease;
}
#projectCircles .circleCanvas .circle1 {
  width: 300px;
  height: 300px;
  background: #204858;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s ease;
}
#projectCircles .circleCanvas .circle2 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 280px;
  height: 280px;
}
#projectCircles .circleCanvas .circle3 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 120px;
  height: 120px;
  background: #604800;
  left: 30%;
  top: 30%;
}
#projectCircles .circleCanvas .circle4 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 300px;
  height: 300px;
  right: 0;
}
#projectCircles .circleCanvas .circle5 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 280px;
  height: 280px;
  z-index: 1;
  top: 30%;
  right: 0;
}
#projectCircles .circleCanvas .circle6,
#projectCircles .circleCanvas .circle10 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 180px;
  height: 180px;
  background: #7a7a7a;
  top: 50%;
  right: 20%;
  z-index: 2;
}
#projectCircles .circleCanvas .circle7 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 150px;
  height: 150px;
  right: 32%;
  top: 55%;
  background: #604800;
  z-index: 3;
}
#projectCircles .circleCanvas .circle8 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #204858;
  top: 27%;
  left: 2%;
}
#projectCircles .circleCanvas .circle9 {
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #204858;
  right: 0;
  top: 20%;
}
#projectCircles .circleCanvas .circle10 {
  top: 50%;
  right: 10%;
  z-index: 1;
}
#projectCircles .circlePosition {
  position: absolute;
  cursor: pointer;
}
#projectCircles .circlePosition:hover {
  z-index: 5;
}
#projectCircles #topRight {
  right: 0;
}
#projectCircles #topLeft {
  left: 0;
}
#projectCircles #middleRight {
  top: 30%;
  right: 0;
}
#projectCircles #middleLeft {
  top: 20%;
  left: 10%;
}
#projectCircles #bottomRight {
  top: 50%;
  right: 20%;
}
#projectCircles .circleCards {
  position: relative;
  transition: all 0.8s ease;
}
#projectCircles .circleCards .front {
  display: inline-block;
}
#projectCircles .circleCards .back {
  position: absolute;
  display: none;
}
#projectCircles .circleCards:hover {
  transform: scale(1.01);
  z-index: 6;
}
#projectCircles .circleCards:hover .back {
  display: inline;
}
#projectCircles a {
  transition: all 0.8s ease;
  position: relative;
}
#projectCircles a .front {
  display: inline-block;
}
#projectCircles a .back {
  position: absolute;
  display: none;
}
#projectCircles a:hover {
  transform: scale(1.01);
  animation: displayImage 5s linear;
}
#projectCircles a:hover .back {
  display: inline;
}
#projectCircles a:hover img {
  transform: scale(1.01);
  z-index: 5;
}
@media (max-width: 800px) {
  #projectCircles .circleCanvas {
    display: none;
  }
}
@keyframes displayImage {
  0% {
    z-index: 1;
  }
  80% {
    z-index: 1;
  }
  100% {
    z-index: 0;
  }
}
#projectCircles #projectsBtn {
  position: absolute;
  bottom: 100px;
  margin: 0 auto;
  left: 40%;
}
@media (max-width: 1200px) {
  #projectCircles .circleCanvas {
    width: 95%;
  }
}
#projectQuestion {
  width: 100%;
  min-height: 300px;
  padding: 50px 0;
  position: relative;
  margin: 0 auto;
}
#projectQuestion .projectQuestionImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
}
#projectQuestion .questionArea {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0px 10px 20px #ccc;
  padding: 30px;
  text-align: center;
}
</style>