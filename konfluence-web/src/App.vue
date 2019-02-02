<template>
  <div id="app">
    <Background />
    <page-content />
  </div>
</template>

<script>
import Background from './components/background/Background'
import PageContent from './Content'

export default {
  name: 'App',
  components: {
    Background,
    PageContent
  }
}
</script>

<style scoped>
  #app {
    font-family: Lato, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f7f7f7;
  }


  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<style lang="scss">
  @import "~bulma/css/bulma.css";
  @import url('https://fonts.googleapis.com/css?family=Lato');
</style>