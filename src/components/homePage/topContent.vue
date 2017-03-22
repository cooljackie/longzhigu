<template>
  <div class="topContent">
    <div class="leftSlide">
      <slide></slide>
    </div>
    <div class="centerNews">
      <div class="inn">
        <div class="hd">
          <h2>{{centerNewsData.title}}</h2>
          <span class="more"></span>
        </div>
        <div class="top">
          <span class="time">{{centerNewsData.time}}</span>
          <h3>{{centerNewsData.sub}}</h3>
          <p class="summary">{{centerNewsData.desc}}</p>
        </div>
        <ul class="list">
          <li v-for="news in centerNewsData.listNews"><a href="#">{{news}}</a></li>
        </ul>
      </div>
    </div>
    <div class="rightCode">
      <div class="qrcode">
        <div class="codeWrapper">
          <img src="http://game.gtimg.cn/images/dn/web201702/img/qrcode.png" >
        </div>
        <i class="bg"></i>
        <i class="tishi"></i>
      </div>
      <ul class="download">
        <li class="ios">
          <i></i>IOS下载
        </li>
        <li class="android">
          <i></i>Android下载
        </li>
      </ul>
    </div>
  </div>
</template>
<script >
import slide from '../common/slide'
  export default{
    data () {
      return {
        centerNewsData: {
          title: '新闻资讯',
          time: '2017-03-18 09:25:03',
          sub: '再战地狱犬！《龙之谷手游》无尽狩猎副本限时开启',
          desc: '3月18日12点，《龙之谷手游》将开启无尽狩猎副本。副本分为致命狩猎和急速狩猎两大关卡，玩家进入副本后，将拥有无限的力量……',
          listNews: ['· 《龙之谷手游》不限号新手FAQ','· 【公告】3月21日不停服维护更新公告','· 【公告】关于3月20日封停使用第三方代充帐号的说明']
        }
      }
    },
    components: {
      slide
    }
  }
</script>
<style scoped lang="less">
  .topContent{
    margin: 0 auto;
    width: 1226px;
    height: 440px;
    display: flex;
    .leftSlide{
      flex: 1;
      height: 440px;
      overflow: hidden;
    }
    .centerNews{
      flex: 1;
      height: 440px;
      background-color: #fff;
      .inn{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px 25px;
        .hd{
          margin-bottom: 25px;
          position: relative;
          h2{
            color: #3a3a3a;
            font-size: 17px;
            text-align: left;
          }
          .more{
            display: inline-block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            right: 0;
            background: url('http://game.gtimg.cn/images/dn/web201702/img/more.png') center no-repeat;
            cursor: pointer;
          }
        }
        .top{
          padding-bottom: 35px;
          overflow: hidden;
          height: 190px;
          margin-bottom: 35px;
          border-bottom: 2px solid #e8e8e8;
          text-align: left;
          line-height: 1.6em;
          .time{
            display: block;
            padding-bottom: 20px;
            color: #a3a3a3;
          }
          h3{
            line-height: normal;
            margin-bottom: 10px;
            font-size: 26px;
            color: #3a3a3a;
          }
          p{
            font-size: 16px;
            color: #ab9683;
          }
        }
        .list{
          color: #3a3a3a;
          line-height: 1.6em;
          font-size: 14px;
          li{
            text-align: left;
            margin: 6px 0;
            a{
              color: #8d8d8d;
            }
          }
        }
      }
    }
    .rightCode{
      flex: 1;
      height: 440px;
      position: relative;
      .qrcode{
        position: absolute;
        height: 364px;
        top: 0;
        width: 100%;
        .codeWrapper{
        margin: 15px 0 0 15px;
        width: 257px;
        height: 257px;
        position: relative;
        background: #fff;
        border: 3px solid #342e29;
        img{
          position: absolute;
          width: 227px;
          height: 227px;
          margin: -113px 0 0 -113px;
          top: 50%;
          left: 50%;
        }
      }
      }
      .bg{
        width: 217px;
        height: 410px;
        background-image: url('http://game.gtimg.cn/images/dn/web201702/img/download_bg.png');
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 100;
      }
      .tishi{
        position: absolute;
        left: 22px;
        bottom: 10px;
        width: 125px;
        height: 57px;
        background-image: url('http://game.gtimg.cn/images/dn/web201702/img/i_tishi.png');
      }
      .download{
        width: 393px;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 62px;
        background: #829b35;
        padding: 7px 8px;
        .ios,.android{
          float: left;
          transition: background 300ms;
          position: relative;
          text-indent: 26px;
          font-size: 18px;
          color: #fff;
          text-align: center;
          line-height: 62px;
          height: 62px;
          width: 190px;
          background: #95b13e;
          display: block;
          cursor: pointer;
          &:hover{
            background: #a2c33a;
          }
        }
         .ios{
          margin-right: 12px;
          i{
            left: 50%;
            margin-left: -45px;
            top: 15px;
            position: absolute;
            width: 22px;
            height: 28px;
            background-image: url('http://game.gtimg.cn/images/dn/web201702/img/i_ios.png');
          }
        }
        .android{
          i{
            left: 50%;
            margin-left: -65px;
            top: 17px;
            position: absolute;
            width: 24px;
            height: 26px;
            background-image: url('http://game.gtimg.cn/images/dn/web201702/img/i_android.png');
          }
        }
      }
    }
  }
</style>
