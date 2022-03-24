<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 20px;
        font-weight: 800;

        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }

    .left,.right{
        width: 60px;
        /* background-color: red; */
    }

    .center{
        flex: 1;
        /* background-color: blue; */
    }
</style>