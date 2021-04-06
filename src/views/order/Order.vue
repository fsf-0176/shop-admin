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
      <el-tab-pane label="待付款" name="first">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="待发货" name="second">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="待收货" name="third">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="已收货" name="fourth">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="已关闭" name="fifth">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="全部订单" name="sixth">
        <order-list />
      </el-tab-pane>
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
  created() {
    const data = {
      status: 300,
      consignee: '',
      orderSn: ''
    }
    this.$store.dispatch('index/order', data)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
