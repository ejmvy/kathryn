<template>
    <div style='height: 100%'>
        <div class='orderPanel'>
           <h5>Order history</h5>
           <img @click='showSearch = !showSearch' class='searchIcon' src='../../assets/icons/specs.png' />

           <table cellspacing="0" cellpadding="0">
               <tr>
                   <th>Order</th>
                   <th>Recipient</th>
                   <th>Date</th>
                   <th>Status</th>
                   <th>Items</th>
                   <th>Total</th>
                   <th></th>
               </tr>
               <tr v-if='showSearch'>
                   <td class='noPad'>
                       <input type='text' placeholder="Filter..." />
                   </td>
                   <td  class='noPad'>
                       <input type='text'  placeholder="Filter..." />
                   </td>
                   <td class='noPad'>
                       <input type='text'  placeholder="Filter..." />
                   </td>
                   <td class='noPad'>
                       <input type='text'  placeholder="Filter..." />
                   </td>
                   <td class='noPad'>
                       <div style='min-width: 100px'></div>
                   </td>
                   <td class='noPad'>
                       <div style='min-width: 100px'></div>
                   </td>
                   <td class='noPad'>
                       <div style='min-width: 50px'></div>
                   </td>
               </tr>
               <tr v-for='order in orders' :key='order'>
                   <td>{{ order.orderNumber }}</td>
                   <td>{{ order.customerName }}</td>
                   <td>{{ order.orderDate }}</td>
                   <td>{{ order.isDelivered ? 'Delivered' : 'In Progress' }}</td>
                   <td>{{ order.products.length }}</td>
                   <td>{{ order.totalAmount }}</td>
                   <td>
                       <img class='viewIcon' src='../../assets/icons/view.png' />
                   </td>
               </tr>
           </table>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({ 
        showSearch: false, 
        orders: [
            {
                orderNumber: '#1456',
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
                isDelivered: true,
                showDetails: false,
            },
            {
                orderNumber: '#2234',
                customerName: 'Eoin Reilly',
                customerAddress: '37 Victoria Road, Rathgar',
                customerCity: 'Dublin',
                customerPostcode: 'D06 EA30',
                customerEmail: 'ej@gmail.com',
                customerTel: '0851417730',
                orderDate: '2021-03-03 12:30:00',
                totalAmount: '€72',
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
                orderNumber: '#1426',
                customerName: 'Kathryn Mcvy',
                customerAddress: '37 Victoria Road, Rathgar',
                customerCity: 'Dublin',
                customerPostcode: 'D06 EA30',
                customerEmail: 'ej@gmail.com',
                customerTel: '0851417730',
                orderDate: '2021-03-03 12:30:00',
                totalAmount: '€16',
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
                isDelivered: true,
                showDetails: false,
            },
            {
                orderNumber: '#1537',
                customerName: 'Declan Murphy',
                customerAddress: '37 Victoria Road, Rathgar',
                customerCity: 'Dublin',
                customerPostcode: 'D06 EA30',
                customerEmail: 'ej@gmail.com',
                customerTel: '0851417730',
                orderDate: '2021-03-03 12:30:00',
                totalAmount: '€66',
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
                isDelivered: true,
                showDetails: false,
            },
            {
                orderNumber: '#1763',
                customerName: "Mia O'Kelly",
                customerAddress: '37 Victoria Road, Rathgar',
                customerCity: 'Dublin',
                customerPostcode: 'D06 EA30',
                customerEmail: 'ej@gmail.com',
                customerTel: '0851417730',
                orderDate: '2021-03-03 12:30:00',
                totalAmount: '25',
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
                isDelivered: true,
                showDetails: false,
            },
            {
                orderNumber: '#13326',
                customerName: 'Marco McVey',
                customerAddress: '37 Victoria Road, Rathgar',
                customerCity: 'Dublin',
                customerPostcode: 'D06 EA30',
                customerEmail: 'ej@gmail.com',
                customerTel: '0851417730',
                orderDate: '2021-03-03 12:30:00',
                totalAmount: '€73',
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
    })
}
</script>


<style scoped>
.orderPanel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}

h5 {
    text-transform: uppercase;
    font-size: 13px;
    color: #666666;
    margin-top: 0;
}


table {
    /* border: 2px solid yellow; */
    width: 100%;
    border: none;
    transition: all 2s ease-in-out;
}

table th {
    background: rgba(32, 72, 88, 0.7);
    color: white;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 12px;
}

table td {
    font-size: 13px;
    padding: 18px 0;
    border-bottom: 1px solid #ccc;
}

table tr:hover {
    background: rgb(211, 212, 212);
}

.searchIcon {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    cursor: pointer;
    transition: all .5s ease-in-out;
}

.searchIcon:hover {
    transform: scale(1.1);
}

input {
    border: none;
    border-bottom: 1px solid #365a69;
    background: none;
    padding: 8px;
}

input:focus {
    outline: none;
}

.noPad {
    padding: 18px 0 0 0;
}

.viewIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>