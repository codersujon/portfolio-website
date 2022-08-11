<template>
    <section class="skill py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Skill" 
                text="Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, React JS, Vue JS, Typescript, PHP, MYSQL, Git, and so on."
            />
            <SkillContentVue/>
        </div>
    </section>
</template>

<script>
import SectionTitleVue from '../../layouts/SectionTitle/SectionTitle.vue';
import SkillContentVue from './SkillContent.vue';
export default {
    name: 'PortfolioWebsiteSkill',

    data() {
        return {
            
        };
    },

    components:{
        SectionTitleVue,
        SkillContentVue
    },
};
</script>

<style scoped>

</style>