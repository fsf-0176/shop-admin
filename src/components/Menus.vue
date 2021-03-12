<template>
  <el-col class="menus" :xs="8" :sm="6" :md="4" :lg="5" :xl="3">
    <ul>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
          <i class="el-icon-arrow-right right"></i>
        </a>
      </li>
      <li class="active">
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
          <i class="el-icon-arrow-right right active"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="el-icon-s-home"></i>
          后台主页
        </a>
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
  & > ul {
    & > li {
      a {
        i {
          display: inline-block;
          margin-right: 10px;
        }
        i.right {
          float: right;
          line-height: 60px;
          transition: 1s;
          margin-right: 0;
        }
        display: block;
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
      }
    }
    .status {
      background: @menuHover;
      a {
        color: @menus;
        i {
          color: @menus;
        }
      }
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
