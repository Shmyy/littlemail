<template>
    <div id="detail">
        <detailnavbar></detailnavbar>
    </div>
</template>

<script>
    import Detailnavbar from './childcomponents/Detailnavbar'

    import {getDetail} from 'network/detail'

    export default {
        name: "Detail",
        components:{
            Detailnavbar,
        },
        data(){
            return {
                iid:null,
                topImages:[]
            }
        },
        created(){
            
        },
        activated(){
            // 1.保存传入的iid
            this.iid = this.$route.params.iid
            console.log(this.iid)
            
            // 2.根据iid请求详情数据
            getDetail(this.iid).then(res=>{
                console.log(res)
                // 1.获取顶部的轮播数据
                this.topImages = res.result.itemInfo.topImages
            })
        }
    }
</script>

<style scoped>

</style>