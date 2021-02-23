<template>
    <section class='contactPage'>
        <TitleDesign :title="titleText"></TitleDesign>
        <div class='mainContactArea'>
            <div class='contactForm'>
                <div class='topLine'>
                    <div class='labelBox'>
                        <label>Name</label>
                        <input type='text'/>
                    </div>
                    <div class='labelBox'>
                        <label>Email</label>
                        <input type='text'/>
                    </div>
                </div>
                <div class='labelBox'>
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                <div class='btnArea'>
                    <button class='btn contactBtn'>Submit</button>
                </div>
            </div>
            <div class='contactDetails'>
                <div class='contactInfo'>
                    <label>Address</label>
                    <p>37 Victoria Road, Rathgar</p>
                    <p>Dublin 6, D06 EA30</p>
                </div>
                <div class='contactInfo' >
                    <label>Email</label>
                    <p>kathrynokelly@gmail.com</p>
                </div>
                <div class='contactInfo'>
                    <label>Phone</label>
                    <p>+353 852577 656</p>
                </div>
                <div class='contactInfo'>
                    <label>Social</label>
                    <div class="icons">
                        <div class="circle" v-for="logo in logos" :key="logo">
                            <img class="circleImg" :src="require(`../../assets/${logo}`)" />
                        </div>
                    </div>
                </div>
                

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
            titleText: "We'd Love to Hear From You!",
            logos: ["logos/instaLogo.png", "logos/fb-f.png", "logos/etsy2.png"],
        }
    },
    components: {
        TitleDesign
    }
}
</script>

<style scoped>
p {
    color: #696969;
}

label {
    text-transform: uppercase;
    font-size: 14px;
    /* color: black; */
}

.contactPage {
    padding-top: 100px;
}
.mainContactArea {
    width: 90%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.contactForm {
    flex: 2;
    display: flex;
    flex-direction: column;
    background: rgba(32, 72, 88, 0.7);
    color: white;
    padding: 20px 40px;
}

.topLine {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.contactForm label {
    padding: 20px 0;
}

.labelBox {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.contactDetails {
    flex: 1;
    text-align: left;
    margin-left: 50px;
    border-left: 1px solid #ccc;
    padding-left: 80px;
}

.contactDetails label {
    color: black;
}

.contactInfo {
    padding-bottom: 20px;;
}

input {
    height: 30px;
    min-width: 200px;
    border: 1px solid #f2f2f2;
    background: #f2f2f2;
    border-radius: 5px;
}

textarea {
    height: 90px;
    min-width: 200px;
    border: 1px solid #f2f2f2;
    background: #f2f2f2;
    border-radius: 5px;
}

input:focus, textarea:focus {
    background: white;
    outline: none;
}


.icons {
  display: flex;
  width: 50%;
  justify-content: center;
  padding-top: 20px ;
}


.circle {
  background: rgba(32, 72, 88, 0.7);;
  color: white;
  border-radius: 50%;
  /* padding: 8px; */
  margin: 0 10px;
  cursor: pointer;
  width: 100px;
  height: 45px;
  transition: all 0.2s ease-in-out;
}
.circle:hover {
  transform: scale(1.05);
}

.circleImg {
  position: relative;
  width: 30px;
  height: 30px;
  font-size: 50px;
  top: 15%;
  left: 12.5%;
}
</style>