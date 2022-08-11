<template>
    <section class="achievement py-28 bg-slate-50">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="Achievement" 
                text="Check out my Achievement"
                class="text-whtie"
            />
            <AchievementContent/>
        </div>
    </section>
</template>
<script>
import SectionTitleVue from '../../layouts/SectionTitle/SectionTitle.vue';
import AchievementContent from './AchievementContent.vue';
export default {
    name: 'PortfolioWebsiteAchievement',

    data() {
        return {
            
        };
    },

    components:{
        SectionTitleVue,
        AchievementContent
    },
};
</script>

<style scoped>
h2{
    color: #fff;
}
</style>