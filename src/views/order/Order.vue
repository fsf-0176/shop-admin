<template>
  <div class="order">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <div class="search">
        订单号
        <el-input
          placeholder="请输入订单号"
          class=""
          @change="order"
          v-model="orderSn"
          clearable
        >
        </el-input>
        收货人
        <el-input
          placeholder="请输入收货人"
          class=""
          @change="consigne"
          v-model="consignee"
          clearable
        >
        </el-input>
        <el-button type="primary">查询</el-button>
      </div>
      <el-tab-pane label="待付款" name="first" status="101,801">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="待发货" name="second" status="300">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="待收货" name="third" status="301">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="已收货" name="fourth" status="401">
        <order-list />
      </el-tab-pane>
      <el-tab-pane label="已关闭" name="fifth" status="102,103">
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
      orderSn: '',
      consignee: ''
    }
  },
  created() {
    const data = {
      status: '101,801',
      consignee: '',
      orderSn: ''
    }
    this.$store.dispatch('index/order', data)
  },
  methods: {
    consigne() {
      const data = {
        consignee: this.consignee,
        orderSn: this.orderSn,
        status: this.status
      }
      this.$store.dispatch('index/order', data)
    },
    order() {
      const data = {
        consignee: this.consignee,
        orderSn: this.orderSn,
        status: this.status
      }
      this.$store.dispatch('index/order', data)
    },
    handleClick(tab, event) {
      this.status = tab.$attrs.status
      const data = {
        status: tab.$attrs.status,
        consignee: '',
        orderSn: ''
      }
      this.$store.dispatch('index/order', data)
    }
  }
}
</script>
