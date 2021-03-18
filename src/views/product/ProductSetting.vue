<template>
  <div class="productSetting" @tab-click="handleClick">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <el-button class="btn" type="primary">添加分类</el-button>
        <el-table :data="userData" border style="width: 100%">
          <el-table-column prop="type" label="分类名称"> </el-table-column>
          <el-table-column prop="icon" label="图标显示" width="80">
            <template slot-scope="pro">
              <el-switch v-model="pro.row.icon"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="home" label="首页显示" width="80">
            <template slot-scope="pro">
              <el-switch v-model="pro.row.home"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="all" label="全部产品页面显示" width="180">
            <template slot-scope="pro">
              <el-switch v-model="pro.row.all"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="order" label="排序" sortable width="100">
            <template slot-scope="pro">
              <el-input v-model="pro.row.order"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="250">
            <template>
              <el-button>编辑</el-button>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">
        <el-button class="btn" type="primary">添加型号</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="100"> </el-table-column>
          <el-table-column prop="modeName" label="型号名"> </el-table-column>
          <el-table-column prop="order" label="排序" width="180">
          </el-table-column>
          <el-table-column label="操作" width="280">
            <template>
              <el-button>编辑</el-button>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="less" scoped>
.productSetting {
  padding: 15px;
  background: white;
}
.btn{
  margin-bottom: 15px;
}
</style>
<script>
export default {
  name: 'ProductSetting',
  data() {
    return {
      activeName: 'first',
      tableData: [],
      userData: []
    }
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.userData.push({
        type: i + 1,
        icon: true,
        home: true,
        all: true,
        order: i + 1
      })
    }
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        id: i + 1,
        modeName: '规格',
        order: 1
      })
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
