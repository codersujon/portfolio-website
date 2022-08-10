<template>  
    <header class="header bg-slate-900 py-5">
        <div class="sm:container sm:mx-auto flex md:flex-row justify-between items-center text-left">
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
