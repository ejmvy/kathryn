<template>
    <!-- <div class='welcomePopupArea' v-if='welcomePopup'  > -->
        <div class='welcomePopup'>
            <div class='topPopup'>
                <img class='successLogo' src='../../assets/icons/cheer.png' />
                <h3>Success !</h3>
                <h4>Welcome {{ popupObject.userName }}</h4>
            </div>

            <p>{{ popupObject.message }}</p>
            <div class='viewShopBtn'>
            <button class='btn loginBtn shopBtn' @click='enterShop'>View Shop</button>

            </div>
        </div>
    <!-- </div> -->
</template>


<script>
export default {
    props: [ 'popupObject' ],
    methods: {
         enterShop() {
            this.$router.push('/shop');
        }
    }
}
</script>



<style scoped>
 .welcomePopup {
         position: relative;
        width: 100%;
        background: white;
        color: white;
        min-height: 300px;
        border-radius: 10px;
        transition: all 2s ease-in-out; 
        /* min-width: 300px; */
     }

.topPopup {
        display: flex;
        flex-direction: column;
        align-items: center;  
        justify-content: space-around;
        height: 100%;
        background: #365a69;
        padding: 20px 0 10px 0; 
        border-radius: 10px 10px 0 0;
    }

    .topPopup h3 {
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .welcomePopup p {
        color: #666666;
        padding: 10px 50px;
    }

    .successLogo {
        width: 50px;
        height: 50px;
    }

    .viewShopBtn {
        width: 50%;
        margin: 0 auto;
        padding: 10px 0 30px;
    }
     .loginBtn {
        position: relative;
        bottom: -40px;
        background: #365a69;
        border: 2px solid #365a69;
        color: white;
        width: 100%;
        font-family: "Open Sans Condensed", sans-serif;
        font-size: 14px;
        letter-spacing: 3px;
        padding: 9px 40px;
    }

    .shopBtn {
        padding: 10px 40px;
        bottom: 0;
        border-radius: 40px;
    }

    .loginBtn:hover {
        background: white;
        color: #365a69;
    }

    .loginBtn:focus {
        background: rgba(42, 122, 153, 0.7);
        color: white;
    }

</style>