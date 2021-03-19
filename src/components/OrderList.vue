<template>
  <div class="orderList">
    <div class="head">
      <div class="time">
        <span>交易关闭</span>
        <span> 下单时间：2021-3-19 23:18:50</span>
        <span> 订单号：1345165618919819</span>
      </div>
      <div class="total">
        <span>共4件商品</span>
        <span>当前合计256元（含运费0元）</span>
      </div>
    </div>
    <div class="content">
      <div class="list">
        <div class="box">
          <div class="picture">
            <img
              src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
            />
            懒人椅
          </div>
          <div class="number">
            数量:
            <span>1</span>
          </div>
        </div>
        <div class="box">
          <div class="picture">
            <img
              src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
            />
            懒人椅
          </div>
          <div class="number">
            数量:
            <span>1</span>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="pic">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="name">用户名</span>
        </div>
        <p>姓名：大侠</p>
        <p>手机：13888888888</p>
      </div>
      <div class="address">
        <p>名称 13888888888</p>
        <small>天津市天津市和平区测试地址</small>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>
      <div class="detail">
        <a href="#">查看详情</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
<style lang="less" scoped>
.orderList {
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-top: 15px ;
  .detail{
    width: 15%;
    a{
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;
      color: #409eff;
      font-size: 12px;
    }
  }
  .address {
    padding: 15px;
    border-right: 1px solid #e7e7e7;
    width: 30%;
    p{
      margin: 15px 0;
    }
    small{
      display: block;
      margin-bottom: 15px;
    }
  }
  .content {
    font-size: 14px;
    display: flex;
    .user {
      padding: 15px;
      border-right: 1px solid #e7e7e7;
      width: 25%;
      .pic {
        display: flex;
        align-items: center;
        margin: 10px 0;
        .name {
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
    .list {
      width: 30%;
      padding: 10px;
      border-right: 1px solid#e7e7e7;
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid #e7e7e7;
        .picture {
          display: flex;
          align-items: center;
          img {
            width: 50px;
          }
        }
        .number {
          width: 30%;
          span {
            color: #ff3456;
          }
        }
      }
      .box:last-child {
        border-bottom: none;
      }
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    background: rgba(236, 245, 255, 0.51);
    padding: 10px;
    .time,
    .total {
      font-size: 13px;
      span {
        display: inline-block;
        padding-right: 15px;
      }
    }
  }
}
</style>
