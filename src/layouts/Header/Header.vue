<template>  
    <header class="header bg-slate-900">
        <div class="sm:container sm:mx-auto flex justify-between items-center">
            <LogoVue />
            <NavbarVue />
        </div>
    </header>
</template>

<script>
import LogoVue from './Logo.vue';
import NavbarVue from './Navbar.vue';
export default {
    
    name: 'PortfolioWebsiteHeader',

    data() {
        return {
            
        };
    },

    components:{
        LogoVue,
        NavbarVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>