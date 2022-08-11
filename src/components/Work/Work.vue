<template>
    <section class="work py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Latest Work" 
                text="Experience without theory is blind, so I have done almost 10+ projects for my local and international clients. Here is a shortlist."
            />
            <WorkContentVue />
        </div>
    </section>
</template>

<script>
import SectionTitleVue from '../../layouts/SectionTitle/SectionTitle.vue';
import WorkContentVue from './WorkContent.vue';
export default {
    name: 'PortfolioWebsiteWork',

    data() {
        return {

        };
    },

    components:{
        SectionTitleVue,
        WorkContentVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

.workItem__content{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
}

</style>