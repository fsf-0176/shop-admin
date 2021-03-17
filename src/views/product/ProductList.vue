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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-table :data="props.row.child" style="width: 100%">
                <el-table-column
                  prop="cid"
                  label="id"
                  width="80"
                ></el-table-column>
                <el-table-column prop="sku" label="商品SKU" width="180"></el-table-column>
                <el-table-column prop="sku" label="快递单上的简称"></el-table-column>
                <el-table-column prop="sku" label="型号/规格" width="180"></el-table-column>
                <el-table-column prop="sku" label="成本（元）" width="110"></el-table-column>
                <el-table-column prop="sku" label="零售（元）" width="110"></el-table-column>
                <el-table-column prop="sku" label="重量（KG）" width="110"></el-table-column>
                <el-table-column prop="sku" label="库存" width="100"></el-table-column>
                <el-table-column prop="sku" label="操作" width="180">
                  <template slot-scope="p">
                    <el-button type="primary">修改{{p.row.cid}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="ID" prop="id" width="80"> </el-table-column>
          <el-table-column label="商品图片" width="100">
            <template slot-scope="props">
              <img :src="props.row.picture" />
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="shopName"> </el-table-column>
          <el-table-column label="排序" prop="order" sortable width="80">
            <template slot-scope="props">
              <el-input v-model="props.row.order"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="销量" sortable prop="sales" width="100">
          </el-table-column>
          <el-table-column label="库存" sortable prop="inventory" width="100">
          </el-table-column>
          <el-table-column label="首页显示" width="100">
            <template slot-scope="props">
              <el-switch v-model="props.row.homeShow"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="上架" width="100">
            <template slot-scope="props">
              <el-switch v-model="props.row.putaway"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template>
              <el-button>编辑</el-button>
              <el-button type="danger" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">配置管理1</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理1</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"
        >定时任务补偿1</el-tab-pane
      >
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      input: '',
      tableData: []
    }
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        id: Math.floor(Math.random() * 1000000) + i,
        picture:
          'http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png',
        shopName: '支付测试兼打赏',
        order: 1,
        sales: 1132,
        inventory: 12345,
        homeShow: Math.floor(Math.random() * 1000) % 2 === 0,
        putaway: true,
        child: [
          {
            cid: Math.floor(Math.random() * 1000),
            sku: '12315',
            expressShort: '懒人椅',
            mode: '高尚的',
            cost: 2,
            retail: 50,
            weight: 2,
            cInventory: 210
          },
          {
            cid: Math.floor(Math.random() * 1000),
            sku: '12315',
            expressShort: '懒人椅',
            mode: '高尚的',
            cost: 2,
            retail: 50,
            weight: 2,
            cInventory: 210
          }
        ]
      })
    }
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
