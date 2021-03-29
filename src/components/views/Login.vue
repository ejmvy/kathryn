<template>
    <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType' :message='notificationMessage'></Notification>
    </transition>
    <div class='loginSection'>

        <div v-if='!welcomePopup' class="container" id="container" ref='containerRef'>
            <div class="form-container sign-up-container register">
                <router-link to='/'>
                   <img class='homeIcon topRight' src='../../assets/icons/home.png' />
                </router-link>
                <form>
                    <h5 class='loginTitle'>Create Account</h5>
                    <input class='loginInput' placeholder="Name" v-model="newUser.name" />
                    <input class='loginInput' placeholder="Email" v-model="newUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="newUser.password" />
                    <button class='btn loginBtn registerBtn' @click='registerUser' :class="{'disable': informationComplete}">Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container login">
                <router-link to='/'>
                    <img class='homeIcon topLeft' src='../../assets/icons/home.png' />
                </router-link>
                <form >
                    <h5 class='loginTitle'>Sign in</h5>
                    <input class='loginInput' placeholder="Email" v-model="loginUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="loginUser.password"  />
                    <button @click='loginUserFn' class='btn loginBtn' :class="{'disable': loginComplete}">Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Already have an Account?</h1>
                        <p>Click here to login</p>
                        <button class="btn whiteBtn ghost" id="signIn" @click='signInButton'>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>New Friend?</h1>
                        <p>Click here to register</p>
                        <button class="btn whiteBtn ghost" id="signUp" @click='signUpButton'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if='!welcomePopup' class='mobileView'>
            <router-link to='/'>
                <img class='mobileHomeIcon' src='../../assets/icons/home.png' />
            </router-link>
             <div class='mobileViewArea' v-if='!toLogin' >
                 
                 <img class='loginIcon' src='../../assets/icons/owl.png' />
                <form class="mobileLogin">
                    <h5 class='loginTitle'>Create Account</h5>
                    <input class='loginInput' placeholder="Name" v-model="newUser.name" />
                    <input class='loginInput' placeholder="Email" v-model="newUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="newUser.password" />
                    <button class='btn fullWhiteButton loginBtn' @click='registerUser.prevent' :class="{'disable': informationComplete}">Sign Up</button>
                </form>
                <div class="otherRoute">
                    <h5>Already have an Account?</h5>
                    <button class="btn whiteBtn" id="signIn" @click='toLogin = !toLogin'>Sign In</button>
                </div>
            </div>
            <div class='mobileViewArea' v-if='toLogin'>
                <img class='loginIcon' src='../../assets/icons/owl.png' />
                <form class="mobileLogin">
                    <h5 class='loginTitle'>Sign in</h5>
                    <input class='loginInput' placeholder="Email" v-model="loginUser.email" />
                    <input class='loginInput' placeholder="Password" v-model="loginUser.password"  />
                    <button @click='loginUserFn.prevent' class='btn fullWhiteButton loginBtn' :class="{'disable': loginComplete}">Sign In</button>
                </form>
                <div class="otherRoute">
                    <h5>New Friend?</h5>
                    <button class="btn loginBtn whiteBtn" id="signIn" @click='toLogin = !toLogin'>Sign Up</button>
                </div>
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
        signInButton() {
            console.log('Sign in!');
            const container = this.$refs.containerRef;
            container.classList.remove("right-panel-active");
        },
        signUpButton() {
            console.log('Sign Up!');
            const container = this.$refs.containerRef;
            container.classList.add("right-panel-active");
        },
        mobileSignInButton() {
            this.toLogin = false;
            this.toRegister = true;
        },
        mobileRegisterButton() {
            this.toLogin = true;
            this.toRegister = false;
        },
        async loginUserFn(e) {
            e.preventDefault();
            console.log('LOGGING in');
            await fetch('http://localhost:3000/api/auth', {
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
                console.log('login key:' + key);
                this.getUserDetails(key);
            })
            .catch((err => {
                console.log("Error:", err);
            }))
        },
        getUserDetails(key) {
            this.$store.state.user.userKey = key;
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
                
                this.loggedInUser = data;
                this.$store.state.user.userData = data;
                console.log('signin data: ');
                console.log(this.$store.state.user);
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
                .then((newUser) => {
                    console.log('NEW USER DATA: ');
                    this.$store.state.user.userData = newUser;
                    const sendName = newUser.name.split(' ')[0];
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
            
        }
       
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
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
}

* {
box-sizing: border-box;
}

h5 {
    text-transform: uppercase;
}

.loginTitle {
    color: #8d8c8c;
    text-transform: uppercase;
}

span {
	font-size: 12px;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;

}

input {
	border: none;
	width: 100%;
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

.container {
	background-color: #fff;
	border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
    background: #365a69;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
    transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-panel p {
    color: white;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}


.loginIcon {
    width: 80px;
    height: 80px;
}

.homeIcon {
    width: 20px;
    height: 20px;
    position: absolute;
    cursor: pointer;
}

.topLeft {
    left: 0;
    margin: 15px;
}


.mobileHomeIcon{
    width: 20px;
    height: 20px;
    position: absolute;
    cursor: pointer;
    left: 0;
    margin: 8px;
}

.topRight {
    right: 0;
    margin: 15px;
}


.register {
    /* background: rgba(42, 122, 153, 0.7); */
    background: #365a69;
    color: white;
}

.btn {
    background: #365a69;
    border: 2px solid #365a69;
    color: white;
}

.whiteBtn {
    color: white;
    border: 2px solid white;
}

.whiteBtn:hover {
    background: white;
    color: #365a69;
}

.disable {
    border: 2px solid #ccc;
    color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
    background: none;
}


.mobileView {
    display: none;
    height: 100vh;
    width: 100%;
    border-radius: none;
    background: #365a69;
    border: 2px solid red;
    /* padding: 30px 0; */
    overflow: hidden;
    
}

.mobileViewArea {
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 100%;
    height: 80%;
    padding-top: 30px;
    
}

.mobileViewArea h5 {
    color: white;
}

.mobileViewArea form {
    color: white;
    width: 80%;
    padding: 0;
}

.fullWhiteButton {
    background: white;
    color: #365a69;
    border: 2px solid white;
}

.mobileViewArea input {
    color: white;  
}

.mobileViewArea input:focus {
    border-bottom: 2px solid white;
}

.mobileLogin {
    background: none;
}

.otherRoute {
    height: 400px;
    width: 140%;
    border-radius: 50%;
    background: white;
    color: #365a69;
    padding-top: 10px;
    position: absolute;
    overflow:hidden;
    bottom: -40%;
}

.otherRoute h5 {
    color: #365a69;
}

.otherRoute .btn {
    margin-top: 0;
    font-size: 14px;
    padding: 8px 20px;
    background: none;
    color: #365a69;
    border: 2px solid #365a69;
}

.otherRoute .btn:hover, .otherRoute .btn:focus {
    background: #365a69;
    color: white;
    border: 2px solid #365a69;
}

.mobileView h5 {
    font-size: 13px;
}


@media screen and (max-width: 600px) {
    .container {
        display: none;
    }

    .mobileView {
        display:inline;
        
    }

}
   
 </style>