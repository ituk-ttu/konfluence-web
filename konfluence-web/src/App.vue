<template>
  <div id="app">
    <j-query-background />
    <nav-bar class="nav-bar" />
    <launch />
    <page-content />
    <page-footer />
  </div>
</template>

<script>
import PageContent from './components/Content'
import Launch from './components/Launch'
import JQueryBackground from './components/background/JQueryBackground'
import NavBar from './components/ic_components/NavBar/Navbar'
import PageFooter from './components/PageFooter'

export default {
  name: 'App',
  components: {
    Launch,
    NavBar,
    PageContent,
    JQueryBackground,
    PageFooter
  },
  mounted() {
    let fientaScript = document.createElement('script');
    fientaScript.async = true;
    fientaScript.setAttribute('src', 'https://fienta.com/embed.js');
    document.head.appendChild(fientaScript)
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