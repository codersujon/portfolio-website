<template>
   <section class="about py-28 bg-slate-50">
        <div class="container mx-auto px-4">
            <SectionTitleVue title="About Me" text="Introduce about me."/>
            <AboutContentVue/>
        </div>
   </section>
</template>

<script>
import SectionTitleVue from '../../layouts/SectionTitle/SectionTitle.vue';
import AboutContentVue from './AboutContent.vue';
export default {
    name: 'PortfolioWebsiteAbout',

    components:{
        SectionTitleVue,
        AboutContentVue
    }
};
</script>

<style scoped>

</style>