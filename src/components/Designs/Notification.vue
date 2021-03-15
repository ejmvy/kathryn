<template>
    <div class='banner' :class="{'fail': !type}">
        <div class='messageArea'>
            <h5>{{ type ? 'Success' : 'Somethings Wrong!'}}</h5>
            <p>{{ message }}</p>
        </div>
    </div>


</template>

<script>
export default {
    props: [ 'type', 'message' ]
}
</script>


<style scoped>
    .banner {
        position: absolute;
        top: 20px;
        right: 20px;
        min-width: 200px;
        background: #f2f2f2;
        box-shadow: 0 3px 5px #666666;
        padding: 10px 20px;
        text-align: left;
        border-left:6px solid rgb(2, 161, 108);
        z-index: 5;
    }

    .fail {
        border-left:6px solid rgb(161, 26, 2);
    }

    h5 {
        margin: 5px 0;
    }

    p {
        margin: 0;
        font-size: 12px;
    }
</style>