<template>
  <div class="homePage">
    <div class="boxBg">
      <top-nav></top-nav>
    </div>
      <top-content></top-content>
      <new-activity></new-activity>
      <adventurer></adventurer>
      <roles-list></roles-list>
      <game-slide></game-slide>
      <adv-and-video></adv-and-video>
      <dcfooter></dcfooter>
  </div>
</template>

<script>
import rolesList from './rolesList'
import adventurer from './adventurer'
import newActivity from './newActivity'
import gameSlide from './gameSlide'
import advAndVideo from './advAndVideo'
import topContent from './topContent'
import topNav from '../common/topNav'
import dcfooter from '../common/dcfooter'

  export default {
    components: {
      topNav,rolesList,adventurer,newActivity,gameSlide, advAndVideo, topContent, dcfooter
    }
  }
</script>

<style lang='less'>
  .homePage{
    background: rgb(230,230,226) url('http://game.gtimg.cn/images/dn/web201702/img/bg_foot.png') center bottom no-repeat;
    .boxBg{
      width: 100%;
      height: 930px;
      background: url('http://game.gtimg.cn/images/dn/web201702/img/kv.png') top center no-repeat;
    }
  }
</style>
