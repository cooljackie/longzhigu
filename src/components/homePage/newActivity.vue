<template>
  <div class="outBox">
    <div class="newActivity">
      <div class="box-title">
        <span class="box-title-text left">最新活动</span>
      </div>
      <ul class="imgList">
        <li v-for="item in imgUrl">
          <img :src="item">
        </li>
      </ul>
    </div>
    <div class="advSchool">
      <div class="box-title">
        <span class="box-title-text left">冒险者学院</span>
        <div class="schoolContent">
          <table class="listTable">
            <tr>
              <td colspan="3"><i class="book"></i>萌新入学手册</td>
            </tr>
            <tr v-for="clos in source">
              <td class="sign" v-for="row in clos"><a href="#">{{row}}</a></td>
            </tr>
          </table>
          <img class="xiannv" src="http://game.gtimg.cn/images/dn/web201702/img/raiders_bg.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  export default{
    data () {
      return {
        imgUrl: ['http://ossweb-img.qq.com/upload/adw/image/201703/1488425812222402726.jpg',
                 'http://ossweb-img.qq.com/upload/adw/image/201703/1488425881305264408.jpg',
                 'http://ossweb-img.qq.com/upload/adw/image/201702/1487892453990053319.jpg'
        ],
        source: [['操作', '技能', '装备'], ['升级','公会', '巢穴'], ['职业', '转职', 'PVP']]
      }
    }
  }
</script>

<style scoped lang='less'>
  .outBox{
    width: 1226px;
    margin: 10px auto 0;
    display: flex;
    .newActivity{
      flex: 2;
      height: 280px;
      .imgList{
        width: 100%;
        display: flex;
        li{
          flex: 1;
          box-sizing: content-box;
          img{
            width: 259px;
            height: 230px;
            &:hover{
              opacity: 0.8;
            }
          }
        }
      }
    }
    .advSchool{
      flex: 1;
      height: 280px;
      .schoolContent{
        float: left;
        margin-top: 5px;
        position: relative;
        width: 100%;
        height: 230px;
        background: url('http://game.gtimg.cn/images/dn/web201702/img/raiders_bg.jpg') left no-repeat;
        .xiannv{
          position: absolute;
          right: 0;
          top: -47px;
        }
        .listTable{
          position: absolute;
          left: 0;
          bottom: 0;
          border-collapse: collapse;
          border-spacing: 2px;
          border-color: grey;
          text-align: left;
          color: #bebebe;
          i.book{
              margin-left: 20px;
              margin-right: 5px;
              display: inline-block;
              vertical-align: middle;
              width: 19px;
              height: 23px;
              background: url('http://game.gtimg.cn/images/dn/web201702/img/i_book.png') center no-repeat;
            }
          td.sign{
            width: 74px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            border: 1px solid #322c28;
            &:hover{
              background-color:#222;
            }
            a{
              color: #bebebe;
            }
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
