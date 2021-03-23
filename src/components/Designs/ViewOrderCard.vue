<template>
 <!-- <div class='cartMainBg'> -->
     <div class='cartArea'>
         <div v-if='mobileWidth' class='topIcon'>
            <img @click="$emit('closePopup')" class='closeIcon' src='../../assets/icons/close-grey.png' />
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
                    <tr v-for='(product, idx) in orderDetails.products' :key='idx'>
                            <td>
                            <div class='productDesc' :class="{padRight: mobileWidth}">
                                 <!-- :src='product.imageUrl'  -->
                                <img class='productIcon' src='../../assets/latestDesigns/bowl1.jpeg' />
                                <p>{{ product.name }}</p>
                                <div class='light'>{{ product.colour }}</div>
                                <div v-if='!mobileWidth' class='light'>{{ product._id }}</div>
                                
                            </div>
                        </td>
                        <td class='infoDetails'>{{ product.price }}</td>
                        <td class='infoDetails'>{{ product.quantity }}</td>
                        <td class='infoDetails'>{{ (product.price * product.quantity).toFixed(2) }}</td>
                        
                    </tr>
                </div>
                <div v-if='orderDetails.products.length > 2' class='downIconArea'>
                    <img class='downIcon' src='../../assets/icons/down-green.png' />
                </div>
            </table>
            <div class='totalArea'>
                <p class='totalHeader'>Total</p>

                <div class='totalFigure'>{{ orderDetails.totalAmount }}</div>
            </div>
         </div>
         <div class='buySection'>
             <div v-if='!mobileWidth' class='topIcon'>
                <img @click="$emit('closePopup')" class='closeIcon' src='../../assets/icons/close.png' />
             </div>
             <div class='buyPanel'>
                <div class='buyingInfo'>
                    <h5>Customer Details</h5>
                    <p>{{ orderDetails.customerName }}</p>
                    <div class='detailsCard'>
                        <label>Address: </label>
                        <p>{{ orderDetails.customerAddress }}</p>
                        <p>{{ orderDetails.customerCity }}</p>
                        <p>{{ orderDetails.customerPostcode }}</p>
                    </div>
                    <div class='detailsCard'>
                        <label>Email: </label>
                        <p>{{ orderDetails.customerEmail }}</p>
                    </div>
                    <div class='detailsCard'>
                        <label>Tel: </label>
                        <p>{{ orderDetails.customerTel }}</p>
                    </div>
                </div>
                <div class='buyingInfo'>
                    <h5>Order Details</h5>
                    <p>{{ orderDetails.orderNumber }}</p>
                    <div class='detailsCard'>
                        <label>Ordered: </label>
                        <p>{{ orderDetails.orderDate }}</p>
                    </div>
                    <div class='detailsCard'>
                        <label>Delivered: </label>
                        <p>{{ orderDetails.deliveredDate }}</p>
                    </div>
                </div>
             </div>
             
         </div>
     </div>
</template>

<script>
export default {
    props: ['orderDetails'],
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
    computed: {
         mobileWidth() {
            return this.windowWidth <= 750;
        }
    },
}
</script>

<style scoped>

.cartArea {
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 2;
  width: 80%;
  height: 80%;
  background: white;
  box-shadow: 0 0 20px rgb(100, 98, 98);
  display: flex;  
}

.purchases {
    flex: 2;
    padding: 20px;
    padding-left: 50px;
}

.cartListArea {
    overflow: auto;
    height: 400px;
    transition: all 5s ease-in-out;
}


.padRight {
    margin-right: 30px;
}

.buySection {
    flex: 1;
    background: #365a69;
}

.productIcon {
    width: 70px;
    height: 70px;
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
    text-align: center;
    font-size: 15px;
}

.alignLeft {
    text-align: left;
}

.productDesc {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 10px;
}

.productDesc p {
    margin-bottom: 2px;
    font-size: 13px;
}

.light {
    font-size: 12px;
    color: #666666;
}

.infoDetails {
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
    bottom: 0;
}

.downIcon {
    height: 20px;
    width: 20px;
}

.buyPanel {
    position: relative;
    text-align: left;
    /* top: 25%; */
    padding-left: 10px;
    color: #f2f2f2;
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: space-between;
}

.buyPanel h5 {
    text-transform: uppercase;
    padding-left: 10px;
    font-size: 13px;
    color: rgb(177, 176, 176);
}

.detailsCard {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
}

.detailsCard p {
    margin: 5px 0;
}


.buyingInfo p {
    color: white;
    padding: 0 10px;
    font-size: 13px;
    line-height: 1;
}

.noPad {
    padding-bottom: 0;
}

.buyingInfo label {
    padding-left: 10px;
    font-size: 12px;
    margin-top: 10px;
}

.removeAppear .removeBtn {
  opacity: 1;
}

.totalArea {
    display: flex;
    /* border: 2px solid red; */
    position: absolute;
    width: 55%;
    bottom: 3%;
    align-items: center;
    justify-content: space-between;
}

.totalHeader {
    font-size: 15px;
    text-transform: uppercase;
    color: #365a69;
}

.totalFigure {
    font-size: 22px;
    color: #365a69;
}



@media screen and (max-width: 900px) {
    .cartArea {
        width: 90%;
        top: 10%;
        left: 5%;
    }
}

@media screen and (max-width: 750px) {
    .cartArea {
        width: 96%;
        top: 2%;
        left: 2%;
        flex-direction: column;
    }

    .cartListArea {
        height: 300px;
    }

    .purchases {
         padding: 0;
        padding-left: 20px;
        margin-top: -10px;
    }

    .headerTitle {
        padding-bottom: 30px;
    }

    .buyPanel {
        top: 0;
        flex-direction: row;
        /* align-items: center; */
        justify-content: space-between;
        padding: 0 40px  20px 20px;
    }

    .buyingInfo p {
        /* padding: 0; */
        font-size: 11px;
    }

    .downIconArea {
        bottom: 5px;
        right: 5px;
    }

    .detailsCard {
        padding-top: 0;
    }

    h3 {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 650px) {
    .cartArea {
        width: 100%;
        top: 0;
        left: 0;
    }
}

</style>