<template>
    <div class="wrapper" ref="aaaa">

    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name:"Category",
        data(){
            return {
                scroll: null
            }
        },
        created(){

        },
        mounted(){
            this.scroll = new BScroll(document.querySelector('.wrapper'),{
                probeType: 3,
                pullUpLoad: true
            })

            this.scroll.on('scroll',(position) => {

            })

            this.scroll.on('pullingUp',() =>{
                
            })
        }
    }
</script>

<style>

</style>