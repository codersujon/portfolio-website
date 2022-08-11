import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../components/About/About.vue';
import Work from '../components/Work/Work.vue';
import Achievement from '../components/Achievement/Achievement.vue';
import Skill from '../components/Skill/Skill.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/achievement', component: Achievement },
    { path: '/skill', component: Skill }
  ]

export default createRouter({
    history: createWebHistory('/'),
    routes, 
})