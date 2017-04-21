<template>
  <div id="test">
    <div class="main">
      <div class="text"> “The only way to get rid of a temptationThe only way to get rid of a temptationThe only way to get rid of a temptationThe only way to get rid of a temptation”
        <footer>—
          <cite>
            Oscar Wilde, The Picture of Dorian Gray
          </cite>
        </footer>
      </div>
    </div>
  </div>
</template>

<script >
  export default{
      data () {
        return {
          timer: ''
        }
      }
  }
</script>

<style >
  #test{
    width:800px;
    height: 600px;
    margin: 0 auto;
    border: 1px transparent solid;
    z-index: 1;
  }
  #test, .main:before { background-image: url('/static/img/1.jpg'); background-position: 0;
  background-size: cover; background-attachment: fixed; }
  .main{
    width: 500px;
    height: 350px;
    margin: 75px auto;
    position: relative;
    background: hsla(0,0%,100%,.3);
    z-index: 2;
    overflow: hidden;
  }
  .text{
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  .main:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(10px);
  }
</style>
