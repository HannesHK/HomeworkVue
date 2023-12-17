import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import ContactUs from "../views/ContactUs.vue";
import AddPost from "../views/AddPost.vue"
import APost from "../views/APost.vue"
import auth from "../auth";




const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/contactus",
        name: "ContactUs",
        component: ContactUs
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/apost/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;