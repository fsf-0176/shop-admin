<template>
  <div class="adSetting">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="65"> </el-table-column>
      <el-table-column prop="picture" label="广告">
        <template slot-scope="scope">
          <img class="adImg" :src="scope.row.picture" />
        </template>
      </el-table-column>
      <el-table-column prop="goodsid" label="关联商品" width="100">
      </el-table-column>
      <el-table-column prop="endTime" label="结束时间"> </el-table-column>
      <el-table-column label="排序" sortable width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.order"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template slot-scope="scope">
          {{ scope.row.status ? '启用' : '关闭' }}
        </template>
      </el-table-column>
      <el-table-column label="开启状态" width="100">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.start"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="endTime" label="操作">
        <template slot-scope="scope">
          <el-button>编辑{{ scope.row.id }}</el-button>
          <el-button type="danger">删除{{ scope.row.id }}</el-button>
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
        picture:
          'http://yanxuan.nosdn.127.net/ed50cbf7fab10b35f676e2451e112130.jpg',
        goodsid: i + Math.floor(Math.random() * 1024000),
        endTime: '2030-01-16 15:50:12',
        order: i,
        status: 0,
        start: true
      })
    }
  }
}
</script>
<style lang="less">
.adSetting{
  padding: 15px;
  background: white;
  .page {
    text-align: right;
    padding: 20px 0 0;
  }
}
.adImg {
  width: 120px;
  height: 50px;
}
</style>
