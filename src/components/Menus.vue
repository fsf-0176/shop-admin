<template>
  <el-col ref="parent" class="menus" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
    <ul ref="menus">
      <li>
        <router-link active-class="active" exact to="/">
          <i class="el-icon-s-home"></i>
          后台主页
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/order">
          <i class="el-icon-s-home"></i>
          订单列表
        </router-link>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          商品管理
          <i class="el-icon-arrow-right right active"></i>
        </a>
        <ol>
          <li><router-link active-class="active" to="/product-list"> 商品列表</router-link></li>
          <li><router-link active-class="active" to="/product-setting"> 商品设置</router-link></li>
        </ol>
      </li>
      <li>
        <router-link active-class="active" to="/trolley">
          <i class="el-icon-s-home"></i>
          购物车
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/user">
          <i class="el-icon-s-home"></i>
          用户列表
        </router-link>
      </li>
      <li>
        <a href="#">
          <i class="el-icon-s-home"></i>
          店铺设置
          <i class="el-icon-arrow-right right"></i>
        </a>
        <ol>
          <router-link active-class="active" to="/show-setting" tag="li">
            <a href="#">显示设置</a>
          </router-link>
          <router-link active-class="active" to="/ad-setting" tag="li">
            <a href="#">广告设置</a>
          </router-link>
          <router-link active-class="active" to="/notice-setting" tag="li">
            <a href="#">公告管理</a>
          </router-link>
          <router-link active-class="active" to="/admin-setting" tag="li">
            <a href="#">管理员</a>
          </router-link>
        </ol>
      </li>
      <li>
        <router-link to="/login">
          <i class="el-icon-switch-button"></i>
          退出登录
        </router-link>
      </li>
    </ul>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      status: 0
    }
  },
  mounted() {
    const ul = this.$refs.menus.children
    ul.forEach((element) => {
      element.onclick = () => {
        ul.forEach((els) => {
          els.classList.remove('active')
        })
        element.classList.add('active')
      }
    })
    // const parent = this.$refs.parent
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/colors.less');
.menus {
  height: calc(100vh - 60px);
  background: @menus;
  position: fixed;
  top: 60px;
  left: 0;
  overflow: hidden;
  .router-link-exact-active.router-link-active {
    color: #409eff;
    i {
      color: #409eff;
    }
  }
  .router-link-exact-active::before {
    color: #409eff !important;
  }
  & > ul {
    & > li {
      position: relative;
      a {
        color: #303133;
        i {
          display: inline-block;
          margin-right: 10px;
          color: #909399;
        }
        i.right {
          float: right;
          line-height: 60px;
          transition: 1s;
          margin-right: 0;
          position: absolute;
          right: 10px;
          top: 0;
        }
        display: block;
        padding: 0 20px;
        line-height: 60px;
      }
      & > ol {
        padding-left: 25px;
        height: 0;
        overflow: hidden;
        li {
          position: relative;
          padding-left: 40px;
          color: #303133;
          line-height: 40px;
          a {
            padding: 0;
          }
        }
        li::before {
          content: '●';
          color: #909399;
          font-size: 25px;
          position: absolute;
          left: 15px;
          top: 50%;
          line-height: 0;
          transform: translateY(-50%);
        }
      }
    }

    & > li.active {
      ol {
        height: 100%;
      }
      i.right {
        transform: rotate(90deg);
      }
    }
    .status {
      background: @menuHover;
      // a {
      //   color: @menus;
      //   i {
      //     color: @menus;
      //   }
      // }
    }
    ol > li:hover {
      .status();
    }
    & > li > a.active {
      .status();
    }
    & > li > a:hover {
      .status();
    }
  }
}
</style>
