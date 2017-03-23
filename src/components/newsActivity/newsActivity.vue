<template>
  <div class="newsActivity">
    <div class="boxBg">
      <top-nav></top-nav>
    </div>
    <div class="n_main">
      <div class="newList">
        <news-list></news-list>
      </div>
      <div class="sidebar">
        <div class="codeWrapper">
          <qrcode></qrcode>
        </div>
        <right-hoverimg></right-hoverimg>
      </div>
    </div>
    <dcfooter></dcfooter>
  </div>
</template>

<script >
  import topNav from '../common/topNav'
  import newsList from './newsList'
  import qrcode from '../common/qrcode'
  import rightHoverimg from '../common/rightHoverimg'
  import dcfooter from '../common/dcfooter'

  export default{
    components: {
      topNav, newsList, qrcode, rightHoverimg, dcfooter
    }
  }
</script>

<style scoped lang='less'>
  .newsActivity{
    background: rgb(230,230,226) url('http://game.gtimg.cn/images/dn/web201702/img/bg_foot.png') center bottom no-repeat;
    .boxBg{
      width: 100%;
      height: 1080px;
      background: url('http://game.gtimg.cn/images/dn/web201702/img/kv.png') top center no-repeat;
    }
    .n_main{
      margin: -100px auto 0;
      width: 1260px;
      z-index: 9999;
      position: relative;
      .newList{
        float: left;
        width: 820px;
        margin-right: 30px;
      }
      .sidebar{
        float: left;
        width: 409px;
        .codeWrapper{
          width: 100%;
          height: 440px;
          position: relative;
        }
      }
    }
  }
</style>
