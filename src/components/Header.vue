<template>
  <header>
    <div class="headerArea">
      <router-link class="logo" to='/'>{{ mobileWidth ? shortTitle : longTitle }}</router-link>
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
          <router-link to="login">
            <img class='userLogo' src='../assets/icons/userIcon.png' />
          </router-link>
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
      <div class='nav2'>
        <li>
          <img class='userLogo' src='../assets/icons/hamburger.png' />
        </li>
        <li>
          <router-link to="login">
            <img class='userLogo middleLink' src='../assets/icons/userIcon.png' />
          </router-link>
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
      </div>
    </div>
  </header>

  <!-- <div :class="{ cartOpened: cartOpen }">
    <div class="cartImport">
      <CartPopup></CartPopup>
    </div>
  </div> -->
</template>

<script>
// import CartPopup from "../components/views/CartPopup.vue";
export default {
  data() {
    return {
      cartOpen: false,
      windowWidth: window.innerWidth,
      longTitle: 'Ceramics By Kathryn',
      shortTitle: 'KC',
    };
  },
  mounted() {
    window.addEventListener('rezise', () => {
      this.windowWidth = window.innerWidth;
    })
  },
  methods: {
    openCart() {
      this.cartOpen = !this.cartOpen;
    },
  },
  computed: {
    mobileWidth() {
      return this.windowWidth <= 600;
    }
  },
  components: {
    // CartPopup,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  width: 100%;
  position: absolute;
  background: rgba(32, 72, 88, 0.7);
  /* background: rgba(42, 122, 153,0.9); */
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
  text-decoration: none;
}

header .headerArea nav, header .headerArea .nav2 {
  display: flex;
  align-items: center;
}

header .headerArea .nav2 {
  display: none;
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

.userLogo {
  width: 20px;
  height: 20px;
}

.cartImport {
  position: relative;
  right: -100px;
  opacity: 0;
  transition: right 0.3s, opacity 0.3s;
  z-index: -1;
}

.cartOpened .cartImport {
  right: 0;
  opacity: 1;
  z-index: 3;
}

@media screen and (max-width: 1000px) {
  header .headerArea {
    padding: 5px 20px; 
  }
  header .headerArea .logo {
    font-size: 25px;
  }
  header .headerArea nav li {
    font-size: 14px;
    margin: 0 15px;
  }
  .cartLogo {
    width: 25px;
    height: 25px;
  }
}

@media screen and (max-width: 750px) {
  header .headerArea nav {
    display: none;
  }
  header .headerArea .nav2 {
    display: block;
    display: flex;
    align-items: center;
    list-style: none;
    /* border: 1px solid red; */

  }
  .middleLink {
    margin: 0 25px;
  }
  .cartLogo {
    width: 23px;
    height: 23px;
  }
  .userLogo {
    width: 18px;
    height: 18px;
  }
}
</style>
