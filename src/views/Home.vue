<template>
   <div>
        <HeroVue/>
        <AboutVue/>
        <WorkVue/>
        <AchievementVue/>
        <SkillVue/>
   </div>
</template>

<script>
import HeroVue from '../components/Hero.vue';
import AboutVue from '../components/About.vue';
import WorkVue from '../components/Work.vue';
import AchievementVue from '../components/Achievement.vue';
import SkillVue from '../components/Skill.vue'

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
        SkillVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

