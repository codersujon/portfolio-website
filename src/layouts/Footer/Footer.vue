<template>
    <FooterTopVue/>
    <footer class="footer bg-red-500 text-center py-3">
        <div class="container md:container md:mx-auto">
            <p class="text-white text-lg m-0">&copy; 2022. All rights reserved by <span class="font-semibold">CoderSujon</span>.</p>
        </div>
    </footer>
</template>

<script>
import FooterTopVue from './FooterTop.vue';
export default {
    name: 'PortfolioWebsiteFooter',

    data() {
        return {
            
        };
    },

    components:{
        FooterTopVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

