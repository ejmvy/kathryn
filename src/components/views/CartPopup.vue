<template>
  <div class="cartArea">
    <div class="arrow"></div>
   <!-- //v-if='mobileWidth' -->
      <div class='closeBtnArea'> 
        <img @click='$emit("closePopup")' class='xmIcon' src='../../assets/icons/close-grey.png' />
      </div>
    <div class='topLine'>
      <div class='iconArea'>
        <img class='smallIcon' src='../../assets/logos/cart.png' />
        <div class='numberIcon'>{{ getCartLength }}</div>
      </div>
      <h5>Total: {{ getCartTotal }}</h5>

    </div>

    <div class="shopItems">
      <div class="singleItem" v-for="(item, idx) in cartData" :key="item">
        <!-- <img class="itemImg" :src="require(`../../assets/${item.img}`)" /> -->
        <img class="itemImg" :src="item.imageUrl" />
        <div class="itemDesc">
          <label>{{ item.name }}</label>
          <p>{{ item.price }}</p>
        </div>
        <div class="qty">{{ item.quantity }}</div>
        <img
          class="binLogo"
          src="../../assets/icons/bin.png"
          @click="deleteItemFromCart(item, idx)"
        />
      </div>
    </div>
    <router-link to='/cart'>
    <button class="btn contactBtn">View Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartData: [],
      cartTotal: 0,
      totalItems: 0,
    };
  },
  mounted() {
    window.addEventListener('rezise', () => {
      this.windowWidth = window.innerWidth;
    })
  },
  methods: {
    deleteItemFromCart(item, idx) {
      console.log("item to delete:", item._id);
      fetch(`http://localhost:3000/api/cart/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.cartData.splice(idx, 1);
    },
  },
  computed: {
    getCartTotal() {
      return this.cartTotal;
    },
    getCartLength() {
      return this.totalItems;
    },
    mobileWidth() {
      return this.windowWidth <= 600;
    }
  },
  created() {
    fetch("http://localhost:3000/api/cart/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        this.cartData = data;
        this.totalItems = data.length;


        data.forEach(item => {
          console.log(`total: ${item.price}`);
          console.log(typeof(item.price));
          this.cartTotal += item.price;
        })
        this.cartTotal = this.cartTotal.toFixed(2);
        console.log(`total: ${this.cartTotal}`);
      });
  },
};

</script>

<style scoped>
p {
  font-size: 12px;
}
.arrow {
  /* z-index: 10; */
  position: absolute;
  float: right;
  right: 10%;
  top: -15px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 15px solid rgba(32, 72, 88, 0.9);
}
.cartArea {
  position: absolute;
  top: 110px;
  width: 40%;
  right: 0;
  float: right;
  background: rgba(32, 72, 88, 0.9);
  color: white;
  box-shadow: 0 0 3px #666666;
  border-radius: 10px;
  padding-bottom: 20px;

}


.topLine {
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 0 15px;
}

.iconArea {
  display: flex;

}

.numberIcon {
  width: 20px;
  height: 20px;
  background: white;
  color: #204858;
  border-radius: 50%;
  font-weight: bold;
  position: relative;
  top: -10px;
  /* padding: 2px; */
}


.shopItems {
  margin-top: 40px;
  padding: 0 15px;
}

.singleItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 90%; */
  background: rgba(255, 255, 255 0.6);
  padding: 10px 0;
  /* border: 2px solid yellow; */
  border-bottom: 1px solid #ccc;
}

.itemImg {
  width: 70px;
  height: 70px;
}
.itemDesc {
  display: flex;
  flex-direction: column;
  line-height: 0.5;
  align-items: flex-start;
  padding-top: 15px;
  /* position: relative;
        top: 25%; */
}

.itemDesc p {
  color: #ccc;
}

.binLogo {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.smallIcon {
  width: 25px;
  height: 25px;
}

.xmIcon {
  width: 20px;
  height: 20px;
}

.closeBtnArea {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .cartArea {
    z-index: 5 !important;
    width: 100%;
    height: 100vh;
    top: 0;
    background: rgba(32, 72, 88, 1);
    border-radius: 0;
    float:none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .topLine {
    margin-top: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .cartArea {
    position: fixed;
    max-width: 400px;
  }
}


</style>