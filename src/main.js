import Vue from "vue";
import App from "./App.vue";

import {auth} from "./constants/firebase";
import router from './router/index';
import store from './store';

import "bootstrap-css-only/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "@/styles/global.css";

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(async user => {
    if (user) {
       // Do something if user is logged in.
    }
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});