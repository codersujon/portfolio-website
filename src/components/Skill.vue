<template>
    <section class="skill py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Skill" 
                text="Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, React JS, Vue JS, Typescript, PHP, MYSQL, Git, and so on."
            />
            <div class="skill__content pt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div class="skill__img mb-16 m-auto">
                    <img src="/assets/images/skill/skill.png" alt="Skill">
                </div>
                <div class="skill__lists grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/html.png" alt="html" class="h-24 w-24 m-auto ">
                        <h4 class="capitalize text-2xl">html</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/css.png" alt="css" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">css</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/sass.png" alt="sass" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">sass</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/bootstrap.png" alt="bootstrap" class="h-24 w-24 selection:m-auto">
                        <h4 class="capitalize text-2xl">bootstrap</h4>
                    </div>
                    <div class="skill__item text-center">
                        <img src="/assets/images/skill/tailwind.png" alt="tailwind" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">tailwind</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/js.png" alt="js" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">js</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/jquery.png" alt="jquery" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">jquery</h4>
                    </div>
                    <div class="skill__item m-auto text-center">
                        <img src="/assets/images/skill/react.png" alt="react" class="h-24 w-24 m-auto">
                        <h4 class="capitalize text-2xl">react</h4>
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