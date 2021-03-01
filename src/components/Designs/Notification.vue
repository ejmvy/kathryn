<template>
    <div class='banner' :class="{'success': !type}">
        <div class='messageArea'>
            <h5>{{ type ? 'Success' : 'Fail'}}</h5>
            <p>{{ type ? 'Your changes have been saved' : "Could't save changes" }}</p>
        </div>
    </div>


</template>

<script>
export default {
    props: [ 'type' ]
}
</script>


<style scoped>
    .banner {
        position: absolute;
        top: 20px;
        right: 20px;
        /* width: 300px; */
        background: #f2f2f2;
        box-shadow: 0 3px 5px #666666;
        padding: 10px 20px;
        text-align: left;
        border-left:6px solid rgb(2, 161, 108);
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