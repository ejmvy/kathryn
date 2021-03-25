<template>
    <div style='height: 100%'>
        <div class='orderPanel'>
            <h5>Your Recent Orders</h5>
            
            <div class='orderArea'>

                <div class='headerLine'>
                    <div  class='leftAlign chunk'>Customer</div>
                    <div  class='chunk'>Items</div>
                    <div  class='chunk'>Amount</div>
                    <div  class='chunk'>Order Date</div>
                    <div class='chunk'>Mark As Delivered</div>
                    <div  class='openIcon'> </div>
                </div>

                <div  v-for='item in recentOrders' :key='item'>
                    <div class='mainLine'>
                        <div class='leftAlign chunk'>{{ item.customerName }}</div>
                        <div class='chunk'>{{ item.products.length }}</div>
                        <div class='chunk'>{{ item.totalAmount }}</div>
                        <div class='chunk'>{{ item.orderDate }}</div>
                        <input class='chunk' type='checkbox'>
                        <img @click='item.showDetails = !item.showDetails' class='openIcon' src='../../assets/icons/right.png' :class="{'rotateArrow': item.showDetails}"/>
                    </div>
                    

                    <div v-if='item.showDetails' class='hiddenDetails'>
                        <div class='productInfo'>
                            <div v-for='product in item.products' :key='product' class="productLine">
                                <img class='productImage' src='../../assets/latestDesigns/dish1.jpeg'>
                                <div>{{ product.name }}</div>
                                <div>{{ product.quantity }}</div>
                                <div>{{ product.colour }}</div>
                                <div>{{ product.price }}</div>
                            </div>
                        </div>
                        <div class='borderLine'></div>
                        <div class='customerInfo'>
                            <div>{{ item.customerName }}</div>
                            <div class='addressArea'>
                                <div>{{ item.customerAddress }}</div>
                                <div>{{ item.customerCity }}</div>
                                <div>{{ item.customerPostcode }}</div>
                            </div>
                            <div>{{ item.customerTel }}</div>
                            <div>{{ item.customerEmail }}</div>
                        </div>
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
            showDetails: false,
            recentOrders: [
                {
                    customerName: 'EJ McVey',
                    customerAddress: '37 Victoria Road, Rathgar',
                    customerCity: 'Dublin',
                    customerPostcode: 'D06 EA30',
                    customerEmail: 'ej@gmail.com',
                    customerTel: '0851417730',
                    orderDate: '2021-03-03 12:30:00',
                    totalAmount: '€243',
                    products: [
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        },
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        }
                    ],
                    isDelivered: false,
                    showDetails: false,
                },
                {
                    customerName: 'Mia McVey',
                    customerAddress: '37 Victoria Road, Rathgar',
                    customerCity: 'Dublin',
                    customerPostcode: 'D06 EA30',
                    customerEmail: 'ej@gmail.com',
                    customerTel: '0851417730',
                    orderDate: '2021-03-03 12:30:00',
                    totalAmount: '€81',
                    products: [
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        }
                    ],
                    isDelivered: false,
                    showDetails: false,
                },
                {
                    customerName: 'Marco McVey',
                    customerAddress: '37 Victoria Road, Rathgar',
                    customerCity: 'Dublin',
                    customerPostcode: 'D06 EA30',
                    customerEmail: 'ej@gmail.com',
                    customerTel: '0851417730',
                    orderDate: '2021-03-03 12:30:00',
                    totalAmount: '€45',
                    products: [
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        },
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        },
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        },
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        }
                    ],
                    isDelivered: false,
                    showDetails: false,
                },
                {
                    customerName: 'Eoin McVey',
                    customerAddress: '37 Victoria Road, Rathgar',
                    customerCity: 'Dublin',
                    customerPostcode: 'D06 EA30',
                    customerEmail: 'ej@gmail.com',
                    customerTel: '0851417730',
                    orderDate: '2021-03-03 12:30:00',
                    totalAmount: '€132',
                    products: [
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        },
                        {
                            name: 'Bowl 1',
                            quantity: 2,
                            description: 'Serving Bowl',
                            colour: 'Teal',
                            price: '12.99',
                        }
                    ],
                    isDelivered: false,
                    showDetails: false,
                }
            ]
        }
    }
}
</script>


<style scoped>

h5 {
    text-transform: uppercase;
    font-size: 13px;
    color: #666666;
    margin-top: 0;
}
.orderPanel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 98%;
  margin: 0 auto;
  align-items: center;
}

.orderArea {
    width: 100%;
    margin-top: 40px;
}

.headerLine {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.openIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.mainLine {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 14px;
    border-bottom: 1px solid rgba(32, 72, 88, 0.5);
}



.chunk {
    width: 20%;
    
}

.leftAlign {
    text-align: left;
}

.hiddenDetails {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 40px 0;
    font-size: 14px;
    /* background: white; */
    box-shadow: 0px 0px 4px 0px rgba(196, 195, 195, 0.75);
    /* background: white; */
    margin-bottom: 30px;
}

.productInfo {
    flex: 2;
    
}

.productLine {
    display: flex;
    /* border: 1px solid green; */
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.productImage {
    width: 60px;
    height: 60px;
}

.customerInfo {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.borderLine {
    min-height: 200px;
    width: 1px;
    margin: 0 5% 0 5%;
    background: #ccc
}

.addressArea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.rotateArrow {
  transform: rotate(90deg);
}

.openItem {
    background: white;
    /* border: 2px solid red; */
}

@media screen and (min-width:1200px) {
  .orderPanel {
    width: 80%;
    margin: 0 auto;
  }
}
</style>