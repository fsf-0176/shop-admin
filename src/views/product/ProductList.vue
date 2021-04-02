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
      <el-tab-pane label="全部商品" name="first">
        <p-list :tableData="list" />
      </el-tab-pane>
      <el-tab-pane label="出售中" name="second">
        <p-list :tableData="list" />
      </el-tab-pane>
      <el-tab-pane label="已售完" name="third">
        <p-list :tableData="list" />
      </el-tab-pane>
      <el-tab-pane label="已下架" name="fourth">
        <p-list :tableData="list" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PList from '../../components/PList.vue'
export default {
  components: { PList },
  data() {
    return {
      activeName: 'first',
      input: '',
      tableData: []
    }
  },
  computed: {
    ...mapState('index', {
      list: (state) => state.goods
    })
  },
  created() {
    this.$store.dispatch('index/goods', { page: 1, name: '' }).then((res) => {
      console.log(res)
    })
  },
  methods: {
    handleClick(tab, event) {}
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
