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
      <qrcode></qrcode>
    </div>
  </div>
</template>
<script >
import slide from '../common/slide'
import qrcode from '../common/qrcode'
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
      slide, qrcode
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
      background-color: rgb(247, 243, 240);
    }
  }
</style>
