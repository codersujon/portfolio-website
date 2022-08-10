<template>
    <div class="sectionTitle">
        <divf class="md:containe md:mx-auto text-center">
            <h2 class="font-medium mb-3">{{title}}</h2>
            <p class="text-slate-600">{{text}}</p>
        </divf>
    </div>
</template>

<script>
export default {
    name: 'PortfolioWebsiteSectionTitle',

    props: {
        title: "",
        text: ""
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>