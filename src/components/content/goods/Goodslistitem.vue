<template>
    <div class="goodsitem">
        <img :src="goodsitem.show.img" alt="">
        <div class="goodsinfo">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Goodslistitem",
        props:{
            goodsitem:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style>
    .goodsitem {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    .goodsitem img {
        width: 100%;
        border-radius: 5px;
    }
    .goodsinfo {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goodsinfo p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goodsinfo .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goodsinfo .collect {
        position: relative;
    }
    
</style>