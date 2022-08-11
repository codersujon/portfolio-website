<template>
    <div class="about__content grid grid-cols-1 lg:grid-cols-2 gap-8 pt-20 px-4">
        <div class="about__img mb-8">
            <img src="/assets/images/about__Me.jpg" alt="About Me" class="border-4 border-red-200 rounded w-full lg:w-3/5 float-right">
        </div>
        <div class="about__info space-y-4">
            <h3 class="font-thin">Hi! I'm <span class="text-red-400 font-semibold">Md. Sujan Ahmed</span></h3>
            <p class="text-slate-500 text-justify">Hi! I'm Md.Sujon Ahmed, JavaScript Developer from Dhaka, Bangladesh. I'have been completed my B.Sc Hon's in CSE from Institute of Science Trade & Technology (ISTT). Basically, I like to spend my time engaging in creative activities, venturing various categories. I solved thousand+ basic to medium level programming problems in C/C++. After leaving the competitive programming arena, I decided to shift my gear and charged into the world of database, web designing and development. I have learnt tons of things from completing 60+ follow along projects. Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, React JS, Vue JS, Typescript, PHP, MYSQL, Git, and so on. I am still a newbie learning new stuffs everyday and enhancing my skills. That’s all about me. Please take your time to look around.</p>
            <div className="flex justify-between text-slate-500">
                <table class="table-auto">
                    <tbody class="flex">
                        <tr class="mr-10">
                            <td class="font-semibold"><i class="fa-solid fa-location-dot"></i> City</td>
                            <td>:</td>
                            <td>{{personalInfo.city}}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold "><i class="fa-solid fa-envelope"></i> Email</td>
                            <td>:</td>
                            <td>{{personalInfo.email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="about-btn pt-5">
                <a href="#" class="px-5 py-3 cursor-pointer bg-red-500 hover:bg-red-600 rounded text-white text-1xl">My Resume</a>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioWebsiteAboutContent',

    data() {
        return {
            personalInfo:{
                email: "csesujon155@gmail.com",
                city: "Dhaka, Bangladesh",
            }
        };
    },
};
</script>

<style scoped>

</style>