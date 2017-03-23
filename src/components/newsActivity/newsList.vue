<template>
<div class="newsList">
  <div class="nHeader">
    <h1>新闻资讯</h1>
    <div class="path"><span>您的位置:&nbsp</span><span>官网首页-</span><span>公告</span></div>
  </div>
  <ul class="menuList">
    <li v-for="(menuItem,index) in menuItems"><a :class="{'current': index==currentIndex}" @click="switchTab(index)">{{menuItem}}</a></li>
  </ul>
  <div class="itemList">
    <ul class="list" v-for="(item, listIndex) in newsListData" v-if="listIndex==currentIndex">
      <h1 v-if="item.length==0">暂无内容</h1>
      <li v-for="news in item"><a href="#">{{news.text}}</a><span>{{news.date}}</span></li>
      <button class="nextBtn" v-if="item.length>=15">下一页</button>
    </ul>
  </div>
</div>
</template>

<script >
  export default{
    data () {
      return {
        currentIndex: 0,
        listLength: 1,
        menuItems: ['最新', '新闻', '公告', '活动'],

        newsListData: []
      }
    },
    methods: {
      switchTab (index) {
        this.currentIndex = index
      }
    },
    mounted () {
      this.axios.get('/api/hotNews').then((res) => {
        res = res.data
        if(res.errno===1){
          this.newsListData.push(res.data)
        }
      })
      this.axios.get('/api/news').then((res) => {
        res = res.data
        if(res.errno===1){
          this.newsListData.push(res.data)
        }
      })
      this.axios.get('/api/notices').then((res) => {
        res = res.data
        if(res.errno===1){
          this.newsListData.push(res.data)
        }
      })
      this.axios.get('/api/activitys').then((res) => {
        res = res.data
        if(res.errno===1){
          this.newsListData.push(res.data)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .newsList{
    .nHeader{
      width: 100%;
      height: 100px;
      padding: 0 20px;
      box-sizing: border-box;
      background: #f5f5f5 url('http://game.gtimg.cn/images/dn/web201702/img/news_hdBg.png') top left no-repeat;
      h1{
        width: 140px;
        height: 100px;
        float: left;
        color: #828282;
        font-size: 35px;
        line-height: 100px;
      }
      .path{
        height: 100px;
        width: 230px;
        float: right;
        line-height: 100px;
        span{
          color: #989898;
          display: inline-block;
          font-size: 16px;
        }
      }
    }
    .menuList{
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #ededed;
      padding: 0 15px;
      text-align: center;
      background-color: #fff;
      box-sizing: border-box;
      li{
      display: inline-block;
      margin: 0 5px;
      a{
        color: #898989;
        font-size: 18px;
        -webkit-transition: color 300ms;
        transition: color 300ms;
        display: block;
        padding: 0 30px;
        line-height: 80px;
        height: 76px;
        border-bottom: 4px transparent solid;
        cursor: pointer;
      }
      &:hover a{
        border-bottom: 4px #829b35 solid;
        color: #000;
      }
      a.current{
        border-bottom: 4px #829b35 solid;
      }
      }
    }
    .itemList{
      min-height: 200px;
      background-color: #fff;
      h1{
        text-align: center;
        font-size: 38px;
        font-weight: bold;
        padding-top: 100px;
      }
      .list{
        padding: 20px 50px;
        margin-bottom: 50px;
        li{
          height: 40px;
          width: 100%;
          margin: 10px 0;

          a{
            display: inline-block;
            width: 500px;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: #3a3a3a;
            text-align: left;
          }
          span{
            float: right;
            color: #b4b4b4;
          }
        }
        .nextBtn{
          margin: 0 5px;
          display: inline-block;
          background: #f6f6f6;
          padding: 0 40px;
          height: 36px;
          line-height: 36px;
          border:0;
          cursor: pointer;
        }
      }
    }
  }
</style>
