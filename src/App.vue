<template>
  <div class="indexMain">
    <router-view></router-view>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script>
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // Header,
    // Footer,
  },
};
</script>

<style>
/* light blue: #365a69; */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

h1 {
  font-family: "Nova Mono", monospace;
  font-size: 35px;
  text-transform: uppercase;
}
h2 {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 20px;
  padding-bottom: 30px;
}
h5 {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 15px;
  letter-spacing: 3px;
}
p {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 15px;
}
.btn {
  padding: 10px 50px;
  text-transform: uppercase;
  font-family: "Nova Mono", monospace;
  background: none;
  color: #604800;
  border: 3px solid #204858;
  border-radius: 15px;
  font-size: 15px;
  transition: all 0.5s ease;
  margin-top: 40px;
}
.btn:hover {
  background: #204858;
  color: white;
}

.smBtn {
  margin-top: 0 !important;
  padding: 8px 15px;
  font-size: 12px;
}

.contactBtn {
  border: 2px solid white;
  color: white;
}

.contactBtn:hover {
  background: white;
  color: #204858;
}
.contactBtn:focus,
.btn:focus,
.contactBtn:focus {
  outline: none;
}
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
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
}
.designBottom .line1 {
  margin-top: 10px;
}
</style>
