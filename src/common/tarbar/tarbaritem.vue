<template>
    <div class="tarbaritem" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>

export default {
    name: "Tarbaritem" ,
    props:{
        path: String,
        activeColor: {
            type:String,
            default: '#1ed317'
        }
    },
    data(){
        return {
            // isActive: true,
            // path: '/home'
        }
    },
    computed:{
        isActive(){
            // 判断当前对象是否含有isActive，若无 则给他相反的isActive，若有 则不做改变
            return this.$route.path.includes(this.path) == 1
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path).catch(err=>err)
        }
    }
}
</script>

<style>
    .tarbaritem{
        flex: 1;
        text-align: center;
        height: 49px;
        color: black;
        font-size: 14px;
    }
    .tarbaritem img{
        width: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    .tarbaritem .one{
        width: 40px;
    }
    /* .active{
        color: #1ed317;
    } */

</style>