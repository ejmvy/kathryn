<template>
    <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType' :message='notificationMessage'></Notification>
      </transition>
    <div class='loginArea'>

        <div class='signinArea'>
            <h5>Login</h5>
            <input class='loginInput' placeholder="Email" v-model='userEmail' />
            <input class='loginInput' placeholder="Password" v-model='userPassword'/>
            <button v-on:click="checkUserAuth" class='btn enterbtn' :class="{'disabled': !detailsEntered}">GO</button>
        </div>
    </div>
</template>

<script>
import Notification from '../../components/Designs/Notification.vue';
export default {
    
    data() {
        return {
            userEmail: '',
            userPassword: '',
            showNotification: false,
            notificationType: '',
            notificationMessage: '',
        }
    },
    methods: {
        checkUserAuth() {
            console.log(`${this.userEmail} : ${this.userPassword}`);
            // first do call to AUTH api to check user is correct. Receive token
            // then check with token if user is Admin. 

            fetch('http://localhost:3000/api/auth', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.userEmail,
                    password: this.userPassword,
                }),
            })
            .then((res) => {
                console.log("RESPONSE");
                const resp = res.text();
                console.log(resp);
                return resp;
            })
            .then((key) => {
                console.log(key);
                if (key !== 'Invalid email or password') {
                    this.checkAdminDetails(key);
                } else {
                    this.showLocalNotification({
                        type: false,
                        message: 'User not recognised.'
                    })
                }
                
            })
            .catch((err => {
                console.log(`error: ${err}`);
                this.showLocalNotification({
                    type: false,
                    message: 'User not recognised.'
                })
            }))
            
        },
        checkAdminDetails(key) {
            this.$store.state.user.userKey = key;
            fetch('http://localhost:3000/api/users/me', {
                method: "GET",
                headers: {
                    "x-auth-token": key,
                },
            })
            .then((res) => {
                return res.json();
            })
            .then((user) => {
                console.log(user);
                if (user.isAdmin) {
                    this.showLocalNotification({
                        type: true,
                        message: 'Welcome Kathryn!'
                    })
                    this.$store.state.user.userData = user;
                    // this.$emit('loggedIn');
                } else {
                    this.showLocalNotification({
                        type: false,
                        message: 'User not recognised.'
                    })
                }
            })
        },
        showLocalNotification(obj) {
            this.notificationType = obj.type;
            this.notificationMessage = obj.message;   
            this.showNotification = true;
            
            setTimeout(() => {
                this.showNotification = false;
                }, 2000)
        }
    },
    computed: {
        detailsEntered() {
            return this.userEmail && this.userPassword;
        }
    },
    components: {
        Notification
    }
}

</script>



<style scoped>
    .loginArea {
        width: 30%;
        /* height: 50%; */
        background: white;
        box-shadow: 0 0 20px rgb(100, 98, 98);
        display: flex;
        border-radius: 10px;
    }

    @media screen and (max-width: 1000px) {
        .loginArea {
            width: 50%;
        }
    }

    @media screen and (max-width: 700px) {
        .loginArea {
            width: 80%;
        }
    }

    h5 {
        text-transform: uppercase;
        text-align: left;
    }

    p {
        color: #f2f2f2;
    }

    .signinArea {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        padding: 10%;
        /* border: 2px solid red; */
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

     .enterbtn {
        background: #365a69;
        border: 2px solid #365a69;
        color: white;

    }

    .disabled {
        border: 2px solid #ccc;
        cursor: not-allowed;
        pointer-events: none;
        background: none;
        color: #ccc;
    }

   
</style>