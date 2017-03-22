<template>
  <div class="advAndVideo">
    <div class="advPart">
      <tab :itemContent="tabMenuContent">
        <div slot="tabContent">
          <div v-for="(item, index) in advSchoolContent" v-if="index==tabCurrent">
            <div class="imgWrapper">
              <img v-for="imgUrl in item.imgUrl" :src="imgUrl" >
            </div>
            <ul class="textList">
              <li v-for="textItem in item.textList">
                <a class="name" href="#">{{textItem.text}}</a>
                <span class="txtDate">{{textItem.date}}</span>
              </li>
            </ul>
          </div>
        </div>
      </tab>
    </div>
    <div class="videoPart">
      <tab :itemContent="videoMenuContent">
        <div slot="tabContent">
          <div v-for="(videoItemList, videoIndex) in videoContent" v-if="videoIndex==viedoCurrent">
            <ul class="videoList">
              <li v-for="videoItem in videoItemList">
                <div class="imgWrapper"><img :src="videoItem.imgUrl"></div>
                <span>{{videoItem.desc}}</span>
                <i class="btnPlay"></i>
              </li>
            </ul>
          </div>
        </div>
      </tab>
    </div>
  </div>
</template>

<script >
import tab from '../common/tab'
  export default{
    data () {
      return {
        tabMenuContent: {
          leftTitle: '冒险家学院',
          rightTitle: '+MORE',
          menuItem: ['最新', '职业', '巢穴', '玩法', '新手'],
          video: false
        },
        videoMenuContent: {
          leftTitle: '视频中心',
          rightTitle: '+MORE',
          menuItem: ['最新', '职业', '巢穴', '玩法', '新手'],
          video: true
        },
        advSchoolContent: [],
        videoContent: []
      }
    },
    computed: {
      tabCurrent () {
        return this.$store.getters.getTabCurrent
      },
      viedoCurrent () {
        return this.$store.getters.getTabVideoCurrent
      }
    },
    mounted() {
      this.axios.get('/api/tabData').then((res) => {
        res = res.data
        if(res.errno===1){
          this.advSchoolContent = res.data.advSchoolContent
          this.videoContent = res.data.videoContent
        }
      })
    },
    components: {
      tab
    }
  }
</script>

<style scoped lang='less'>
  .advAndVideo{
    margin: 10px auto 0;
    display: flex;
    width: 1226px;
    height: 457px;
    justify-content: space-between;
    .advPart, .videoPart{
      width: 603px;
      height: 457px;
    }
    .advPart{
      .imgWrapper{
        display: flex;
        justify-content: space-between;
        img{
          width: 260px;
          height: 125px;
        }
      }
      .textList{
        margin-top: 15px;
        li{
          text-align: left;
          color: #656565;
          margin-bottom: 15px;
          a.name{
            color: #656565;
            vertical-align: middle;
            height: 21px;
            line-height: 21px;
            width: 400px;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
          }
          span.txtDate{
            height: 21px;
            line-height: 21px;
            float: right;
          }
        }
      }
    }
    .videoPart{
      .videoList{
        font-size: 0;
        li{
          margin-top: 10px;
          position: relative;
          width: 260px;
          display: inline-block;
          transition: all 1s ease;
          .btnPlay{
            background: url('/static/img/long/i_play.png') center no-repeat;
            position: absolute;
            width: 26px;
            height: 28px;
            top: 50%;
            left: 50%;
            margin-top: -14px;
            margin-left: -13px;
          }
          .imgWrapper{
            width: 245px;
            height: 115px;
            background-color: #000;
            img{
            width: 245px;
            height: 115px;
            opacity: 0.6;
            }
          }
          span{
            display: inline-block;
            padding-top: 10px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #3a3a3a;
            text-align: left;
          }
          &:hover .btnPlay{
            display: none;
          }
          &:hover img{
            opacity: 1;
          }
        }
      }
    }
  }
</style>
