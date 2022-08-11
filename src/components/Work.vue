<template>
    <section class="work py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Latest Work" 
                text="Experience without theory is blind, so I have done almost 10+ projects for my local and international clients. Here is a shortlist."
            />
            
            <div class="work__content pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div class="workItem bg-[url('/assets/images/portfolio/Project__bg-1.png')] w-full relative bg-cover">
                    <div class="workItem__img w-96 h-96 cursor-pointer transform hover:scale-110 duration-500">
                    </div>
                    <div class="workItem__content text-white bg-slate-800 flex justify-between items-center p-5">
                        <h5>PSD to HTML</h5>
                        <div className="portfolioItem__info-link w-10 h-10 leading-10 bg-red-600 text-center border-2 border-red-800 rounded-full transform hover:scale-110 duration-300">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="workItem bg-[url('/assets/images/portfolio/Project__bg-2.png')] w-full relative bg-cover">
                    <div class="workItem__img w-96 h-96 cursor-pointer transform hover:scale-90 duration-500 ">
                        
                    </div>
                    <div class="workItem__content text-white bg-slate-800 flex justify-between items-center p-5">
                        <h5>PSD to HTML</h5>
                        <div className="portfolioItem__info-link w-10 h-10 leading-10 bg-red-600 text-center border-2 border-red-800 rounded-full transform hover:scale-110 duration-300">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="workItem bg-[url('/assets/images/portfolio/Project__bg-3.png')] w-full relative bg-cover">
                    <div class="workItem__img w-96 h-96 cursor-pointer transform hover:scale-110 duration-500">
                    </div>
                    <div class="workItem__content text-white bg-slate-800 flex justify-between items-center p-5">
                        <h5>PSD to HTML</h5>
                        <div className="portfolioItem__info-link w-10 h-10 leading-10 bg-red-600 text-center border-2 border-red-800 rounded-full transform hover:scale-110 duration-300">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="workItem bg-[url('/assets/images/portfolio/Project__bg-4.png')] w-full relative bg-cover">
                    <div class="workItem__img w-96 h-96 cursor-pointer transform hover:scale-110 duration-500">
                    </div>
                    <div class="workItem__content text-white bg-slate-800 flex justify-between items-center p-5">
                        <h5>PSD to HTML</h5>
                        <div className="portfolioItem__info-link w-10 h-10 leading-10 bg-red-600 text-center border-2 border-red-800 rounded-full transform hover:scale-110 duration-300">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitleVue from '../layouts/SectionTitle/SectionTitle.vue';
export default {
    name: 'PortfolioWebsiteWork',

    data() {
        return {

        };
    },

    components:{
        SectionTitleVue
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

.workItem__content{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
}

</style>