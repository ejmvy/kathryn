<template>
    <section class="shopPage">
        <div class='shopNavInfo'>
            <p>Collection  /  All  /  {{ item.name }} </p>
        </div>

        <div class='displayArea'>
            <div class='imageArea'>
                <div class='smallImages'>
                    <div v-for='smImg in item.smImages' :key='smImg'>
                        <img class='smImageDisplay' :src='require(`../assets/${smImg}`)' />
                    </div>
                </div>
                <div class='lrgImage'>
                    <img class='lrgImageDisplay' :src='require(`../assets/${item.img}`)' />
                </div>
            </div>

            <div class='textArea'>
                <h3 id='leftAlign'>{{ item.name }}</h3>
                <p  id='leftAlign'>{{ item.price }}</p>
                <p>{{ item.description }}</p>

                <div class='customerChoice'>
                    <label>Color</label>
                    <select class='selectOption'>
                        <option value='beige'>Beige</option>
                        <option value='teal'>Teal</option>
                        <option value='aqua'>Aqua</option>
                        <option value='brown'>Brown</option>
                        <option value='navy'>Navy</option>
                    </select>
                </div>
                <div class='customerChoice'>
                    <label>Quantity</label>
                    <select class='selectOption'>
                        <option value='one'>One</option>
                        <option value='two'>Two</option>
                        <option value='three'>Three</option>
                        <option value='four'>Four</option>
                        <option value='five'>Five</option>
                    </select>
                </div>

                <button class='btn'>Add To Basket</button>
            </div>
        </div>

        <ProductDescription :itemInfo='item'></ProductDescription>

        <FrequentQuestions></FrequentQuestions>

    </section>
</template>

<script>
import ProductDescription from './ItemDisplayPage/ProductDesription.vue';
import FrequentQuestions from './ItemDisplayPage/FrequentQuestions.vue';

export default {
    data() {
        return {
            item:  {
              'name': 'Bowl 1',
              'id': '1',
              'price': '14.99',
              'img': 'latestDesigns/bowl1.jpeg',
              'dimensions': '30 x 25 cm',
              'colours': 'Teal, Aqua, Brown, Navy, Beige',
              'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
              'washing': 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
              'smImages': [
                  'latestDesigns/bowl1.jpeg',
                  'latestDesigns/bowl1.jpeg',
                  'latestDesigns/bowl1.jpeg',
                  'latestDesigns/bowl1.jpeg',
              ]
          },
        }
    },
    components: {
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

.shopPage {
  padding-top: 120px;
  margin-bottom: 80px;
}

.shopNavInfo {
    width: 90%;
    display: flex;
    justify-content: space-between;
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