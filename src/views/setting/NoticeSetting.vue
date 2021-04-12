<template>
  <div class="notice">
    <el-table :data="list.data" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column prop="end_time" label="结束时间" width="180">
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          {{ scope.row.is_delete ? '启用中' : '已关闭' }}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-button @click="scope.row.id">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
     <pagination :list="list" action="index/notice" />
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
      list: (state) => state.notice
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
