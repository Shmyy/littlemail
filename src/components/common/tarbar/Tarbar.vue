<template>
<div id="tarbar">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "Tarbar"
    }
</script>

<style>
      /* @import "./assets/css/base.css"; */

    #tarbar{
        display: flex;
        background-color: #ededed;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -1px -1px rgba(100, 100, 100, 0.1);
    }
</style>