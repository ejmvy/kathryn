<template>
    <router-link :to="{ name: 'ItemDisplay', params: {id: displayItem.id } }">
    <img class='itemImage' :src='require(`../../assets/${displayItem.img}`)' />
    </router-link>
    <h3>{{ displayItem.name }}</h3>
    <p>{{ displayItem.price }}</p>
    <button class='btn smBtn'>Add to Cart</button>
</template>

<script>
export default {
    props: [ 'displayItem' ],

}
</script>

<style scoped>
    .itemImage {
        width: 250px;
        height: 200px;
        box-shadow: 0 0 4px #666666;
        margin-top: 50px;
        cursor: pointer;
    }

    p {
        margin-top: -10px;
        color: #696969;
    }
</style>