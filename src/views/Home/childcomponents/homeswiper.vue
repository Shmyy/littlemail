<template>
    <swiper
        :slides-per-view="1.5"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swiper"
        >
        <!-- :space-between="50" -->

        <swiper-slide v-for="item in banners" class="swiper-slide">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-slide>
    </swiper>
</template>

<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
    import 'swiper/css';

    export default{
        name: "Homeswiper",
        props:{
            banners:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                isLoad: false
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        methods:{
            imageLoad(){
                if(!this.isLoad){
                    this.$emit('swiperImageLoad')
                    this.isLoad = true
                }
            
            }
        },
        setup() {
                const onSwiper = (swiper) => {
                // console.log(swiper);
            };
            const onSlideChange = () => {
                // console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
            };
        },
    }
</script>

<style>
    .swiper{
        display: flex;
        width: 100%;
    }

    .swiper-slide{
        flex: 1;
    }
</style>