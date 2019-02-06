<template>
  <div id="app">
    <div style="position: relative">
      <j-query-background />
    </div>
    <nav-bar class="nav-bar" />
    <launch />
    <page-content />
  </div>
</template>

<script>
import PageContent from './components/Content'
import Launch from './components/Launch'
import jQueryBackground from './components/background/jQueryBackground'
import NavBar from './components/ic_components/NavBar/Navbar'
import PageFooter from './components/PageFooter'

export default {
  name: 'App',
  components: {
    Launch,
    NavBar,
    PageContent,
    jQueryBackground,
    PageFooter
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
    overflow-x: hidden;
  }

  @media (max-width: 900px) {
    .nav-bar {
      visibility: hidden;
      clear: both;
      display: none;
    }
  }
</style>

<style lang="scss">
  @import "~bulma/css/bulma.css";
  @import url('https://fonts.googleapis.com/css?family=Lato');
</style>