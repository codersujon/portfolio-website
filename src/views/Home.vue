<template>
   <div>
        <HeroVue/>
        <AboutVue/>
        <!-- <WorkVue/> -->
        <!-- <AchievementVue/> -->
   </div>
</template>

<script>
import HeroVue from '../components/Hero.vue';
import AboutVue from '../components/About.vue';
import WorkVue from '../components/Work.vue';
import AchievementVue from '../components/Achievement.vue';

export default {
    name: 'PortfolioWebsiteHome',

    data() {
        return {
            
        };
    },

    components:{
        HeroVue,
        AboutVue,
        WorkVue,
        AchievementVue,
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

