<template>
<div class="qrcodeWrapper">
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
</template>

<script >
  export default{

  }
</script>

<style scoped lang="less">
.qrcodeWrapper{
  position: relative;
  height: 100%;
  width: 100%;
}
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
</style>
