<template>
  <div class="adventurer bounceInUp animated">
    <div class="box-title">
        <span class="box-title-text left">冒险家乐园</span>
        <span class="box-title-text right">+MORE</span>
      </div>
    <ul class="menuTab">
      <li v-for="(item,index) in adv" :class="{'current': index==current}" @mouseover="tabSwitch(index)"><a href="#">{{item.menuName}}</a></li>
    </ul>
    <div class="advContent">
      <ul class="contentList" v-for="(item,index) in adv" v-if="index==current">
        <li v-for="content in item.content">
          <img :src="content.imgUrl">
          <span class="tit">{{content.desc}}</span>
          <span class="by">{{content.sub}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  export default{
    methods: {
      tabSwitch (index) {
        this.current = index
      },
      initData () {
        this.axios.get('/api/adv').then((res) =>{
          res = res.data
          if(res.errno == 1){
            this.adv = res.data
          }
        })
      }
    },
    data () {
      return {
        current: 0,
        adv: []
      }
    },
    mounted () {
      this.initData()
    }
  }
</script>
<style scoped lang='less'>
  .adventurer{
    margin: 10px auto;
    width: 1226px;
    background-color: #fff;
    .menuTab{
      width: 100%;
      height: 66px;
      background-color: rgb(246,246,246);
      li.current{
        border-bottom: 4px rgb(130,155,53) solid;
      }
      li{
        height: 100%;
        text-align: center;
        line-height: 69px;
        float: left;
        a{
          padding: 0 30px;
          text-decoration: none;
          color: #3a3a3a;
        }
      }
    }
    .advContent{
      width: 100%;
      height: 215px;
      .contentList{
        margin:40px auto 0;
        padding: 0 20px;
        height: 169px;
        li{
          height: 100%;
          width: 169px;
          margin-right: 28px;
          float: left;
          text-align: left;
          img{
            -webkit-transition: all 300ms;
            transition: all 300ms;
            width: 180px;
            height: 115px;
            margin-bottom: 5px;
            display: block;
          }
          .tit{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .by{
            padding-top: 10px;
            font-size: 12px;
            color: #3a3a3a;
          }
        }
      }
    }
    .box-title{
      height: 32px;
      background-color: rgb(230,230,226)
    }
    .box-title-text{
    font-size: 16px;
    font-weight: bold;
    padding-top: 10px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  }
</style>
