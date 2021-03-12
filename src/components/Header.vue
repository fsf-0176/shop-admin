<template>
  <div class="header">
    <el-col class="logo" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
      <img src="../assets/logo.png" alt="" />
      天青色等烟雨
    </el-col>
  </div>
</template>
<style lang="less">
@import url('../assets/css/colors.less');
.header {
  height: 60px;
  width: 100%;
  position: fixed;
  background: @header;
  top: 0;
  left: 0;
  z-index: 1;
  .logo {
    img {
      max-width: 50px;
      margin-right: 10px;
    }
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: @white;
  }
}
</style>
