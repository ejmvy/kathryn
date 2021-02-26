<template>
 <div class='cartMainBg'>
     <div class='cartArea'>
         <div class='purchases'>
            <table>
                <tr class='headerTitle'>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
                <tr v-for='product in cartItems' :key='product'>
                    <td>
                        <div class='productDesc'>
                            <img class='productIcon' src='../../assets/latestDesigns/misc1.jpeg' />
                            <p>{{ product.name }}</p>
                            <div class='light'>Beige</div>
                            <div class='light'>{{ product._id }}</div>
                            
                        </div>
                    </td>
                    <td class='infoDetails'>{{ product.price }}</td>
                    <td class='infoDetails'>{{ product.quantity }}</td>
                    <td class='infoDetails'>{{ total }}</td>
                </tr>
            </table>
         </div>
         <div class='buySection'>
             <div class='topIcon'>
                 <router-link to='/'>
                    <img class='closeIcon' src='../../assets/close.png' />
                 </router-link>
             </div>
             <div class='buyPanel'>
             <div class='buyingInfo'>
                <h3>Total: {{total}}</h3>
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
            total: 0
        }
    },
    created() {
        fetch('http://localhost:3000/api/cart')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.cartItems = data;
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
  opacity: 0;
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
}

.buySection {
    flex: 1;
    background: #365a69;
}

.productIcon {
    width: 80px;
}

table {
    margin-top: 40px;
    width: 100%;
}

td {
    text-align: center;
    flex: 1;
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
}

.productDesc {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
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
    top: 20px;
}

.topIcon {
    position: relative;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
}

.closeIcon {
    height: 20px;
    width: 20px;
    cursor: pointer;
}

.buyPanel {
    position: relative;
    top: 25%;
    color: #f2f2f2;
}

.checkoutBtns {
    padding-top: 30px;
}
</style>