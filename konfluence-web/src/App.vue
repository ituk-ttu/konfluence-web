<template>
  <div id="app">
    <background />
    <nav-bar />
    <launch />
    <page-content />
    <j-query-background />
  </div>
</template>

<script>
import PageContent from './Content'
import Launch from './components/Launch'
import jQueryBackground from './components/background/jQueryBackground'
import NavBar from './components/ic_components/NavBar/Navbar'

export default {
  name: 'App',
  components: {
    Launch,
    Background,
    NavBar,
    PageContent,
    jQueryBackground
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