<template>
    <section class='questionsArea'>
        <TitleDesign :title="titleText"></TitleDesign>

        <div class='questionArea' v-for='question in questions' :key='question'>
            <div class='questionBanner' >
                <div class='questionTitle'>{{ question.title }}</div>
                <img class='arrow' src='../../assets/down.png' />
            </div>
            <div class='answerArea' v-if='answerShow'>
                <p>{{ question.answer }}</p>
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
            titleText: 'Frequently Asked Questions',
            answerShow: false,
            questions: [
                {
                    title: 'Shipping Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                },
                {
                    title: 'Returns Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                },
                {
                    title: 'Exchange Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                }
            ]
        }
    },
    components: {
        TitleDesign
    }
}
</script>

<style scoped>
.questionsArea {
    width: 100%;
background: #eaeaea;
}

.questionArea {
    width: 90%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
}

.questionBanner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
}

.answerArea {
    text-align: left;
    padding-top: 10px;
}

.arrow {
    width: 20px;
    height: 20px;
}

p {
    font-size: 13px;
    color: #666666;
}
</style>