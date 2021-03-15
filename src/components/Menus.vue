<template>
  <el-col class="menus" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
    <ul>
      <li>
        <router-link to="/">
          <i class="el-icon-s-home"></i>
          后台主页
        </router-link>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          订单列表
          <i class="el-icon-arrow-right right active"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          商品管理
        </a>
      </li>
      <li>
        <router-link to="/trolley">
          <i class="el-icon-s-home"></i>
          购物车
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="el-icon-s-home"></i>
          用户列表
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <i class="el-icon-s-home"></i>
          店铺设置
          <ol>
            <router-link to="/show-setting" tag="li"> 显示设置 </router-link>
            <router-link to="/show-settinge" tag="li"> 广告设置 </router-link>
            <router-link to="/show-setting3" tag="li"> 运费模板 </router-link>
            <router-link to="/show-setting2" tag="li"> 快递设置 </router-link>
            <router-link to="/show-setting1" tag="li"> 管理员 </router-link>
          </ol>
          <i class="el-icon-arrow-right right"></i>
        </router-link>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-switch-button"></i>
          退出登录
        </a>
      </li>
    </ul>
  </el-col>
</template>

<style lang="less" scoped>
@import url('../assets/css/colors.less');
.menus {
  height: calc(100% - 60px);
  background: @menus;
  position: fixed;
  top: 60px;
  left: 0;
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
        & > ol {
          li {
            position: relative;
            padding-left: 40px;
            color: #303133;
            line-height: 40px;
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
    & > li.active {
      .status();
    }
    & > li:hover {
      .status();
    }
  }
}
</style>
