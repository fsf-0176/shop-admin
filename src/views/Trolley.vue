<template>
  <div class="box">
    <div class="search">
      商品名称
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary">查询</el-button>
    </div>

    <el-table :data="list.data">
      <el-table-column prop="id" label="ID" width="65"> </el-table-column>
      <el-table-column prop="user_id" label="用户ID" width="65">
      </el-table-column>
      <el-table-column prop="nickname" label="用户昵称">
        <template slot-scope="scope">
          {{ scope.row.nickname ? scope.row.nickname : '已删除' }}
        </template>
      </el-table-column>
      <el-table-column prop="product_id" label="商品ID" width="65">
      </el-table-column>
      <el-table-column prop="list_pic_url" label="图片" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.list_pic_url" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column prop="goods_specifition_name_value" label="型号">
      </el-table-column>
      <el-table-column prop="number" label="数量" width="90"> </el-table-column>
      <el-table-column prop="retail_price" label="成交价" width="120">
      </el-table-column>
      <el-table-column prop="add_time" label="加入时间" width="200">
      </el-table-column>
      <el-table-column prop="delete" label="是否删除" width="100">
        <template slot-scope="scope">
          {{ scope.row.is_delete ? '已删' : '否' }}
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.count"
        @current-change="change"
        @size-change="sizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Trolley',
  data() {
    return {
      tableData: [],
      input: '',
      cur: 1,
      size: 10
    }
  },
  methods: {
    pushPath(path, query) {
      let router = path
      for (const key in query) {
        if (router === path) {
          router += '?' + key + '=' + query[key]
        } else {
          router += '&' + key + '=' + query[key]
        }
      }
      return router
    },
    change(cur) {
      this.cur = cur
      this.$store.dispatch('index/trolley', {
        page: cur,
        size: this.size,
        name: ''
      })
    },
    sizeChange(size) {
      this.size = size
      this.$store.dispatch('index/trolley', {
        page: this.cur,
        size: size,
        name: ''
      })
    }
  },
  created() {
    console.log(this.$route)
    const { path, query } = this.$route
    this.pushPath(path, query)
    this.$store.dispatch('index/trolley', { name: '' })
  },
  computed: {
    ...mapState('index', {
      list: (statte) => statte.trolley
    })
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/colors.less');
.box {
  padding: 15px;
  height: 100%;
  background: @white;
  .search {
    padding-bottom: 15px;
    .el-input {
      width: 250px;
      margin: 0 15px;
    }
  }
  img {
    max-width: 100%;
    width: 70px;
  }
  .page {
    text-align: right;
    padding: 20px 0 0;
  }
}
</style>
