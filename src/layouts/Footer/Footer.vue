<template>
    <FooterTopVue/>
    <footer class="footer bg-red-600 text-center py-3">
        <div class="container mx-auto px-4">
            <p class="text-white text-lg m-0">&copy; {{copyrights}}  <span class="font-semibold">{{company}}</span>.</p>
        </div>
    </footer>
</template>

<script>
import FooterTopVue from './FooterTop.vue';
export default {
    name: 'PortfolioWebsiteFooter',

    data() {
        return {
            copyrights:'2022. All rights reserved by',
            company: 'CoderSujon'
        };
    },

    components:{
        FooterTopVue
    },
};
</script>

