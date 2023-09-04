import './assets/main.css'
import home from '../src/pages/home.vue'
import boards from '../src/pages/boards.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import masonry from 'vue-next-masonry';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Home = { template: home}
const Boards = { template: boards}

const routes = [
    { path: '/', name: "home", component: home},
    { path: '/boards', name: "boards", component: boards},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(router).use(masonry).use(vuetify).mount('#app')
