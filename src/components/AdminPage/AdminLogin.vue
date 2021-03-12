<template>
    <div class='loginArea'>

        <div class='signinArea'>
            <h5>Login</h5>
            <input class='loginInput' placeholder="Email" v-model='userEmail' />
            <input class='loginInput' placeholder="Password" v-model='userPassword'/>
            <button v-on:click="checkUserAuth" class='btn loginBtn'>GO</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: '',
            userPassword: '',
        }
    },
    methods: {
        checkUserAuth() {
            console.log(`${this.userEmail} : ${this.userPassword}`);
            // first do call to AUTH api to check user is correct. Receive token
            // then check with token if user is Admin. 
            // const confirmUser = {
            //     email: this.userEmail,
            //     password: this.userPassword,
            // }

            // body: JSON.stringify(this.newUser)

            // if(this.userEmail && this.userPassword) {
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
                res = res.data;
                console.log(res);
                // return 
            })
            .then((data) => {
                console.log(data);
                // this.welcomePopup = true;
                // this.$emit('showNotification', 'success');
            })
            .catch((err => {
                console.log(`error: ${err}`);
            }))
            this.$emit('loggedIn');
        }
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
</style>