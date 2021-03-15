<template>
  <div class="showSetting">
    <div class="group">
      <span>广告</span>
      <span>
        <el-radio v-model="radio" label="1">显示</el-radio>
        <el-radio v-model="radio" label="2">不显示</el-radio>
      </span>
    </div>
    <div class="group">
      <span>公告</span>
      <span>
        <el-radio v-model="radio" label="1">显示</el-radio>
        <el-radio v-model="radio" label="2">不显示</el-radio>
      </span>
    </div>
    <div class="group">
      <span>广告下的图标</span>
      <span>
        <el-radio v-model="radio" label="1">显示</el-radio>
        <el-radio v-model="radio" label="2">不显示</el-radio>
      </span>
    </div>
    <div class="group">
      <span>首页分类图片或</span>
      <span>
        <el-radio v-model="radio" label="1">显示</el-radio>
        <el-radio v-model="radio" label="2">不显示</el-radio>
      </span>
    </div>
    <div class="group">
      <span>&nbsp;</span>
      <span>
        <el-button type="primary">确定保存</el-button>
        <el-button>取消</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../assets/css/colors.less');
.showSetting {
  padding: 15px;
  height: 100%;
  background: @white;
  .group {
    padding: 25px 0;
    span:first-child {
      font-size: 14px;
      margin-right: 30px;
      display: inline-block;
      width: 150px;
      text-align: right;
    }
  }
}
</style>
