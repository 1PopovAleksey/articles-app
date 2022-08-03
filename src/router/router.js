import Home from "@/pages/Home";
import {createRouter, createWebHistory} from "vue-router";
import Posts from "@/pages/Posts";
import FullPost from "@/pages/FullPost";

const routes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: FullPost},
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;