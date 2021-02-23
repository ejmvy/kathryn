<template>
    
    <div class='cartArea'>
        <div class='arrow'></div>
        <h5>Your Shopping Cart</h5>

        <div class='shopItems'>
            <div class='singleItem' v-for='item in items' :key='item'>
                <img class='itemImg' :src="require(`../../assets/${item.img}`)" />
                <div class='itemDesc'>
                    <label>{{ item.name }}</label>
                    <p>{{ item.price }}</p>
                </div>
                <div class='qty'>{{ item.qty }}</div>
                <img class='binLogo' src='../../assets/bin.png' />
            </div>
        </div>
        <button class='btn contactBtn'>View Cart</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
          {
              'name': 'Bowl 1',
              'id': '1',
              'price': '14.99',
              'img': 'latestDesigns/bowl1.jpeg',
              'qty': 1
          },
          {
              'name': 'Dish 1',
              'id': '2',
              'price': '24.99',
              'img': 'latestDesigns/dish1.jpeg',
              'qty': 2
          },
          {
              'name': 'Mug 3',
              'id': '3',
              'price': '12.99',
              'img': 'latestDesigns/mug3.jpeg',
              'qty': 1
          },
            ]
        }
    }
}
</script>

<style scoped>
    p {
        font-size: 12px;
    }
    .arrow {
        /* z-index: 10; */
        position: absolute;
        float: right;
        right: 20%;
        top: -25px;
        width: 0; 
        height: 0; 
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        
        border-bottom: 25px solid rgba(32, 72, 88, 0.9);
    }
    .cartArea {
        position: absolute;
        top: 110px;
        width: 30%;
        right: 0;
        float: right;
        background: rgba(32, 72, 88, 0.9);
        color: white;
        box-shadow: 0 0 3px #666666;
        border-radius: 10px;
        padding-bottom: 20px;;
    }

    .shopItems {
        margin-top: 40px;
    }

    .singleItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 90%; */
        background: rgba(255,255,255 0.6);
        padding: 10px 25px;
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
    .binLogo {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
</style>