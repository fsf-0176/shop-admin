<template>
  <div class="box">
    <el-col class="total">
      <div ref="test"></div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div ref="client" class="client"></div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div ref="order" class="order"></div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div ref="pay" class="pay"></div>
    </el-col>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  LegendComponent,
  DatasetComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  PieChart,
  LineChart,
  DatasetComponent,
  CanvasRenderer
])
export default {
  name: 'Home',
  mounted() {
    this.test()
    this.client()
    this.order()
    this.pay()
  },
  methods: {
    pay() {
      const pay = this.$refs.pay
      const myChart = echarts.init(pay)
      myChart.setOption({
        title: {
          text: '支付'
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '成交订单数', '成交金额'],
            ['最近30天', 85, 93],
            ['最近7天', 73, 55],
            ['昨天', 65, 82],
            ['今天', 65, 82]
          ]
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }]
      })
    },
    order() {
      const order = this.$refs.order
      const myChart = echarts.init(order)
      myChart.setOption({
        title: {
          text: '下单'
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '加入购物车', '提交订单数'],
            ['最近30天', 85, 93],
            ['最近7天', 73, 55],
            ['昨天', 65, 82],
            ['今天', 65, 82]
          ]
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }]
      })
    },
    client() {
      const client = this.$refs.client
      const myChart = echarts.init(client)
      myChart.setOption({
        title: {
          text: '顾客'
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '新客户', '老客户'],
            ['最近30天', 85, 93],
            ['最近7天', 73, 55],
            ['昨天', 65, 82],
            ['今天', 65, 82]
          ]
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }]
      })
    },
    test() {
      const test = this.$refs.test
      const myChart = echarts.init(test)
      myChart.setOption({
        title: {
          text: '商品信息'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: [0, 190, 101, 134, 90, 230, 210],
            smooth: false
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [0, 182, 191, 234, 290, 330, 310],
            smooth: false
          },
          {
            name: '视频广告',
            type: 'line',
            data: [0, 232, 201, 154, 190, 330, 410],
            smooth: false
          },
          {
            name: '直接访问',
            type: 'line',
            data: [0, 331, 301, 334, 390, 330, 320],
            smooth: false
          },
          {
            name: '搜索引擎',
            type: 'line',
            data: [0, 912, 901, 934, 1290, 1330, 1320],
            smooth: false
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../assets/css/colors.less');
.client,
.order,
.pay {
  height: 400px;
}
.total {
  margin-bottom: 50px;
  & > div {
    height: 400px;
  }
}
.box {
  background: @white;
  overflow: hidden;
  padding: 15px;
}
</style>
