<template>
    <div class='loginSection'>
        <div v-if='!welcomePopup' class='loginArea'>
            <div class='halfPage login'>
                <div class='signinArea'>
                    <h5>Login</h5>
                    <input class='loginInput' placeholder="Email" />
                    <input class='loginInput' placeholder="Password" />
                    <div class="btnArea">
                        <button class='btn loginBtn'>GO</button>
                    </div>
                </div>
            </div>
            <div class='halfPage register'>
                <div class='registerArea'>
                    <h5>Need to Register?</h5>
                    <input class='loginInput' placeholder="Name" v-model="newUser.name" />
                    <input class='loginInput' placeholder="Email" v-model="newUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="newUser.password" />
                    <button class='btn loginBtn registerBtn' @click='registerUser()'>Sign Up Now</button>
                </div>
            </div>
        </div>
        <!-- // :class="{'welcomeAppear': welcomePopup}"-->
        <transition name='appearUP' :duration="{ enter: 300, }"> 
            <div class='welcomePopupArea' v-if='welcomePopup'  >
                <div class='welcomePopup'>
                    <div class='topPopup'>
                        <img class='successLogo' src='../../assets/icons/cheer.png' />
                        <h3>You're all signed up {{ newUser.name }} !</h3>
                        <p>We hope you enjoy your shopping experience</p>
                    </div>
                    <div class='viewShopBtn'>
                    <button class='btn loginBtn' @click='enterShop'>View Shop</button>

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toLogin: true,
            toRegister: false,
            newUser: {
                name: "",
                email: "",
                password: "",
            },
            welcomePopup: false,
        }
    },
    methods: {
        registerUser() {
            console.log(`user: `);
            console.log(this.newUser);

            this.welcomePopup = true;

            // fetch('http://localhost:3000/api/users', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.newUser)
            // })
            // .then((res) => {
            //     return res.json();
            // })
            // .then((data) => {
            //     console.log(data);
            //     this.welcomePopup = true;
            //     // this.$emit('showNotification', 'success');
            // })
            // .catch((err => {
            //     console.log(`error: ${err}`);
            // }))
        },
        enterShop() {
            this.$router.push('/shop');
        }
    }
}
</script>


<style scoped>

    .loginSection {
        position: absolute;
        /* z-index: 5; */
        width: 100%;
        height: 100%;
        background-color: rgba(32, 72, 88, 0.7);
        background-image: linear-gradient(
            to top right,
            /* rgba(42, 122, 153, 0.7)  */
            rgb(163, 163, 162),
            rgba(42, 122, 153, 0.7) 50%
            );
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginArea {
        width: 70%;
        height: 60%;
        background: white;
        box-shadow: 0 0 20px rgb(100, 98, 98);
        display: flex;
        /* flex-direction: column; */
        /* padding: 20px; */
        border-radius: 10px;
    }

    .halfPage {
        flex: 1;
        width: 50%;
        padding: 10%;
    }

    h5 {
        text-transform: uppercase;
        text-align: left;
    }

    p {
        color: #f2f2f2;
    }

    .signinArea, .registerArea {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        /* border: 2px solid red; */
    }

    .register {
        background: rgba(42, 122, 153, 0.7);
        color: white;
    }

    .login h5 {
        color: rgba(42, 122, 153, 0.7);
    }

    input {
        border: none;
        background: none;
        border-bottom: 2px solid rgb(184, 182, 182);
        padding: 15px 5px;
        margin-top: 20px;
        font-family: "Open Sans Condensed", sans-serif;
        font-size: 14px;
        letter-spacing: 2px;
    }

    input:focus {
        outline: none;
    }

    .signinArea input {
        color: rgb(42, 122, 153);
    }

    .signinArea input:focus {
        border-bottom: 2px solid rgb(42, 122, 153);
    }

    .registerArea input {
        color: white
    }

    .registerArea input:focus {
        border-bottom: 2px solid white
    }

    button {
        position: relative;
        bottom: 0;
    }

    input::placeholder {
        color: rgb(185, 182, 182);
    }

    /* .btnArea {
        position: relative;
        bottom: -60px;
    } */

    .loginBtn {
        position: relative;
        bottom: 0;
        background: rgb(42, 122, 153);
        border: 2px solid rgba(42, 122, 153, 0.7);
        color: white;
        width: 70%;
        font-family: "Open Sans Condensed", sans-serif;
        font-size: 14px;
        letter-spacing: 3px;
        padding: 9px 40px;
    }

    .loginBtn:hover {
        background: white;
        color: rgba(42, 122, 153, 0.7);
    }

    .loginBtn:focus {
        background: rgba(42, 122, 153, 0.7);
        color: white;
    }

    .registerBtn {
        width: 100%;
        background: white;
        color: rgba(42, 122, 153, 0.7);
    }

    .registerBtn:hover {
        background: rgba(42, 122, 153, 0.7);
        color: white;
    }

    .welcomePopupArea {
        width: 60%;
        /* opacity: 0;
        height: 0;
        transition: opacity 0.3s, height 0.3s 0.1s;  */

    }

     .welcomePopup {
         position: relative;
        width: 100%;
        background: white;
        color: white;
        /* box-shadow: 0 5px 5px 2px rgb(150, 148, 148); */
        min-height: 300px;
        border-radius: 35px;
        /* top: 100px; */
        /* opacity: 0; */
        /* height: 0; */
        /* transition: opacity 0.3s, top 0.3s 0.1s;  */
        transition: all 2s ease-in-out; 
     }

     .topPopup {
        display: flex;
        flex-direction: column;
        align-items: center;  
        justify-content: space-around;
        height: 100%;
        background: rgba(42, 122, 153, 0.7);
        padding: 10%; 
        border-radius: 35px 35px 0 0;
    }

    /* .welcomeAppear .welcomePopup {  */
        /* padding-top: 10px;  */
        /* width: 100%; */
        /* opacity: 1; */
        /* top: 0; */
        /* height: 100%; */
        /* transition: opacity 0.3s 0.1s, top 0.3s; */
    /* } */

    .successLogo {
        width: 50px;
        height: 50px;
    }

    .viewShopBtn {
        width: 50%;
        margin: 0 auto;
        padding: 10px 0 30px;
    }
 </style>