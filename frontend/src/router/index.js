import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Containers */
import home from '../containers/home.vue'
import room from '../containers/room.vue'
import account from '../containers/account.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/room/:id', name: 'room', component: room },
    { path: '/account', name: 'account', component: account },
    { path: '*', redirect: '/' }
  ]
})
