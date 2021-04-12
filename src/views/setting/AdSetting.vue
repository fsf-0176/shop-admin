<template>
  <div class="adSetting">
    <el-table :data="list.data" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="65"> </el-table-column>
      <el-table-column prop="picture" label="广告">
        <template slot-scope="scope">
          <img class="adImg" :src="scope.row.image_url" />
        </template>
      </el-table-column>
      <el-table-column prop="goods_id" label="关联商品" width="100">
      </el-table-column>
      <el-table-column prop="end_time" label="结束时间"> </el-table-column>
      <el-table-column label="排序" sortable width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort_order"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="enabled" label="状态" width="100">
        <template slot-scope="scope">
          {{ scope.row.enabled ? '启用' : '关闭' }}
        </template>
      </el-table-column>
      <el-table-column label="开启状态" width="100">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enabled"
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
     <pagination :list="list" action="index/ad" />
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
      list: (state) => state.ad
    })
  }
}
</script>
<style lang="less">
.adSetting {
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
