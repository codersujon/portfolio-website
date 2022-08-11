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
import AboutVue from '../components/About/About.vue';
import WorkVue from '../components/Work/Work.vue';
import AchievementVue from '../components/Achievement/Achievement.vue';
import SkillVue from '../components/Skill/Skill.vue'

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

