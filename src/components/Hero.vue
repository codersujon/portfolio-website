<template>
    <section class="hero py-28">
        <div class="container mx-auto px-4 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <div class="hero__content space-y-3 mb-20 text-center lg:text-left justify-center">
                <h3 class="font-thin">Hello! <span class="text-red-400">I'm</span></h3>
                <h1 class="uppercase text-5xl xl:text-6xl"><span class="text-red-500">{{ firstName }}</span> {{ lastName }} </h1>
                <h4 class="text-red-400 mb-2">B.Sc Hon's in {{ degree }} </h4>
                <p class="text-slate-500">I’m a highly motivated, ambitious, and creative person who can make <br/> you happy to develop an amazing website.</p>
            </div>
            <div class="hero__image m-auto ">
                <img src="/assets/images/hero.png" alt="My-Image">
            </div>
        </div>
    </section>
</template>-

<script>
export default{
    name: 'Hero',

    data(){
        return{
            firstName: 'Md. Sujan',
            lastName: 'Ahmed',
            degree: 'CSE',
        }
    }
};
</script>

<!--  flex-col md:flex-row  2xl:justify-evenly  items-center -->