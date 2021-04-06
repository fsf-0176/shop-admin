<template>
  <div class="box">
    <div class="search">
      用户名称
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary">查询</el-button>
    </div>

    <el-table
      v-if="users"
      :data="users"
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
          {{scope.row.gender === 1 ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column prop="register_time" label="加入时间"> </el-table-column>
      <el-table-column prop="last_login_time" label="最近登录"> </el-table-column>
      <el-table-column prop="delete" label="操作">
        <template slot-scope="scope">
          <el-button>编辑 {{ scope.row.id }}</el-button>
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Trolley',
  data() {
    return {
      tableData: [],
      input: '',
      users: []
    }
  },
  computed: {
    ...mapState('index', {
      list: (status) => status.users
    })
  },
  methods: {
    ...mapMutations('index', {
      setUsers: 'users'
    })
  },
  created() {
    const { query } = this.$route
    const cache = localStorage.getItem(`users-p${query.page || 1}`)
    if (this.users.length === 0) {
      if (!cache) {
        this.$store.dispatch('index/users').then((res) => {
          localStorage.setItem('users-p1', JSON.stringify(res.data))
          this.users = this.list
        })
      } else {
        // 直接从缓存获取，不需要存store
        this.users = JSON.parse(cache)
      }
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
