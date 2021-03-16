<template>
  <div class="notice">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column prop="endTime" label="结束时间" width="180"> </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          {{ scope.row.status ? '启用中' : '已关闭' }}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-button>编辑{{scope.row.id}}</el-button>
          <el-button type="danger">删除</el-button>
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
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        id: i + 1,
        content: '如果可以，请在github点个star，谢谢',
        endTime: '2022-12-02 23:59:59',
        status: 1
      })
    }
  }
}
</script>
<style lang="less">
.notice{
  padding: 15px;
  background: white;
  .page {
    text-align: right;
    padding: 20px 0 0;
  }
}
</style>
