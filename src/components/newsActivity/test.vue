<template>
  <div id="test">
  <img id="background" alt="background" src="" style="opacity:0.5;" />
  <canvas id="canvasbg" width="1920" height="898" style="position: absolute; top: 0px; left: 0px;z-index:1;opacity:1;pointer-events:none;"></canvas>
  <div class="testList">
    <news-list></news-list>
  </div>
  </div>
</template>

<script >
var RainyDay = require('../../assets/js/rainyday.js')
import newsList from './newsList'
  export default{
      data () {
        return {
          timer: ''
        }
      },
      methods:{
        move () {
         var image = document.getElementById('background');
         var canvas = document.getElementById('canvasbg');
                image.onload = function() {
                    var engine = new RainyDay({
                        image: image
                    },canvas);
                    engine.rain([ [1, 2, 3000] ]);
                    engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
                };
                image.crossOrigin = 'anonymous';
                image.src = '/static/img/1.jpg';
        }
      },
      mounted () {
        this.$nextTick(function () {
        this.move()
        })
      },
      components: {
        newsList
      }
  }
</script>

<style >
body{
  transition: all 3s ease;
}
  #test{
    width:100%;
    height: 898px;
  }
 #test img {
  width: 100%;
  height: 100%;
 }
 .testList{
  position: absolute;
  width:1000px;
  height: 800px;
  margin: 0 auto;
  top: 100px;
  left: 300px;
  z-index: 10;
 }
</style>
