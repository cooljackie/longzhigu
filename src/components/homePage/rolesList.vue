<template>
  <div class="long">
  <i class="wan"></i>
    <div class="long-box">
      <div class="box-title">
        <span class="box-title-text left">角色介绍</span>
        <span class="box-title-text right">+MORE</span>
      </div>
      <div class="box-content">
      <ul class="role-btn-list">
        <li class="role-btn icon-1" v-for="(role, roleIndex) in roles" @click="nextIndex(roleIndex)">
          <i class="on" :class="{'show': roleIndex==currentIndex}"><img :src='role.on_icon_url'></i>
          <i class="off" :class="{'hide': roleIndex==currentIndex}"><img :src='role.off_icon_url'></i>
          <div class="tx">
            <span class="name">{{role.name}}</span>
            <span class="sub">{{role.sub}}</span>
          </div>
        </li>
      </ul>
      <div class="item" v-for="(role, index) in roles" :class="{'show': index==currentIndex}">
        <h1 class="name fadeInUp animated">{{role.type[switchIndex].name}}</h1>
        <h3 class="sub fadeInUp animated">{{role.type[switchIndex].sub}}</h3>
        <p class="text fadeInUp animated">{{role.type[switchIndex].desc}}</p>
        <ul class="switch-menu fadeInUp animated">
          <li v-for="(icon, iconIndex) in role.icon_url">
            <i :class="{'rotate': iconIndex==currentIcon}"></i>
            <i @click="bothSwitch(iconIndex)"><img :src="icon" :class="{'gray': iconIndex!=currentIcon}"></i>
          </li>
        </ul>
        <div class="gif-wrapper fadeInUp animated">
          <img :src="role.type[switchIndex].gif_url">
          <img class="play-btn" src="/static/img/long/i_play.png">
        </div>
        <img class="big-img flipInX animated" :src="role.type[switchIndex].img_url">
      </div>
      </div>
    </div>
  </div>
</template>
<script >
  export default{
    data () {
      return{
        currentIcon: 0,
        currentIndex: 0,
        switchIndex: 0,
        roles: []
      }
    },
    mounted (){
      this.axios.get('/api/roles').then((res) => {
        res = res.data
        if(res.errno===1){
          this.roles = res.data
        }
      })
    },
      methods: {
      bothSwitch (iconIndex) {
        this.switchIndex = iconIndex
        this.currentIcon = iconIndex
      },
      nextIndex(roleIndex){
        this.currentIndex = roleIndex
      }
    }
  }
</script>
<style scoped lang='less'>
  .long{
    margin: 0 auto;
    width: 1226px;
    position: relative;
    .wan{
    width: 146px;
    height: 528px;
    margin-top: -264px;
    background-image: url('/static/img/long/wan.png');
    position: absolute;
    right: 215px;
    top: 50%;
    z-index: 999;
    }
  }
  .long-box{
    .box-title{
      height: 32px;
    }
    .box-content{
      position: relative;
      height: 520px;
      background: #fff url('/static/img/long/role_bg.jpg') right top no-repeat;
      .item{
        position: absolute;
        display: none;
        padding: 40px 80px;
        top: 0;
        left: 0;
        width: 1100px;
        height: 440px;
        text-align: left;
        .name{
          width: 160px;
          font-size: 46px;
          font-weight: bold;
          color: #656565;
        }
        .sub{
          width: 120px;
          font-size: 14px;
          display: block;
          color: #c9bba9;
          margin: 2px 0 6px 0;
        }
        .text{
          width: 260px;
          height: 110px;
          color: #656565;
        }
        .gif-wrapper{
          margin-top: 30px;
          position: relative;
          width: 258px;
          height: 130px;
          .play-btn{
           position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            margin-left: -12px;
            margin-top: -14px;
          }
          &:hover .play-btn{
             display: none;
          }
        }
        .big-img{
          position: absolute;
          top: -30px;
          left: 380px;
        }
        .switch-menu{
          width: 260px;
          height: 96px;
          li{
            position: relative;
            width: 96px;
            height: 96px;
            float: left;
            &:nth-child(1){
              margin-right: 50px;
            }
            i{
            position: absolute;
            top:0;
            left: 0;
            width: 96px;
            height: 96px;
             .gray{
              -webkit-transition: all 500ms;
              transition: all 500ms;
              filter: grayscale(1);
              -webkit-filter: grayscale(1);
            }
            }
            i.rotate{
              display: block;
              animation: rotate 15000ms linear infinite;
              -webkit-animation: rotate 15000ms linear infinite;
              &:before{
                content: '';
                position: absolute;
                width: 20px;
                height: 16px;
                top: 50%;
                margin-top: -8px;
                left: -20px;
                background: url('/static/img/long/role_arrow_left.png') center no-repeat;
              }
              &:after{
                content: '';
                position: absolute;
                width: 20px;
                height: 16px;
                top: 50%;
                margin-top: -8px;
                right: -20px;
                background: url('/static/img/long/role_arrow_right.png') center no-repeat;
              }
            }
          }
        }
      }
      .show{
        display: block;
      }
      .role-btn-list{
        width: 250px;
        height: 520px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 90;
        .role-btn{
          position: absolute;
          width: 145px;
          height: 83px;
          cursor: pointer;
            &:nth-child(1){
          top: 40px;
        }
        &:nth-child(2){
          top: 145px;
          left: 45px;
        }
         &:nth-child(3){
          top: 245px;
          left: 55px;
        }
         &:nth-child(4){
          top: 345px;
          left: 30px;
        }
          i{
            width: 78px;
            height: 79px;
            position: absolute;
            left: 0;
          }
          .on{
            opacity: 0;
            animation: rotate 15000ms linear infinite;
            -webkit-animation: rotate 15000ms linear infinite;
          }
          .off,.show{
            opacity: 1;
          }
          .hide{
            opacity: 0;
          }
           &:hover .off{
            opacity: 0;
          }
          &:hover .on{
            opacity: 1;
          }
          .tx{
            position: absolute;
            top: 28px;
            left: 85px;
          }
          span{
            display: block;
            line-height: 1em;
          }
          .name{
            color: #ad9e89;
          }
          .sub{
            color: #928169;
          }
        }
      }
    }
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
  @keyframes rotate{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
<style scoped>
  @import '../../assets/css/animation.css'
</style>
