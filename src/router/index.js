import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
