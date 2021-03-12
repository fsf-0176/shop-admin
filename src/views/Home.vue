<template>
  <div class="home">
    <wrap>
      <div class="box">
        <el-col class="total">
          <div ref="test"></div>
        </el-col>
      </div>
    </wrap>
  </div>
</template>

<script>
import Wrap from '../components/Wrap'
import * as echarts from 'echarts/core'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  LegendComponent
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
  CanvasRenderer
])
export default {
  name: 'Home',
  components: { Wrap },
  created() {
    this.$nextTick(() => {
      const myChart = echarts.init(this.$refs.test)
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
            stack: '总量',
            data: [120, 1, 101, 134, 90, 230, 210],
            smooth: true
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 1882, 191, 234, 290, 330, 310],
            smooth: true
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 2132, 201, 154, 190, 330, 410],
            smooth: true
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 3321, 301, 334, 390, 330, 320],
            smooth: true
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 9312, 901, 934, 1290, 1330, 1320],
            smooth: true
          }
        ]
      })
    })
  }
}
</script>
<style lang="less" scoped>
@import url('../assets/css/colors.less');
.home {
  background: @white;
  height: 100%;
  .total {
    & > div {
      height: 300px;
    }
  }
  .box {
    background: @white;
    overflow: hidden;
    padding: 15px;
  }
}
</style>
