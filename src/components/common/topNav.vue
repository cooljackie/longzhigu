<template>
  <div class="topNav">
    <div class="logoLeft">
    <div class="imgWrapper"><img src="http://game.gtimg.cn/images/dn/web201702/img/logo.png" alt="龙之谷手游"></div>
      <div class="textWrapper">
      <a href="#">龙之谷手游</a>
      <span>原汁原味3D动作冒险手游</span>
      </div>
    </div>
    <ul class="menu">
        <li v-for="item in navItem"><a href="#">{{item}}</a></li>
    </ul>
    <div class="gzh">
      <i class="wechat" @mouseover="weiShow" @mouseout="weiHidden"></i>
      <i class="mqq" @mouseover="qqShow" @mouseout="qqHidden"></i>
      <div class="qrcode" :class="{'show':weichatShow}">
        <img src="http://game.gtimg.cn/images/dn/web201702/img/wx_qrcode.png">
        <p class="tx">扫一扫 加入微信公众号</p>
      </div>
      <div class="qrcode" :class="{'show':mqqShow}">
        <img src="http://game.gtimg.cn/images/dn/web201702/img/sq_qrcode.png">
        <p class="tx">扫一扫 加入兴趣部落</p>
      </div>
    </div>
  </div>
</template>

<script >
  export default{
    data () {
      return {
        weichatShow: false,
        mqqShow: false,
        navItem: ['首页', '新闻活动', '冒险家学院','冒险家乐园', '玩家论坛', 'CD-KEY兑换']
      }
    },
    methods: {
      weiShow (){
        this.weichatShow = true
      },
      weiHidden (){
        this.weichatShow = false
      },
      qqShow (){
        this.mqqShow = true
      },
      qqHidden (){
        this.mqqShow = false
      }
    }
  }
</script>

<style scoped lang='less'>
  .topNav{
    margin: 0 auto;
    position: relative;
    top: 0;
    width: 1200px;
    height: 104px;
    .logoLeft{
      position: absolute;
      width: 300px;
      top: 30px;
      float: left;
      margin-right: 40px;
      vertical-align: top;
      display: flex;
      .imgWrapper{
        flex: 2;
      }
      .textWrapper{
        flex: 3;
        a{
          display: block;
          margin: 10px 0;
          font-size: 16px;
          text-align: left;
          color: #fff;
        }
        span{
          display: block;
          font-size: 12px;
          color: #9d9d9d;
          text-align: left;
        }
      }
    }
       .menu{
        height: 92px;
        line-height: 92px;
        width: 770px;
        position: absolute;
        right: 130px;
        li{
          display: inline-block;
          margin-right: 50px;
          a{
            transition: color 300ms;
            font-size: 18px;
            position: relative;
            display: block;
            height: 88px;
            line-height: 102px;
            color: #c4c4c4;
            border-bottom: 4px transparent solid;
          }
          &:hover a{
            border-bottom: 4px #829b35 solid;
            color: #fff;
          }
        }
      }
      .gzh{
        position: absolute;
        top: 40px;
        right: 30px;
        .wechat{
          margin-right: 16px;
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 24px;
          background-image: url('http://game.gtimg.cn/images/dn/web201702/img/i_wechat.png');
        }
        .mqq{
          display: inline-block;
          vertical-align: middle;
          width: 20px;
          height: 23px;
          background-image: url('http://game.gtimg.cn/images/dn/web201702/img/i_mqq.png');
        }
        .qrcode{
          display: none;
          position: absolute;
          right: -60px;
          font-size: 0;
          img{
            width: 180px;
            height: 180px;
            margin-top:28px;
          }
          p{
            background: #fff;
            padding: 6px 0;
            margin:0;
            font-size: 14px;
          }
        }
        .show{
          display: block;
        }
      }
  }
</style>
