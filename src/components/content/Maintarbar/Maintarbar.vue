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
        <tarbaritem path="/Friends">
            <template #item-icon>
                <img src="~assets/img/tarbar/朋友.png" alt="">
            </template>
            <template #item-icon-active>
                <img src="~assets/img/tarbar/pengyou.png" alt="">
            </template>
            <template #item-text>
                <div >朋友</div>
            </template>
        </tarbaritem>
        <tarbaritem path="/Discover">
            <template #item-icon>
                <img src="~assets/img/tarbar/发现.png" alt="">
            </template>
            <template #item-icon-active>
                <img src="~assets/img/tarbar/faxian.png" alt="">
            </template>
            <template #item-text>
                <div >发现</div>
            </template>
        </tarbaritem>
        <tarbaritem path="/Mine">
            <template #item-icon>
                <img src="~assets/img/tarbar/我.png" alt="">
            </template>
            <template #item-icon-active>
                <img src="~assets/img/tarbar/wo.png" alt="">
            </template>
            <template #item-text>
                <div >我</div>
            </template>
        </tarbaritem>
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