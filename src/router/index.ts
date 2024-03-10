import { createRouter, createWebHistory } from 'vue-router'
import PortMaintain from "../views/PortMaintain.vue";
import RememberMsg from "../views/RememberMsg.vue";
import TeamMsg from "../views/TeamMsg.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/rememberMsg'
        },
        {
            path: '/rememberMsg',
            name: 'rememberMsg',
            component: RememberMsg
        },
        {
            path: '/teamMsg',
            name: 'teamMsg',
            component: TeamMsg
        },
        {
            path: '/portMaintain',
            name: 'portMaintain',
            component: PortMaintain,
        },
    ]
})

export default router
