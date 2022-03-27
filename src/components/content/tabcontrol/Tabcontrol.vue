<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" class="tabcontrolitem"
            :class="{active:index === currentindex}"
            @click="tabclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabcontrol",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentindex: 0
            }
        },
        methods:{
            tabclick(index){
                this.currentindex = index;
                this.$emit('tabclick',index)
            }
        }
    }
</script>

<style>
    .tabcontrol{
        display: flex;
        text-align: center;
        font-size: 15px;

        background-color: white;

    }

    .tabcontrolitem{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }

    .tabcontrolitem span{
        padding: 5px;
    }
    .active{
        color: var(--color-high-text);
    }

    .active span{
        border-bottom:3px solid var(--color-tint);
    }
</style>