<template>
  <div class="tab">
    <div class="box-title">
        <span class="box-title-text left">{{itemContent.leftTitle}}</span>
        <span class="box-title-text right">{{itemContent.rightTitle}}</span>
      </div>
    <ul class="menuTab">
      <li v-for="(item,index) in itemContent.menuItem" :class="{'current': index==tabCurrent}" @mouseover="switchMenuItem(index)">
        <a href="#">{{item}}</a>
      </li>
    </ul>
    <div class="tabContent">
      <slot name="tabContent"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        current: 0
      }
    },
    methods: {
      switchMenuItem (index) {
        if(this.itemContent.video){
          this.$store.dispatch('chargeTabVideoCurrent',index)
        }else{
          this.$store.dispatch('chargeTabCurrent',index)
        }
      }
    },
    computed: {
      tabCurrent () {
        if(this.itemContent.video){
          return this.$store.getters.getTabVideoCurrent
        }else{
          return this.$store.getters.getTabCurrent
        }
      }
    },
    props: {
      itemContent: {
        type: Object,
        required: true
      }
    }
}
</script>

<style scoped lang='less'>
.tab{
  .tabContent{
    background: #fff;
    padding: 20px 30px 30px;
    height: 290px;
  }
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
}
 .box-title{
      height: 32px;
      background-color: rgb(230,230,226);
      margin-top: 15px;
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
</style>
