<template>
  <div class="login">
    <div class="login_body">
      <div class="block">
        <el-avatar :size="100" :src="circleUrl"></el-avatar>
      </div>
      <div class="title">后台管理系统</div>
      <div class="input_suffix">
        <el-input v-model="username" placeholder="用户名"></el-input>
      </div>
      <div class="input_suffix">
        <el-input v-model="password" placeholder="密码"></el-input>
      </div>
      <el-button type="primary" class="btn" size="medium">登录</el-button>
    </div>
  </div>
</template>
<script>
// import { login } from '../../api'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      circleUrl: require('@/assets/logo.png')
    }
  },
  created() {
    const result = this.$store.dispatch('index/login', {
      username: 'admin',
      password: 'admin'
    })
    result.then((res) => {
      const { token, result } = res.data
      if (token) {
        localStorage.setItem('auth', 'Bearer ' + token)
      }
      if (result.id > 0) {
        alert('登录成功')
      }
    })
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  background: rgb(241, 241, 241);
  .login_body {
    padding: 30px;
    width: 100%;
    min-height: 300px;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    .block {
      text-align: center;
    }
    .title {
      padding: 30px;
      text-align: center;
    }
    .input_suffix {
      margin-bottom: 30px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
