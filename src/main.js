import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router';
// import VueResource from 'vue-resource'


const store = createStore({
    state() {
        return {
            user: {
                userData: {},
                userKey: '',
            },
            
            cart: []
        }
    },
    mutations: {
        logoutUser(state) {
            state.userData = {};
            state.user.userKey = '';
            console.log('user has left');
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
