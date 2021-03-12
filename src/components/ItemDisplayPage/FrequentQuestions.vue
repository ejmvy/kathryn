<template>
    <div id='questionsArea'>
        <div class='questionPadding'>
            <TitleDesign :title="titleText"></TitleDesign>
            <div class='questionArea' v-for='question in questions' :key='question'>
                <div class='questionBanner' >
                    <div class='questionTitle'>{{ question.title }}</div>
                    
                    <img 

                    class='arrow' 
                    src='../../assets/icons/down.png' 
                    @click='question.answerShow = !question.answerShow' 
                    :class="{'rotateArrow': question.answerShow}"
                    />
                </div>
                <div :class="{'answerArea': question.answerShow}" >
                    <p class='answerText'>{{ question.answer }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import TitleDesign from '../Designs/TitleDesign.vue';
export default {
    props: [ 'itemInfo' ],
    data() {
        return {
            titleText: 'Frequently Asked Questions',
            
            questions: [
                {
                    title: 'Shipping Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                    answerShow: false,
                },
                {
                    title: 'Returns Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                    answerShow: false,
                },
                {
                    title: 'Exchange Info',
                    answer: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                    answerShow: false,
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
#questionsArea {
    /* width: 100%; */
background: #eaeaea;
/* background: #f5f5f5; */
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.questionPadding {
    display: flex;
    flex-direction: column;
    /* width: 80%; */
    align-items: center;
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

.answerArea .answerText {
    /* padding-top: 10px; */
    opacity: 1;
    height: 30px;
    transition: opacity 0.3s 0.1s, height 0.3s;
}

.answerText {
    text-align: left;
    opacity: 0;
    height: 0;
    transition: opacity 0.3s, height 0.3s 0.1s;
}
.arrow {
    width: 20px;
    height: 20px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}

p {
    font-size: 13px;
    color: #666666;
}
.rotateArrow {
  transform: rotate(-180deg);
}

@keyframes slide-in {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
}

@media only screen and (min-width:1200px) {
  .questionPadding {
      width: 80%;
  }
}

</style>