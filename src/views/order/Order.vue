<template>
  <div class="order">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <div class="search">
        订单号
        <el-input placeholder="请输入订单号" class="" v-model="input" clearable>
        </el-input>
        收货人
        <el-input placeholder="请输入收货人" class="" v-model="input" clearable>
        </el-input>
        快递号
        <el-input
          placeholder="请输入快递单号"
          class=""
          v-model="input"
          clearable
        >
        </el-input>
        <el-button type="primary">查询</el-button>
      </div>
      <el-tab-pane label="用户管理" name="first">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="less" scoped>
.order {
  .search .el-input {
    width: 250px;
    margin: 0 10px;
  }
  background: white;
  padding: 15px;
  .search {
    margin-bottom: 15px;
  }
}
</style>
<script>
import OrderList from '@/components/OrderList'
export default {
  components: { OrderList },
  data() {
    return {
      activeName: 'first',
      input: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
