<template>
    <section class="achiemement py-28">
        <div class="md:container md:mx-auto">
            <SectionTitleVue 
                title="My Skill" 
                text="Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, React JS, Vue JS, Typescript, PHP, MYSQL, Git, and so on."
            />
        </div>
    </section>
</template>

<script>
import SectionTitleVue from '../layouts/SectionTitle/SectionTitle.vue';
export default {
    name: 'PortfolioWebsiteSkill',

    data() {
        return {
            
        };
    },

    components:{
        SectionTitleVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>