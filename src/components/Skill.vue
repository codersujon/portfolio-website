<template>
    <section class="skill py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Skill" 
                text="Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, React JS, Vue JS, Typescript, PHP, MYSQL, Git, and so on."
            />
            <div class="skill__content pt-20 grid grid-cols-2 gap-8 items-center">
                <div class="skill__img ">
                    <img src="/assets/images/skill/skill.png" alt="Skill">
                </div>
                <div class="skill__lists grid grid-cols-4 gap-8">
                    <div class="skill__item mr-8">
                        <img src="/assets/images/skill/html.png" alt="html">
                        <h4 class="capitalize text-2xl">html</h4>
                    </div>
                    <div class="skill__item mr-8">
                        <img src="/assets/images/skill/css.png" alt="css">
                        <h4 class="capitalize text-2xl">css</h4>
                    </div>
                    <div class="skill__item mr-8">
                        <img src="/assets/images/skill/sass.png" alt="sass">
                        <h4 class="capitalize text-2xl">sass</h4>
                    </div>
                    <div class="skill__item mr-8">
                        <img src="/assets/images/skill/bootstrap.png" alt="bootstrap">
                        <h4 class="capitalize text-2xl">bootstrap</h4>
                    </div>
                    <div class="skill__item">
                        <img src="/assets/images/skill/tailwind.png" alt="tailwind">
                        <h4 class="capitalize text-2xl">tailwind</h4>
                    </div>
                    <div class="skill__item">
                        <img src="/assets/images/skill/js.png" alt="js">
                        <h4 class="capitalize text-2xl">js</h4>
                    </div>
                    <div class="skill__item">
                        <img src="/assets/images/skill/jquery.png" alt="jquery">
                        <h4 class="capitalize text-2xl">jquery</h4>
                    </div>
                </div>
            </div>
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