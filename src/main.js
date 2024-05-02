import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AboutComponent from './components/AboutComponent'
import HomeComponent from './components/HomeComponent'
import OnboardComponent from './components/OnboardComponent'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: AboutComponent},
        { path: '/', component: HomeComponent},
        { path: '/onboard', component: OnboardComponent}

    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
