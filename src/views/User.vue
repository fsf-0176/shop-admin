<template>
  <div class="box">
    <div class="search">
      用户名称
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary">查询</el-button>
    </div>

    <el-table
      :data="tableData"
      height="calc(80% - 90px)"
      border
      style="width: 100%"
      stripe
    >
      <el-table-column prop="id" label="ID" width="65"> </el-table-column>
      <el-table-column prop="picture" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.picture" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称"> </el-table-column>
      <el-table-column prop="pid" label="性别"> </el-table-column>
      <el-table-column prop="date" label="加入时间"> </el-table-column>
      <el-table-column prop="date" label="最近登录"> </el-table-column>
      <el-table-column prop="delete" label="操作">
        <template slot-scope="scope">
          <el-button>编辑 {{scope.row.id}}</el-button>
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
  name: 'Trolley',
  data() {
    return {
      tableData: [],
      input: ''
    }
  },
  created() {
    const img =
      'http://yanxuan.nosdn.127.net/03c73e1f1ce1d2365e83b3230e507030.png'
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        id: i + 1,
        uid: i + 1,
        pid: i + 1,
        nickname: '名字' + 1,
        picture: img,
        name: '房型封闭式凉感条纹宠物窝',
        model: '1米*1米',
        number: 1,
        money: 89.9,
        date: '2021-03-13 15:29:14',
        delete: i % 2
      })
    }
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
