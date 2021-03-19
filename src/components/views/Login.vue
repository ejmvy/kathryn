<template>
    <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType' :message='notificationMessage'></Notification>
    </transition>
    <div class='loginSection'>
        <div v-if='!welcomePopup' class='loginArea'>
            <div class='halfPage login'>
                <div class='signinArea'>
                    <h5>Login</h5>
                    <input class='loginInput' placeholder="Email" v-model="loginUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="loginUser.password"  />
                    <div class="btnArea">
                        
                    </div>
                </div>
                <button @click='loginUserFn' class='btn loginBtn' :class="{'disableLogin': loginComplete}">GO</button>
            </div>
            <div class='halfPage register'>
                <div class='registerArea'>
                    <h5>Need to Register?</h5>
                    <input class='loginInput' placeholder="Name" v-model="newUser.name" />
                    <input class='loginInput' placeholder="Email" v-model="newUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="newUser.password" />
                </div>
                <button class='btn loginBtn registerBtn' @click='registerUser()' :class="{'disable': informationComplete}">Sign Up</button>
            </div>
        </div>
        <transition name='appearUP' > 
            <div class='welcomePopupArea' v-if='welcomePopup'  >
                <EnterPopup :popupObject='popupInfo'></EnterPopup>
            </div>
        </transition>
    </div>
</template>

<script>
import Notification from '../Designs/Notification.vue';
import EnterPopup from '../Designs/EnterPopup.vue';
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
            loginUser: {
                email: "",
                password: "",
            },
            loggedInUser: {},
            welcomePopup: false,
            showNotification: false,
            notificationType: '',
            notificationMessage: '',
            popupInfo: {
                userName: '',
                message: ''
            }
        }
    },
    methods: {
        loginUserFn() {
            fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(this.loginUser),
                mode: 'cors',
            })
            .then((res) => {
                console.log('login res:');
                const resp = res.text();
                console.log(resp);
                return resp;
            })
            .then((key) => {
                
                this.getUserDetails(key);
            })
            .catch((err => {
                console.log("Error:", err);
            }))
        },
        getUserDetails(key) {
            console.log('LOGIN data: ');
            console.log(key);
            fetch('http://localhost:3000/api/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': key
                },
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('user data: ');
                console.log(data);
                this.loggedInUser = data;
                const sendName = data.name.split(' ')[0];
                this.popupInfo.userName = ` Back ${sendName}`;
                this.popupInfo.message = 'We hope you enjoy shopping with us again.';
                this.welcomePopup = true;
            })
            .catch((err) => {
                console.log(`Err: ${err}`);
            })
        },
        registerUser() {
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
                    return res.json();
                    // return resp;
                })
                .then((key) => {
                    console.log('NEW USER DATA: ');
                    console.log(key);
                    const sendName = key.name.split(' ')[0];
                    this.popupInfo.userName = sendName;
                    this.popupInfo.message = 'Congratulations your account has been successfully set up';
                    this.welcomePopup = true;
                    this.$emit('showNotification', 'success');
                })
                .catch((err => {
                     console.log("Error:", err);
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
       
    },
    computed: {
        informationComplete() {
            if (this.newUser.name && this.newUser.email && this.newUser.password) {
                return false;
                
            }
            return true;
        },
        loginComplete() {
            if (this.loginUser.email && this.loginUser.password) {
                return false;
                
            }
            return true;
        }
    },
    components: {
        Notification,
        EnterPopup
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
        color: #365a69;
        background: white;
    }

    .disable {
        border: 2px solid #ccc;
        color: #ccc;
        cursor: not-allowed;
        pointer-events: none;
        background: none;
    }

    .disableLogin {
        border: 2px solid rgba(32, 72, 88, 0.7);
        color: rgba(32, 72, 88, 0.7);
        cursor: not-allowed;
        pointer-events: none;
        background: none;
    }

    @media screen and (max-width: 700px) {
        
    }
 </style>