import Vue from "vue";
import VueRouter from "vue-router";

import {auth} from "@/constants/firebase";
import store from "@/store/index";

import general from "@/router/modules/general";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        ...general,
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.currentUser) {
            next("/");
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (auth.currentUser) {
            next("/home");
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    store.commit("setPrevRoute", from.path);
});

export default router;