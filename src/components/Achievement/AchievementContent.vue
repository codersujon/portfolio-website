<template>
    <div class="achievement__content pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        <div class="achive__item">
            <span class="text-6xl" v-text="19"></span>
            <h4 class="font-thin">Happy Clients</h4>
        </div>
        <div class="achive__item">
            <span class="text-6xl" v-text="20"></span>
            <h4 class="font-thin">Projects Finished</h4>
        </div>
        <div class="achive__item">
            <span class="text-6xl" v-text="2"></span>
            <h4 class="font-thin">Awards Won</h4>
        </div><div class="achive__item">
            <span class="text-6xl" v-text="5"></span>
            <h4 class="font-thin">Drinked Pepsi</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioWebsiteAchievementContent',

    data() {
        return {
            
        };
    },
};
</script>

<style scoped>

</style>