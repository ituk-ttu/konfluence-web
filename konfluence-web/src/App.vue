<template>
  <div id="app">
    <Bubbles
      color="yellow"
      direction="up"
      speed="0.4"
    />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Bubbles from './components/background/Bubbles'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bubbles
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
