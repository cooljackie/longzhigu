<template>
  <div class="homePage">
    <adventurer></adventurer>
    <roles-list></roles-list>
  </div>
</template>

<script>
import rolesList from './rolesList'
import adventurer from './adventurer'

  export default {
    components: {
      rolesList,adventurer
    }
  }
</script>

<style >
  .homePage{
    background-color: rgb(230,230,226);
  }
</style>
