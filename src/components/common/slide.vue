<template>
  <div class="hotSlide">
    <ul class="imgBox" :style="'{width:'+409*gameImgUrl.length+'px;'+'margin-left:'+current*-409+'px;}'">
          <li v-for="item in gameImgUrl">
            <a href="#">
              <img :src="item">
            </a>
          </li>
        </ul>
        <ul class="btnList">
          <li v-for="num in gameImgUrl.length" :class="{'current': num==current+1}" @click="SwitchImg(num)"></li>
        </ul>
  </div>
</template>
<script >
  export default{
    data () {
      return {
        current: 0,
        timer: '',
        gameImgUrl: ['http://ossweb-img.qq.com/upload/adw/image/201703/1489719474918155964.jpg',
                'http://ossweb-img.qq.com/upload/adw/image/201703/1489444759376614354.jpg',
                'http://ossweb-img.qq.com/upload/adw/image/201703/1489621704898675178.jpg',
                'http://ossweb-img.qq.com/upload/adw/image/201703/1489534515179738431.jpg'
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
    }
  },
  mounted () {
    this.pauseTimer()
    this.autoPlay()
  }
  }
</script>

<style scoped lang="less">
.hotSlide{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  ul.imgBox{
        height: 440px;
        transition: all .1 ease;
        li{
          float: left;
          width: 408.672px;
          height: 440px;
        }
      }
  .btnList{
        position: absolute;
        top: 30px;
        right: 10px;
        width: 150px;
        height: 30px;
        z-index: 100;
        li{
          margin: 0 10px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #dedede;
          border: 2px solid transparent;
          float: left;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
        }
        li.current{
          border: 2px solid #39dcff;
          background: none;
        }
      }
}
</style>
