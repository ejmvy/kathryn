<template>
    <div class="statCard">
        <div class='statTopLine'>
            <div class='statBox'>
                <h5>{{ cardObject.cardTitle }}</h5>
                <p class='figure'>{{ cardObject.cardFigure }}</p>
            </div>
            <div class='cardIcon'>
                <!-- src='../../assets/logos/cart.png' -->
                <img class='statIcon' :src="require(`../../assets/${cardObject.icon}`)" />
            </div>
        </div>
        <div class='statBottomLine'>
            <img class='increaseIcon' :src=" cardObject.direction == 'up' ? require('../../assets/icons/greenIncrease.png') : require('../../assets/icons/redDown.png')" />
            <div class='percentageArea'>{{ cardObject.change }}</div>
            <p>Since last month</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cardObject']
}
</script>

<style scoped>

    /* increaseColor = #4BDD68   #71CC98*/
    /* decreaseColor = #E23F36 */

    .statCard {
        border: 1px solid #ccc;
        box-shadow: 2px 4px 5px 0px rgba(184,184,184,0.75);
        padding: 10px 30px;
        background: white;
        border-top: 4px solid rgba(32, 72, 88, 0.7);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        min-width: 300px;
    }

    h5 {
        color: rgba(32, 72, 88, 0.7);
        text-transform: uppercase;
        font-size: 13px;
    }

    .statTopLine, .statBottomLine {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .statBottomLine {
        justify-content:left;
    }

    .statBox {
        display: flex;
        flex-direction: column;
    }

    .percentageArea {
        padding: 0 15px;
    }

    .statIcon {
        background: rgba(32, 72, 88, 0.7);
        padding: 15px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }

    .increaseIcon {
        width: 20px;
        height: 20px;
    }


.figure {
    text-align: left;
    font-size: 35px;
    line-height: 0;
    color: rgba(32, 72, 88, 0.7);
    margin-top: 5px;
}

@media screen and (max-width: 1000px) {
    /* .statCard {
        margin-top: 30px;
    } */
}

</style>
