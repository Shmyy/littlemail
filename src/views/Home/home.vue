<template>
    <div id="home" class="wrapper">
        <navbar class="home-nav">
            <template #center>
                <div>首页</div>
            </template>
        </navbar>
        <tabcontrol class="tabcontrol" :titles="['流行','新款','精选']"
                                            @tabclick="tabclick"
                                            ref="tabControl1"
                                            v-show="isTabFixed"></tabcontrol>

        <scroll class="content" 
                ref="scroll" 
                :prbe-type="3" 
                @scroll="contentscroll"
                
                :pull-up-load="true"
                @pullingUP="loadMore"
                >
            <homeswiper :banners="banners" @swiperImageLoad="swiperImageLoad"></homeswiper>
            <recommendview :recommends="recommends"></recommendview>
            <featureview></featureview>
            <tabcontrol     :titles="['流行','新款','精选']"
                            @tabclick="tabclick"
                            ref="tabControl2"
                            v-show="!isTabFixed"
                            ></tabcontrol>
            <goodslist :goods="showgoods"></goodslist>
        </scroll>
        
        <backtop @click="backclick" v-show="isshowbacktop"></backtop>
    </div>
</template>

<script>
    import Homeswiper from './childcomponents/homeswiper'
    import Recommendview from './childcomponents/Recommendview'
    import Featureview from './childcomponents/Feature' 

    import Navbar from 'components/common/navbar/Navbar'
    import Tabcontrol from 'components/content/tabcontrol/Tabcontrol'
    import Goodslist from 'components/content/goods/Goodslist'
    import Backtop from 'components/content/backtop/Backtop'

    import {getHomemultidata,getHomeGoods} from "network/home"

    import Scroll from 'components/common/scroll/Scroll'

    export default {
        name: "Home",
        components:{
            Navbar,
            Homeswiper,
            Recommendview,
            Featureview,
            Tabcontrol,
            Goodslist,
            Scroll,
            Backtop
        },
        data(){
            return {
                banners: [],
                recommends: [],
                goods:{
                    'pop':{page: 0,list: []},
                    'new':{page: 0,list: []},
                    'sell':{page: 0,list: []},
                },
                currenttype:'pop',
                isshowbacktop: false,
                tabOffsetTop: 0,
                isTabFixed:false
            }
        },
        computed:{
            showgoods(){
                return this.goods[this.currenttype].list
            }
        },
        destroyed(){
            console.log('home destroyed')
        },
        activated(){
            console.log('activated')
        },
        deactivated(){
            console.log('deactivated')
        },
        created(){
            // 1.请求多个数据
            this.getHomemultidata()

            // 2.请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        mounted(){
            
        },
        methods:{
            //事件监听相关方法
            tabclick(index){
                switch(index){
                    case 0:
                        this.currenttype = 'pop'
                        break
                    case 1:
                        this.currenttype = 'new'
                        break
                    case 2:
                        this.currenttype = 'sell'
                }
                this.$refs.tabControl1.currentindex = index
                this.$refs.tabControl2.currentindex = index
            },
            backclick(){
                this.$refs.scroll.scrollTo(0, 0, 800)
            },
            contentscroll(position){
                // 1.判断Backtop是否显示
                this.isshowbacktop = position.y < -1000

                // 2.决定tabControl是否吸顶(position：fixed)
                this.isTabFixed = -(position.y) > this.tabOffsetTop-44
            },
                // 上拉加载方法
            loadMore(){
                this.getHomeGoods(this.currenttype)
            },
            // 吸顶效果
            swiperImageLoad(){
                // console.log(this.$refs.tabControl2.$el.offsetTop)
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            },


            // 网络请求相关方法
            getHomemultidata(){
                getHomemultidata().then(res =>{
                    // console.log(res); 
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                    // console.log(banners);
                })
            },
            getHomeGoods(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res =>{
                    // console.log(res); 
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1

                    this.$refs.scroll.finishPullUp()
                })
            }
        }

    }
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }

    .home-nav{
        background-color: #ededed;

        /* position: sticky;
        top: 0;
        z-index: 9; */
    }
    .tabcontrol{
        z-index: 9;
    }
    .content{
        height: calc(100% - 93px);
        overflow: hidden;
    }
    .fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
    }
    /* .wrapper{
        height: 100%;
    } */

</style>