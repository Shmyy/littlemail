<template>
    <div id="home">
        <navbar class="home-nav">
            <template #center>
                <div>首页</div>
            </template>
        </navbar>
        <homeswiper :banners="banners"></homeswiper>
        <recommendview :recommends="recommends"></recommendview>
    </div>
</template>

<script>
    import Navbar from 'components/common/navbar/Navbar'
    import Homeswiper from './childcomponents/homeswiper'
    import Recommendview from './childcomponents/Recommendview'

    import {getHomemultidata} from "network/home";

    export default {
        name: "Home",
        components:{
            Navbar,
            Homeswiper,
            Recommendview
        },
        data(){
            return {
                banners: [],
                recommends: []
            }
        },
        created(){
            // 1.请求多个数据
            getHomemultidata().then(res =>{
                console.log(res); 
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
                // console.log(banners);
            })
        }
    }
</script>

<style>
    .home-nav{
        background-color: #ededed;
    }
    
</style>