<template>
    <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType' :message='notificationMessage'></Notification>
    </transition>
    <div class='loginSection'>
        <div v-if='!welcomePopup' class='loginArea'>
            <div class='halfPage login'>
                <div class='signinArea'>
                    <h5>Login</h5>
                    <input class='loginInput' placeholder="Email" />
                    <input class='loginInput' placeholder="Password" />
                    <div class="btnArea">
                        
                    </div>
                </div>
                <button @click='welcomePopup = true' class='btn loginBtn'>GO</button>
            </div>
            <div class='halfPage register'>
                <div class='registerArea'>
                    <h5>Need to Register?</h5>
                    <input class='loginInput' placeholder="Name" v-model="newUser.name" />
                    <input class='loginInput' placeholder="Email" v-model="newUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="newUser.password" />
                </div>
                <button class='btn loginBtn registerBtn' @click='registerUser()'>Sign Up</button>
            </div>
        </div>
        <!-- // :class="{'welcomeAppear': welcomePopup}"-->
        <transition name='appearUP' > 
            <div class='welcomePopupArea' v-if='welcomePopup'  >
                <div class='welcomePopup'>
                    <div class='topPopup'>
                        <img class='successLogo' src='../../assets/icons/cheer.png' />
                        <h3>Success!</h3>
                        <h4>Welcome {{ newUser.name }}</h4>
                    </div>

                    <p>Congratulations your account has been successfully set up.</p>
                    <div class='viewShopBtn'>
                    <button class='btn loginBtn shopBtn' @click='enterShop'>View Shop</button>

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Notification from '../Designs/Notification.vue';
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
            showNotification: false,
            notificationType: '',
            notificationMessage: '',
        }
    },
    methods: {
        registerUser() {
            console.log(`user: `);
            console.log(this.newUser);

            this.welcomePopup = true;

            if (this.newUser.name && this.newUser.email && this.newUser.password) {
                console.log('have all values');
                fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.newUser)
                })
                .then((res) => {
                    console.log('res:');
                    return res.json();
                })
                .then((data) => {
                    console.log('data: ');
                    console.log(data);
                    this.welcomePopup = true;
                    // this.$emit('showNotification', 'success');
                })
                .catch((err => {
                    console.log(`error: ${err}`);
                }))
            }
            else {
                console.log('DATA MISSING');
                this.notificationType = false;
                this.notificationMessage = 'Some Information is missing'
                this.showNotification = true;
                this.welcomePopup = false;

                setTimeout(() => {
                    this.showNotification = false;
                }, 2000)
            }
            
        },
        enterShop() {
            this.$router.push('/shop');
        }
    },
    components: {
        Notification
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
        /* background-image: linear-gradient(
            to top right,
            /* rgba(42, 122, 153, 0.7)  
            rgb(163, 163, 162),
            rgba(42, 122, 153, 0.7) 50%
            ); */
        /* background-image: linear-gradient(
            to top right,
            rgb(163, 163, 162),
            rgba(32, 72, 88, 0.7)
            ); */
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
        justify-content: space-between;
        height: 80%;
        /* border: 2px solid red; */
    }

    .register {
        /* background: rgba(42, 122, 153, 0.7); */
        background: #365a69;
        color: white;
    }

    .login h5 {
        color: rgba(42, 122, 153, 0.7);
        color: #365a69;
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
        outline: none;
    }

    input::placeholder {
        color: rgb(185, 182, 182);
    }

/* #204858; */
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

    .registerBtn {
        width: 100%;
        background: none;
        border: 2px solid white;
        color: white;
    }

    .registerBtn:hover {
        background: white;
        color: #365a69;
        border: 2px solid white;
    }

     .welcomePopup {
         position: relative;
        width: 100%;
        background: white;
        color: white;
        min-height: 300px;
        border-radius: 10px;
        transition: all 2s ease-in-out; 
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
 </style>