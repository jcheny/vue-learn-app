<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" alt="" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>    
</template>

<script>
export default {
    name: 'HomeSwiper',
    data (){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: '//img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg'
            },{
                id: '0002',
                imgUrl: '//img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg'
            }]
        }
    }    
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff
    .wrapper 
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        .swiper-img
            width 100%
</style>
