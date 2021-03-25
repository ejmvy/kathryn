<template>
    <div class='paymentBG'>
        <div class='paymentCard'>
            <div class='closeBtn'>
                <router-link to='/cart'>
                    <img class='closeIcon' src='../../assets/icons/close-x.png' />
                </router-link>
            </div>
            <div class='cardDetails'>
                <div class='displayLine'>
                    <div id='cNumber' class='inputArea'>
                        <label>Card Number</label>
                        <!-- <div class=''> -->
                        <input class='border-gradient border-gradient-purple'  placeholder="1234 2345 5321 1234" />
                    </div>
                    <div id='cCode' class='inputArea'>
                        <label>CVV Code</label>
                        <input  class='border-gradient border-gradient-purple' placeholder="123" />
                    </div>
                </div>
                <div class='displayLine separate pdTop'>
                    <div class='inputArea'>
                        <label>Expires</label>
                        <div class='expiryArea'>
                            <input class='inputDate border-gradient border-gradient-purple pdRight' placeholder="01" />
                            <input class='inputDate border-gradient border-gradient-purple' placeholder="23" />
                        </div>
                    </div>
                    
                    <div class='stripeLogo'>
                        Stripe
                    </div>
                </div>
                <div class='nameArea'>
                    {{ customerName }}
                </div>
            </div>
            <div class='payButtonArea'>
                <img class='payIcon' src='../../assets/icons/check.png' />
                <p>PAY € {{ payAmount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customerName: 'EJ McVey',
            payAmount: '65.99'
        }
    }
}
</script>


<style scoped>

/* primary: #a469c3 */
/* #b395e7 */

.paymentBG {
  position: absolute;
  /* z-index: 5; */
  width: 100%;
  height: 100%;
  /* background: rgba(32, 72, 88, 0.7); */
  background: rgb(164,105,195);
  background: linear-gradient(90deg, rgba(164,105,195,1) 0%, rgba(179,149,231,1) 100%, rgba(78,128,149,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.paymentCard {
  width: 450px;
  height: 300px;
  background: rgb(248, 243, 243);
  /* //(90,89,89,0.75); */
  box-shadow: 10px 10px 51px -3px rgba(49,48,48,0.75); 
  display: flex;
  flex-direction: column;
  border-radius: 20px;  
}

.closeBtn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
}

.closeIcon {
    width: 20px;
    height: 20px;
}

.payIcon {
    width: 30px;
    height: 30px;
}

.cardDetails {
    height: 100%;
    margin: 0 14%;
}

.displayLine {
    display: flex;
    align-items: center;
}
.separate {
    justify-content: space-between;
}

.inputArea {
    text-align: left;
    display: flex;
    flex-direction: column;
}

#cNumber {
    width: 80%;
    margin-right: 5px;
}

#cCode {
    width: 60px;
    margin-left: 5px;
    /* width: 30px; */
}

input {
    background: none;
    text-decoration: inherit;
    padding: 6px 10px;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-align: center;
}

label {
    font-size: 10px;
    text-transform: uppercase;
    color: rgb(129, 127, 127);
    text-align: left;
}

.expiryArea {
    display: flex;
}

.inputDate {
    width: 50px;
}

.border-gradient {
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-purple {
  border-image-source: linear-gradient(90deg, rgba(164,105,195,1) 0%, rgba(179,149,231,1) 100%, rgba(78,128,149,1) 100%);
  /* linear-gradient(to left, #743ad5, #d53a9d); */
}

.pdTop {
    margin-top: 30px;
}

.pdRight {
    margin-right: 10px;
}

.stripeLogo {
    background: linear-gradient(90deg, rgba(164,105,195,1) 0%, rgba(179,149,231,1) 100%, rgba(78,128,149,1) 100%);
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 5px;
    letter-spacing: 1.5px;
    margin-top: 15px;
}

.nameArea {
    text-align: left;
    margin-top: 30px;
    text-transform: uppercase;
    color: rgb(173, 173, 173);
    letter-spacing: 2px;
    font-weight: bold;
}

.payButtonArea {
    background: rgb(170,129,240);
    background: linear-gradient(90deg, rgba(170,129,240,1) 0%, rgba(92,204,251,1) 100%, rgba(164,105,195,1) 100%);
    padding: 0px 20px;
    width: 250px;
    position: relative;
    bottom: -20px;
    right: -250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 14px 31px 46px -17px rgba(69,69,69,0.75);
    cursor: pointer;
}

.payButtonArea  p {
    color: white;
    font-size: 20px;
}
</style>