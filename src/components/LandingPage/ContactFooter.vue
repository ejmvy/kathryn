<template>
  <div class="padBottom">
    <div class="icons">
      <div class="circle" v-for="logo in logos" :key="logo">
        <img class="circleImg" :src="require(`../../assets/${logo}`)" />
      </div>
    </div>
    <p>+353 85 2577 656</p>
    <p>kathrynokelly@gmail.com</p>
    <p>RATHGAR, DUBLIN, IRELAND</p>

    <div class="mainFooter">
      <div class="footerArea">
        <p>@2021 Kathryn Ceramics</p>
        <p>Designed by EJ</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: ["logos/instaLogo.png", "logos/fb-f.png", "logos/etsy2.png"],
    };
  },
};
</script>

<style scoped>
.padBottom {
  width: 100%;
  padding: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 0; */
}
p {
  font-size: 15px;
  line-height: 0.5;
}
.icons {
  display: flex;
  width: 50%;
  justify-content: center;
  padding-bottom: 20px;
}
.circle {
  background: black;
  color: white;
  border-radius: 50%;
  /* padding: 8px; */
  margin: 0 20px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  transition: all 0.2s ease-in-out;
}
.circle:hover {
  transform: scale(1.05);
}

.circleImg {
  position: relative;
  width: 30px;
  height: 30px;
  font-size: 50px;
  top: 15%;
}

.mainFooter {
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid #ccc;
}

.footerArea {
  display: flex;
  justify-content: space-between;
  /* width: 90%; */
  padding: 0 20px;
  
}

.footerArea p {
  font-size: 12px;
}

@media screen and (max-width: 500px) {
  p {
    font-size: 12px;
  }
}
</style>