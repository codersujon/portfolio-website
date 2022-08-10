<template>
    <div class="main-menu px-4">
        <nav>
            <ul class="hidden sm:flex flex-col sm:flex-row capitalize text-white p-5 space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 font-medium ">
                <router-link to="/" class="active:text-red-500 hover:text-red-500 transform hover:scale-110 duration-300">home</router-link>
                <router-link to="/about" class="hover:text-red-500 transform hover:scale-110 duration-300">about</router-link>
                <router-link to="/portfolio" class="hover:text-red-500 transform hover:scale-110 duration-300">portfolio</router-link>
                <router-link to="/achievement" class="hover:text-red-500 transform hover:scale-110 duration-300">achievement</router-link>
                <router-link to="/skill" class="hover:text-red-500 transform hover:scale-110 duration-300">skill</router-link>
                <router-link to="/contact" class="hover:text-red-500 transform hover:scale-110 duration-300">contact</router-link>
            </ul>
            <div class="toggle-menu text-white cursor-pointer text-2xl block sm:hidden">
                <i class="fa-solid fa-bars-staggered"></i>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: 'PortfolioWebsiteNavbar',

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

