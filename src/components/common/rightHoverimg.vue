<template>
  <ul class="imgHover">
    <li v-for="item in items">
      <i class="i bg"><img :src="item.bgImgUrl"></i>
      <p class="tx">
          <strong>{{item.title}}</strong>
          <span class="info">{{item.sub}}</span>
          <i class="i line"></i>
          <span class="more">了解更多</span>
      </p>
    </li>
  </ul>
</template>

<script >
  export default{
    data () {
      return {
        items: [{title:'点亮服务器', sub: '为手游点亮记忆中的服务器', bgImgUrl:'http://game.gtimg.cn/images/dn/web201702/img/news_expressway_0.png'},
                {title:'冒险学院', sub: '龙之谷手游最强攻略站', bgImgUrl:'http://game.gtimg.cn/images/dn/web201702/img/news_expressway_1.png'},
                {title:'冒险家乐园', sub: '龙之谷手游同人站', bgImgUrl:'http://game.gtimg.cn/images/dn/web201702/img/news_expressway_2.png'}]
      }
    }
  }
</script>

<style scoped lang="less">
  .imgHover{
    li{
      width: 409px;
      height: 150px;
      background: #eaeaea;
      border-bottom: 1px solid #d8d5d3;
      position: relative;
      .bg{
        right: 10px;
        top: 0px;
        width: 194px;
        height: 155px;
        webkit-transform: scale(0.9, 0.9);
        transform: scale(0.9, 0.9);
        -webkit-transition: all 1500ms;
        transition: all 1500ms;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        z-index: 10;
        position: absolute;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .tx{
        -webkit-transition: all 500ms;
        transition: all 500ms;
        height: 65px;
        position: absolute;
        display: block;
        bottom: 40px;
        left: 25px;
        z-index: 100;
        overflow: hidden;
        text-align: left;
        strong{
            line-height: normal;
            display: block;
            font-size: 35px;
            color: #3a3a3a;
        }
        .info{
          margin-bottom: 8px;
          line-height: normal;
          display: block;
          color: #a2a2a2;
          font-size: 16px;
        }
        .line{
          -webkit-transition: all 500ms;
          transition: all 500ms;
          height: 1px;
          line-height: 1px;
          font-size: 0;
          width: 0;
          background: #a2a2a2;
          display: block;
          background-repeat: no-repeat;
          text-indent: -999em;
        }
        .more{
          font-size: 12px;
          color: #a2a2a2;
        }
      }
      &:hover .bg{
         webkit-transform: scale(1, 1);
        transform: scale(1, 1);
        -webkit-transition: all 1500ms;
        transition: all 1500ms;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
      }
      &:hover .tx{
        height: 90px;
      }
      &:hover .line{
        width: 100px;
      }
    }
  }
</style>
