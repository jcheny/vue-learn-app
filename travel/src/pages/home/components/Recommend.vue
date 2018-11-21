<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src='item.imgUrl'/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommend' ,
    data () {
        return{
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_200x200_e839eb8e.jpg',
                title:'深圳欢乐谷',
                desc:'这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
                title:'深圳野生动物园',
                desc:'这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                title:'东部华侨城大侠谷',
                desc:'这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情'
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                title:'深圳小梅沙海洋世界',
                desc:'这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情'
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
                title:'锦绣中华民俗村',
                desc:'这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情，这里是详情'
            }]
         }
    }   
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .title
        margin-top .2rem
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
        .item-button
            background #ff9300
            padding 0 .2rem
            line-height .44rem
            border-radius .06rem
            margin-top .2rem

</style>
