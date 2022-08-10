<template>
    <div class="main-menu px-4">
        <nav>
            <ul class="hidden sm:flex flex-col sm:flex-row capitalize text-white p-5 space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 font-medium ">
                <li class="active:text-red-500 hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">home</a></li>
                <li class="hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">about</a></li>
                <li class="hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">portfolio</a></li>
                <li class="hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">achievement</a></li>
                <li class="hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">skill</a></li>
                <li class="hover:text-red-500 transform hover:scale-110 duration-300"><a href="#">contact</a></li>
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

