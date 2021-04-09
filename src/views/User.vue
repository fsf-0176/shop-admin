<template>
  <div class="box">
    <div class="search">
      用户名称
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary">查询</el-button>
    </div>

    <el-table
      v-if="list.data"
      :data="list.data"
      height="calc(80% - 90px)"
      border
      style="width: 100%"
      stripe
    >
      <el-table-column prop="id" label="ID" width="65"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="65">
        <template slot-scope="scope">
          {{ scope.row.gender === 1 ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column prop="register_time" label="加入时间"> </el-table-column>
      <el-table-column prop="last_login_time" label="最近登录">
      </el-table-column>
      <el-table-column prop="delete" label="操作">
        <template slot-scope="scope">
          <el-button>编辑 {{ scope.row.id }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <pagination :list="list" action="index/users" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Pagination from '../components/Pagination.vue'
export default {
  components: { Pagination },
  name: 'Trolley',
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState('index', {
      list: (status) => status.users
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
