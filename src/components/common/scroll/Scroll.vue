<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name:"Scroll",
        props:{
            probeType:{
                type: Number,
                default: 0
            },
            pullUpLoad:{
                type:Boolean,
                default: false
            }
        },
        data(){
            return {
                scroll: null
            }
        },
        created(){

        },
        mounted(){
            // 1.创建scroll对象
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                observeDOM: true,
                click: true
            })

            // 2.监听滚动位置
            this.scroll.on('scroll',(position) => {
                this.$emit('scroll',position)
            })

            // 3.监听上拉事件
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUP')
            })
        },
        methods:{
            scrollTo(x, y, time=800){
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>