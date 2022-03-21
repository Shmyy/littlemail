<template>
    <tarbar>
        <tarbaritem path="/Home">
            <template #item-icon>
                <img src="~assets/img/tarbar/消息.png" alt="">
            </template>
            <template #item-icon-active>
                <img src="~assets/img/tarbar/xiaoxi.png" alt="">
            </template>
            <template #item-text>
                <div >消息</div>
            </template>
        </tarbaritem>
        <!-- <tarbaritem path="/Friends">
            <img slot="item-icon" src="~@assets/img/tarbar/朋友.png" alt="">
            <img slot="item-icon-active" src="~@assets/img/tarbar/pengyou.png" alt="">
            <div slot="item-text">朋友</div>
        </tarbaritem>
        <tarbaritem path="/Discover">
            <img slot="item-icon" src="~@assets/img/tarbar/发现.png" alt="">
            <img slot="item-icon-active" src="~@assets/img/tarbar/faxian.png" alt="">
            <div slot="item-text">发现</div>
        </tarbaritem>
        <tarbaritem path="/Mine">
            <img slot="item-icon" src="~@assets/img/tarbar/我.png" alt="">
            <img slot="item-icon-active" src="~@assets/img/tarbar/wo.png" alt="">
            <div slot="item-text">我</div>
        </tarbaritem> -->
    </tarbar>
</template>

<script>
    import Tarbar from 'components/common/tarbar/Tarbar.vue'
    import Tarbaritem from 'components/common/tarbar/tarbaritem.vue'

    export default {
        name:"Maintarbar",
        components:{
            Tarbar,
            Tarbaritem
        }
    }
</script>