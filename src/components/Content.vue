<template>
  <el-row class="content-box">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3"> 你可以看见我吗？ </el-col>
    <el-col class="center" :xs="16" :sm="18" :md="20" :lg="21" :xl="21">
        <slot />
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
@import url('../assets/css/colors.less');
.content-box {
  background: @bg;
  width: 100%;
  min-height: calc(100% - 60px);
  position: absolute;
  top: 60px;
  & > .center {
    padding: 15px;
  }
}
</style>
