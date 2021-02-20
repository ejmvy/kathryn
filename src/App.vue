<template>
  <Header></Header>
  <LandingPage></LandingPage>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Header from "./components/Header.vue";
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingPage,
  },
};
</script>

<style>
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
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
