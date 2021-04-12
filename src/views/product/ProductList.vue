<template>
  <div class="productList">
    <div class="order">
      <el-button type="primary" plain>按销量排序</el-button>
      <el-button type="primary" plain>按售价排序</el-button>
      <el-button type="primary" plain>按库存排序</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <div class="search">
        商品名称
        <el-input placeholder="请输入内容" class="" v-model="input" clearable>
        </el-input>
        <el-button type="primary">查询</el-button>
        <el-button>清空</el-button>
      </div>
      <el-tab-pane label="全部商品" name="goods">
        <p-list :tableData="list.data" />
      </el-tab-pane>
      <el-tab-pane label="出售中" name="onsale">
        <p-list :tableData="list.data" />
      </el-tab-pane>
      <el-tab-pane label="已售完" name="out">
        <p-list :tableData="list.data" />
      </el-tab-pane>
      <el-tab-pane label="已下架" name="drop">
        <p-list :tableData="list.data" />
      </el-tab-pane>
    </el-tabs>
    <pagination :list="list" action="index/goods" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Pagination from '../../components/Pagination.vue'
import PList from '../../components/PList.vue'
export default {
  components: { PList, Pagination },
  data() {
    return {
      activeName: 'goods',
      input: '',
      tableData: []
    }
  },
  computed: {
    ...mapState('index', {
      list: (state) => state.goods
    })
  },
  created() {},
  methods: {
    handleClick(tab) {
      const { name } = tab
      this.$store.dispatch(`index/${name}`).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style>
.productList .order .el-button--primary span {
  color: #409eff;
}
.productList .search .el-input {
  width: 250px;
  margin: 0 15px;
}
img {
  max-width: 100%;
}
</style>
<style lang="less" scoped>
.productList {
  padding: 15px;
  background: white;
  .order {
    margin-bottom: 15px;
  }
  .search {
    margin-bottom: 15px;
  }
  img {
    max-width: 60px;
  }
}
</style>
