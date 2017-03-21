<template>
  <div class="homePage">
    <new-activity></new-activity>
    <adventurer></adventurer>
    <roles-list></roles-list>
    <game-slide></game-slide>
  </div>
</template>

<script>
import rolesList from './rolesList'
import adventurer from './adventurer'
import newActivity from './newActivity'
import gameSlide from './gameSlide'

  export default {
    components: {
      rolesList,adventurer,newActivity,gameSlide
    }
  }
</script>

<style >
  .homePage{
    background-color: rgb(230,230,226);
  }
</style>
