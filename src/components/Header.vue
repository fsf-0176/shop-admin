<template>
    <el-col :xl="24" class="header"></el-col>
</template>
<style lang="less">
@import url('../assets/css/colors.less');
    .header{
        height: 60px;
        position: fixed;
        background: @header;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>
