<template>
    <div>
        <navbar>
            <template #left>
                <div class="back"
                    @click="backclick">
                    <img src="~assets/img/common/back.svg" alt="">
                </div>
            </template>
            <template #center>
                <div class="title">
                    <div v-for="(item,index) in titles" 
                        class="titleitem"
                        :class="{active: index === currentindex}"
                        @click="titleclick(index)">{{item}}</div>
                </div>
            </template>
        </navbar>
    </div>
</template>

<script>
    import Navbar from 'components/common/navbar/Navbar'

    export default {
        name:"Detailnavbar",
        components:{
            Navbar
        },
        data(){
            return {
                titles:['商品','参数','评论','推荐'],
                currentindex: 0
            }
        },
        methods:{
            titleclick(index){
                this.currentindex = index
            },
            backclick(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 18px;
    }
    .titleitem{
        flex: 1;
    }

    .active{
        color: var(--color-high-text);
    }
    .back{
        margin-top: 5px;
    }
</style>