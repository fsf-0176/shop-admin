<template>
  <div class="notice">
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="username" label="会员名称"> </el-table-column>
      <el-table-column prop="last_login_time" label="结束时间" width="200">
      </el-table-column>
      <el-table-column prop="last_login_ip" label="登录IP" width="200"></el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-button @click="scope.row.id" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      tableData: []
    }
  },
  computed: {
    ...mapState('index', {
      list: (state) => state.supers
    })
  },
  created() {
    this.$store.dispatch('index/supers')
  }
}
</script>
<style lang="less">
.notice {
  padding: 15px;
  background: white;
  .page {
    text-align: right;
    padding: 20px 0 0;
  }
}
</style>
