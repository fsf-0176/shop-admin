<template>
  <el-col class="menus" :xs="8" :sm="6" :md="4" :lg="5" :xl="3"> </el-col>
</template>

<style lang="less" scoped>
@import url('../assets/css/colors.less');
.menus {
  height: calc(100% - 60px);
  background: @menus;
  position: fixed;
  top: 60px;
  left: 0;
}
</style>
