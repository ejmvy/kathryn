<template>
    <section class='productInfoArea'>
        <TitleDesign :title="titleText"></TitleDesign>

        <div class='productArea'>
            <div class='productSection'>
                <label>{{ itemInfo.name }}</label>
                <p>{{ itemInfo.description }}</p>
                <div class='horiz'>
                    <label>Dimensions</label>
                    <p>{{ itemInfo.dimensions }}</p>
                </div>
                <div class='horiz'>
                    <label>Colors</label>
                    <p>{{ itemInfo.colour }}</p>
                </div>
            </div>
            <div class='productSection'>
                <label>Washing Instructions</label>
                <p>{{ itemInfo.washing }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import TitleDesign from '../Designs/TitleDesign.vue';
export default {
    props: [ 'itemInfo' ],
    data() {
        return {
            titleText: 'Product Info'
        }
    },
    components: {
        TitleDesign
    }
}
</script>

<style scoped>
p {
    color: #696969
}
.productInfoArea {
    width: 100%;
    margin-top: 80px;
}

.productArea {
    display: flex;
    width: 90%;
    margin-top: 50px;
}



.productSection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 20px;
    flex: 1;
}
.horiz {
    display: flex;
    align-items: center;

    
}
label {
    padding-right: 50px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
}

@media screen and (max-width: 600px) {
    .productArea {
        flex-direction: column;
        margin-top: 0;
    }
    .productSection {
        padding-top: 20px;
    }
    .horiz {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
    }
}
</style>