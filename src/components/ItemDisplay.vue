<template>
<Header></Header>
    <section class="shopPage">
        <div class='shopNavInfo'>
            <div class='shopNav'>
                <router-link class='routerLink' to='/shop'>Collection</router-link>
                <div class='breakLine'>/</div>
                <p>{{ item.name }}</p>
            </div>
        </div>

        <div class='displayArea'>
            <div class='imageArea'>
                <div class='smallImages'>
                    <div v-for='smImg in item.imageUrlArray' :key='smImg'>
                        <img class='smImageDisplay' :src='smImg' @click='changeImage(smImg)' />
                    </div>
                </div>
                <div class='lrgImage'>
                    <img class='lrgImageDisplay' :src='imageView' />
                </div>
            </div>

            <div class='textArea'>
                <h3 id='leftAlign'>{{ item.name }}</h3>
                <p  id='leftAlign'>{{ item.price }}</p>
                <p>{{ item.description }}</p>

                <div class='customerChoice'>
                    <label>Color</label>
                    <select v-model='colourPicked' class='selectOption'>
                        <!-- :value='col' -->
                        <option v-for='col in item.colourArr' :key='col' :value='col'>{{ col }}</option>
                    </select>
                        
                </div>
                <div class='customerChoice'>
                    <label>Quantity</label>
                    <select v-model='item.quantity' class='selectOption'>

                        <option v-for='num in quantityValues' :key='num' :value='num'>{{ num }}</option>
                    </select>
                </div>

                <button @click='addItemToCart(item)' class='btn'>Add To Basket</button>
            </div>
        </div>

        <ProductDescription :itemInfo='item'></ProductDescription>

        

    </section>
    <FrequentQuestions></FrequentQuestions>
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ProductDescription from './ItemDisplayPage/ProductDesription.vue';
import FrequentQuestions from './ItemDisplayPage/FrequentQuestions.vue';

export default {
    data() {
        return {
            item: {},
            colourVal: null,
            quantityValues: ['One', 'Two', 'Three', 'Four', 'Five'],
            colourPicked: '',
            'quantityList': {
                  'One': 1,
                  'Two': 2,
                  'Three': 3,
                  'Four': 4,
                  'Five': 5
              },
              imageView: '',
        //     displayItem:  {
        //       'name': 'Bowl 1',
        //       'id': '1',
        //       'price': '14.99',
        //       'img': 'latestDesigns/bowl1.jpeg',
        //       'dimensions': '30 x 25 cm',
        //       'quantity': ['one', 'two', 'three'],
              
        //       'colourArr': ['Teal', 'Aqua', 'Brown'],
        //       'colours': 'Teal, Aqua, Brown, Navy, Beige',
        //       'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        //       'washing': 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        //       'smImages': [
        //           'latestDesigns/bowl1.jpeg',
        //           'latestDesigns/bowl1.jpeg',
        //           'latestDesigns/bowl1.jpeg',
        //           'latestDesigns/bowl1.jpeg',
        //       ]
        //   },
        }
    },
    methods: {
        changeImage(imgUrl) {
            this.imageView = imgUrl;
        },
        addItemToCart(item) {
            console.log('ITEM ADDED: ', item);
            fetch('http://localhost:3000/api/cart/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    quantity: this.quantityList[item.quantity],
                    colourPicked: this.colourPicked,
                    imageUrl: item.imageUrl,
                    dimensions: item.dimensions,
                    numberInStock: item.numberInStock,
                })
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('ITEM SENT: ');
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },

    created() {
        fetch(`http://localhost:3000/api/products/${this.$route.params.id}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log('DISPLAY ITEM');
            // console.log(data);
            data.colourArr = data.colour.split(',');
            data.colourArr = data.colourArr.map(col => col.trim());
            console.log(data);
            this.imageView = data.imageUrlArray[0];
            this.item = data;
        })
    },
    components: {
        Header,
        Footer,
        ProductDescription,
        FrequentQuestions,
    }
}
</script>

<style scoped>
h3 {
    padding-bottom: 0;
    text-transform: uppercase;
    /* font-family: Avenir sans-serif; */
}
p {
    text-align: left;
    font-size: 15px;

}

select {
    cursor: pointer;
}

.shopPage {
  padding-top: 120px;
  /* margin-bottom: 80px; */
}

.shopNavInfo {
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.routerLink {
    text-decoration: none !important;
    color: #666666;
    /* font-weight: bold; */
    cursor: pointer;
    padding: 10px 0;
}

.routerLink:hover {
    border-bottom: 2px solid #ccc;
    /* text-decoration: underline; */
}

.shopNav {
    display: flex;
    align-items: center;
    color: #666666;
}

.breakLine {
    padding: 0 20px;
}

.displayArea {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    
}

.imageArea {
    display: flex;
    flex: 1;
}

.smallImages {
    display: flex;
    flex-direction: column;
}

.smImageDisplay {
    width: 100px;
    height: 100px;
    cursor: pointer;
}

.lrgImage {
    width: 90%;
}

.lrgImageDisplay {
    width: 80%;
    height: 100%;
    margin-left: 40px;
}

.textArea {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    margin-left: 50px;
    text-align: left !important;
}

#leftAlign {
    /* text-align: left !important; */
    text-align: start;
}

.customerChoice {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
    padding-bottom: 8px;
}

label {
    text-transform: uppercase;
    font-size: 13px;
}

select {
    border: none;
    font-size: 13px;
    color: #204858;
    outline: none;
}
</style>