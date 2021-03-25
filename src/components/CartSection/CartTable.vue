<template>
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
</template>



<script>
export default {
    props: ['cartItems'],
    data() {
        return {
            // cartItems: [],
            total: 0,
            isRemoved: false,
            windowWidth: window.innerWidth,
        }
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
        },
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
        },
     },

    // created() {
    //     fetch('http://localhost:3000/api/cart')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             this.cartItems = data;
    //             console.log('cart: ', this.cartItems);
    //         })
    // },
    
}
</script>

<style scoped>
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
    position: relative;
    padding-top: 25px;
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


.quantityArea {
    display: flex;
    justify-content: center;
    align-items: center;
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
}

.plusBtn {
    font-weight: bold;
    margin-top: -2px;
}

.minusBtn {
    width: 10px;
    height: 2px;
    background: #365a69;
}

.removeBtn {
    margin-top: 40px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
    opacity: 0;
    transition: opacity 0.3s;
}

.removeAppear .removeBtn {
  opacity: 1;
}



@media screen and (max-width: 750px) {
    
    .cartListArea {
        height: 400px;
        /* border: 2px solid yellow; */
    }

    /* .btn {
        margin-top: 0;
    }
    .buySection {
        flex: 0;
    } */
    .downIconArea {
        bottom: 0;
    }

    /* h3 {
        margin-bottom: 0;
    } */
}

@media screen and (max-width: 650px) {

    .cartListArea {
        /* border: 2px solid red; */
        height: 65vh;
    }

    .headerTitle {
        padding-bottom: 30px;;
    }
}

</style>
