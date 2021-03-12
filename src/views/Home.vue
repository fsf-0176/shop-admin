<template>
  <div class="home">
    <wrap>
      <div ref="test" style="width: 100%; height: 800px"></div>
    </wrap>
  </div>
</template>

<script>
import Wrap from '../components/Wrap'
import * as echarts from 'echarts/core'
import { BarChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  PieChart,
  CanvasRenderer
])
export default {
  name: 'Home',
  components: { Wrap },
  created() {
    this.$nextTick(() => {
      const myChart = echarts.init(this.$refs.test)
      myChart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      })
    })
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
