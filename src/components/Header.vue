<template>
  <header>
    <div class="headerArea">
      <div class="logo">Kathryn O'Kelly</div>
      <nav>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  position: absolute;
  background: rgba(32, 72, 88, 0.7);
}

header .headerArea {
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .headerArea .logo {
  font-family: "Megrim", cursive;
  font-size: 35px;
  color: white;
}
header .headerArea nav {
  display: flex;
}
header .headerArea nav li {
  list-style: none;
  font-size: 17px;
  text-transform: uppercase;
  margin: 0 30px;
  font-family: "Nova Mono", monospace;
  padding: 30px 0;
  z-index: 3;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease;
}
header .headerArea nav li a {
  color: white;
  text-decoration: none;
}
header .headerArea nav li:hover {
  border-bottom: 1px solid white;
}
header .headerArea nav li:hover a {
  color: #eaeaea;
}
</style>
