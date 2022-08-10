<template>
    <section class="work py-28">
        <div class="container mx-auto px-4">
            <SectionTitleVue 
                title="My Latest Work" 
                text="Experience without theory is blind, so I have done almost 10+ projects for my local and international clients. Here is a shortlist."
            />
            <div class="work__content pt-20 grid grid-cols-1">
                <div class="workItem">
                    <div class="workItem__img">
                        <div class="workItem__overlay">
                            <div class="workItem__overlay__icon">
                                <h4>PSD to HTML</h4>
                                <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                                <a href="https://www.youtube.com/watch?v=KItCFl5GgdI" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="workItem__content">
                        <h4>PSD to HTML</h4>
                        <div className="portfolioItem__info-link ">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="workItem">
                    <div class="workItem__img">
                        <div class="workItem__overlay">
                            <div class="workItem__overlay__icon">
                                <h4>PSD to HTML</h4>
                                <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                                <a href="https://www.youtube.com/watch?v=KItCFl5GgdI" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="workItem__content">
                        <h4>PSD to HTML</h4>
                        <div className="portfolioItem__info-link ">
                            <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="workItem">
                    <div class="workItem__img">
                        <div class="workItem__overlay">
                            <div class="workItem__overlay__icon">
                                <h4>PSD to HTML</h4>
                                <a href="https://positiveworldbd.github.io/Tajam-Template/" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                                <a href="https://www.youtube.com/watch?v=KItCFl5GgdI" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="workItem__content">
                        <h4>PSD to HTML</h4>
                        <div className="portfolioItem__info-link ">
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
            itemName: "",
            livePreview: "",

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
.workItem__img{
    background-image: url('/assets/images/portfolio/Project__bg-1.png') no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>