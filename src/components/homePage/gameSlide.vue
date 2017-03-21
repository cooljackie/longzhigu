<template>
  <div class="gameSlide">
    <div class="box-title">
      <span class="box-title-text left">游戏特色</span>
    </div>
    <div class="silideWrapper">
        <ul class="imgBox" :style="'{width:'+1226*gameImgUrl.length+'px;'+'margin-left:'+current*-1226+'px;}'">
          <li v-for="item in gameImgUrl">
            <a href="#">
              <img :src="item">
            </a>
          </li>
        </ul>
        <ul class="btnList">
          <li class="prev" @click="prevItem">&lt</li>
          <li v-for="num in gameImgUrl.length" :class="{'current': num==current+1}" @click="SwitchImg(num)">{{num}}</li>
          <li class="next" @click="nextItem">&gt</li>
        </ul>
    </div>
  </div>
</template>

<script >
 export default{
  data() {
    return {
      current: 0,
      timer: '',
      gameImgUrl: ['http://ossweb-img.qq.com/upload/adw/image/201702/1487891171718112407new.jpg',
              'http://ossweb-img.qq.com/upload/adw/image/201702/1487891164868903705new.jpg',
              'http://ossweb-img.qq.com/upload/adw/image/201702/1487891095969732677new.jpg',
              'http://ossweb-img.qq.com/upload/adw/image/201702/1487891156792774150new.jpg',
              'http://ossweb-img.qq.com/upload/adw/image/201702/1487891144252367191new.jpg'
              ]
    }
  },
  methods: {
    nextImg () {
      if(this.current >= this.gameImgUrl.length-1){
        this.current = 0
      }else{
        this.current +=1
      }
    },
    prevImg () {
      if(this.current >0){
        this.current -=1
      }
    },
    autoPlay () {
      this.timer = setInterval(this.nextImg, 5000)
    },
    pauseTimer () {
      clearInterval(this.timer)
    },
    SwitchImg (num) {
      this.pauseTimer()
      this.current = num - 1
      this.autoPlay()
    },
    nextItem () {
      this.pauseTimer()
      this.nextImg()
      this.autoPlay()
    },
    prevItem () {
      this.pauseTimer()
      this.prevImg()
      this.autoPlay()
    }
  },
  mounted () {
    this.pauseTimer()
    this.autoPlay()
  }
 }
</script>

<style scoped lang="less">
  .gameSlide{
    width: 1226px;
    height: 463px;
    margin: 0 auto;
    .silideWrapper{
      width: 1226px;
      height: 418px;
      overflow: hidden;
      position: relative;
      ul.imgBox{
        height: 418px;
        transition: all .1 ease;
        li{
          float: left;
          width: 1226px;
          height: 418px;
        }
      }
      .btnList{
        position: absolute;
        bottom: 30px;
        margin-left: -160px;
        left: 50%;
        width: 350px;
        height: 30px;
        z-index: 100;
        li{
          margin: 0 10px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: #fff;
          float: left;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
        }
        li.current{
          background-color: rgb(225, 49, 37);
          color: #fff;
        }
        li.prev,li.next{
          width: 30px;
          height: 30px;
          line-height: 30px;
          margin-top: -3px;
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
  }
</style>
