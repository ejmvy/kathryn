<template>
 <div class='cartMainBg'>
     <div class='cartArea'>
         <div v-if='mobileWidth' class='topIcon'>
            <router-link to='/'>
                <img class='closeIcon' src='../../assets/icons/close-grey.png' />
                </router-link>
            </div>
         <div class='purchases'>
            <table>
                <tr class='headerTitle'>
                    <td class='alignLeft'>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
                <div class='cartListArea'>
                    <tr class='cartItem'  v-for='(product, idx) in cartItems' :key='idx'>
                            <td>
                            <div class='productDesc' :class="{padRight: mobileWidth}">
                                <img class='productIcon' :src='product.imageUrl' />
                                <p>{{ product.name }}</p>
                                <div class='light'>{{ product.colour }}</div>
                                <div v-if='!mobileWidth' class='light'>{{ product._id }}</div>
                                
                            </div>
                        </td>
                        <td class='infoDetails'>{{ product.price }}</td>
                        
                        <td class='infoDetails'>
                            <div class='quantityArea'>
                                <div class='iconArea' @click='minusPrice(product)'>
                                    <div class='minusBtn'></div>
                                </div>
                                <div>{{ product.quantity }}</div>
                                <div @click='plusPrice(product)' class='plusBtn'>+</div>
                            </div>
                            <div :class="{'removeAppear': product.quantity === 0}">
                                <div @click='removeItem(product, idx)' class='removeBtn'>Remove</div>
                            </div>
                        </td>
                        <td class='infoDetails'>{{ (product.price * product.quantity).toFixed(2) }}</td>
                        
                    </tr>
                </div>
                <div v-if='cartItems.length > 2' class='downIconArea'>
                    <img class='downIcon' src='../../assets/icons/down-green.png' />
                </div>
            </table>
         </div>
         <div class='buySection'>
             <div v-if='!mobileWidth' class='topIcon'>
                 <router-link to='/'>
                    <img class='closeIcon' src='../../assets/icons/close.png' />
                 </router-link>
             </div>
             <div class='buyPanel'>
                <div class='buyingInfo'>
                    <h3>Total: {{getTotal}}</h3>
                    <p>Shipping & Postage Included</p>
                </div>
                <div class='checkoutBtns'>
                    <button class='btn contactBtn'>Checkout</button>
                    <!-- <button >PayPal</button> -->
                </div>

             </div>
             
         </div>
     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [],
            total: 0,
            isRemoved: false,
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('rezise', () => {
        this.windowWidth = window.innerWidth;
        })
    },
    methods: {
        minusPrice(product) {
            product.quantity = product.quantity > 0 ? product.quantity - 1 : product.quantity;
        },
        plusPrice(product) {
            product.quantity = product.quantity + 1;
        },
        removeItem(product, idx) {
            product.isRemoved = true;
            console.log("DELETE");
            console.log(product);
            fetch(`http://localhost:3000/api/cart/${product._id}`, {
                method: 'DELETE',
                'Content-Type': 'application/json'
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            
            this.cartItems.splice(idx, 1);
            
            // this.isRemoved = false;
        }
    },
    computed: {
        getTotal: function() {
            var totalValue = 0;
            this.cartItems.forEach(product => {
                let productTotal =  product.price * product.quantity;
                totalValue = totalValue + productTotal;
            })
            return totalValue.toFixed(2);
        },
         mobileWidth() {
        return this.windowWidth <= 750;
        }
    },
    created() {
        fetch('http://localhost:3000/api/cart')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.cartItems = data;
                console.log('cart: ', this.cartItems);
            })
    }
}
</script>

<style scoped>
h4 {
  text-transform: uppercase;
  padding-bottom: 30px;
  padding-left: 10px;
}

.itemFont {
  font-size: 13px;
  padding: 0 40px;
}

.itemName {
  padding-right: 40px;
}

.saveBtn {
  padding: 5px 15px;
  font-size: 13px;
}

button {
  transition: all 1s ease-in-out;
}

.hide {
    color: red;
    border: 3px solid green;
  opacity: 0;
  transition: all 2s ease-in-out;
}

.show {
  opacity: 1;
}

.cartMainBg {
  position: absolute;
  /* z-index: 5; */
  width: 100%;
  height: 100%;
  background: rgba(32, 72, 88, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
}

.cartArea {
  width: 80%;
  height: 80%;
  background: white;
  box-shadow: 0 0 20px rgb(100, 98, 98);
  display: flex;
  /* flex-direction: column; */
  
}



.purchases {
    flex: 2;
    padding: 20px;
    /* border: 2px solid yellow; */
    padding-left: 50px;
}

.cartListArea {
    overflow: auto;
    height: 90%;
    transition: all 5s ease-in-out;
    /* border: 1px solid red; */
}


.padRight {
    margin-right: 30px;
}


.cartItem {
    transition: all 5s ease-in-out;
}

.buySection {
    flex: 1;
    background: #365a69;
}

.productIcon {
    width: 80px;
    height: 80px;
}

table {
    margin-top: 40px;
    width: 100%;
}

td {
    text-align: center;
    flex: 1;
    /* border: 1px solid red; */
}

.headerTitle {
    padding-bottom: 60px;
}

.headerTitle td {
    font-size: 12px;
    text-transform: uppercase;
}

tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    text-align: center;
    font-size: 15px;
    /* border: 1px solid blue; */
}

.alignLeft {
    text-align: left;
}

.productDesc {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
    /* padding: 0 30px; */
}

.productDesc p {
    margin-bottom: 5px;
}

.light {
    font-size: 12px;
    color: #666666;
}

.infoDetails {
    /* border: 1px solid green; */
    position: relative;
    padding-top: 25px;
}

.topIcon {
    position: relative;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
}

.closeIcon {
    height: 25px;
    width: 25px;
    cursor: pointer;
}

.downIconArea {
    display: flex;
    justify-content: flex-end;
    position: relative;
    bottom: 30px;
}

.downIcon {
    height: 20px;
    width: 20px;
}

.buyPanel {
    position: relative;
    top: 25%;
    color: #f2f2f2;
}

.checkoutBtns {
    padding-top: 30px;
}

.quantityArea {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
}

.iconArea {
    padding: 10px 0;
    cursor: pointer;
}

.minusBtn, .plusBtn {
    margin: 0 30px;
    font-size: 20px;
    cursor: pointer;
    color: #365a69;
    /* border: 1px solid red; */
}

.plusBtn {
    font-weight: bold;
    margin-top: -2px;
}

.minusBtn {
    width: 10px;
    height: 2px;
    background: #365a69;
    /* padding: 5px 0; */
}

.removeBtn {
    margin-top: 40px;
    /* padding-bottom: 5px; */
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
    opacity: 0;
    transition: opacity 0.3s;
}

.buyingInfo p {
    color: white;
    padding: 0 10px;
}

.removeAppear .removeBtn {
  opacity: 1;
}


@media screen and (max-width: 900px) {
    .cartArea {
        width: 90%;
    }

   
}

@media screen and (max-width: 750px) {
    .cartArea {
        flex-direction: column;
    }
    
    .cartListArea {
        height: 400px;
        /* border: 2px solid yellow; */
    }

     .purchases {
         padding: 0;
        padding-left: 20px;
        padding-top: 0;
    }

    .buyPanel {
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    .checkoutBtns {
        padding-top: 0;
    }

    .buyingInfo {
        text-align: left;

    }
    .buyingInfo p {
        padding: 0;
        font-size: 11px;
    }

    .btn {
        margin-top: 0;
    }
    .buySection {
        flex: 0;
    }
    .downIconArea {
        bottom: 0;
    }

    h3 {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 650px) {
    .cartMainBg {
       margin: 0;
       background: white;
    }
    .cartArea {
        width: 100%;
        height: 100%;
        
        box-shadow: none;
    }

    .cartListArea {
        /* border: 2px solid red; */
        height: 65vh;
    }

    .purchases {
       padding: 0 10px;
    }

    .headerTitle {
        padding-bottom: 30px;;
    }
}

</style>