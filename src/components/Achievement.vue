<template>
    <section class="achievement py-28 bg-slate-50">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="Achievement" 
                text="Check out my Achievement"
                class="text-whtie"
            />
            <div class="achievement__content pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
                <div class="achive__item">
                    <span class="text-6xl">19</span>
                    <h4 class="font-thin">Happy Clients</h4>
                </div>
                <div class="achive__item">
                    <span class="text-6xl">20</span>
                    <h4 class="font-thin">Projects Finished</h4>
                </div>
                <div class="achive__item">
                    <span class="text-6xl">02</span>
                    <h4 class="font-thin">Awards Won</h4>
                </div><div class="achive__item">
                    <span class="text-6xl">05</span>
                    <h4 class="font-thin">Drinked Pepsi</h4>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import SectionTitleVue from '../layouts/SectionTitle/SectionTitle.vue';
export default {
    name: 'PortfolioWebsiteAchievement',

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
h2{
    color: #fff;
}
</style>