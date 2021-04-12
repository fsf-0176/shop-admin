<template>
  <div class="notice">
    <el-table :data="list.data" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="username" label="会员名称"> </el-table-column>
      <el-table-column prop="last_login_time" label="结束时间" width="200">
      </el-table-column>
      <el-table-column
        prop="last_login_ip"
        label="登录IP"
        width="200"
      ></el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-button @click="scope.row.id">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <pagination :list="list" action="index/supers" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '../../components/Pagination.vue'
export default {
  components: { Pagination },
  computed: {
    ...mapState('index', {
      list: (state) => state.supers
    })
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
