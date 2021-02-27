<template>
  <header>
    <div class="headerArea">
      <div class="logo">Ceramics By Kathryn</div>
      <nav>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">
            <img
              class="cartLogo"
              src="../assets/logos/cart.png"
              @click="openCart()"
            />
          </a>
        </li>
      </nav>
    </div>
  </header>

  <div :class="{ cartOpened: cartOpen }">
    <div class="cartImport">
      <CartPopup></CartPopup>
    </div>
  </div>
</template>

<script>
import CartPopup from "../components/views/CartPopup.vue";
export default {
  data() {
    return {
      cartOpen: false,
    };
  },
  methods: {
    openCart() {
      this.cartOpen = !this.cartOpen;
    },
  },
  components: {
    CartPopup,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  position: absolute;
  background: rgba(32, 72, 88, 0.7);
  box-shadow: 0 5px 10px 5px #ccc;
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
  align-items: center;
}
header .headerArea nav li {
  list-style: none;
  font-size: 17px;
  text-transform: uppercase;
  margin: 0 30px;
  font-family: "Nova Mono", monospace;
  padding: 20px 0;
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

.cartLogo {
  width: 30px;
  height: 30px;
}

.cartImport {
  position: relative;
  right: -100px;
  opacity: 0;
  transition: right 0.3s, opacity 0.3s;
}

.cartOpened .cartImport {
  right: 0;
  opacity: 1;
}
</style>
