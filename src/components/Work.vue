<template>
    <section class="work py-28 ">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="Creative Portfolio" 
                text="Check out my latest creative works. I have done a lot of work for my local and international clients. Here is a shortlist of my newly designed websites."
            />
        </div>
    </section>
</template>

<script>
import SectionTitleVue from '../layouts/SectionTitle/SectionTitle.vue';
export default {
    name: 'PortfolioWebsiteWork',

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