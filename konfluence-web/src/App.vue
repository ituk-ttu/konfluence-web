<template>
  <div id="app">
    <Bubble
      color="yellow"
      direction="up"
      speed="0.4"
    />

    <div>
      <h1>{{ msg }}</h1>
      <wrapper direction="left" image-path="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg" text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te." />

      <br/>
      <br/>
      <br/>
      <wrapper class="right" direction="right" image-path="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg" text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te." />
      <br/>
      <br/>
      <wrapper text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te." />
    </div>
  </div>
</template>

<script>
import Wrapper from './components/ic_components/Wrapper'
import Bubble from './components/background/Bubble'

export default {
  name: 'App',
  components: {
    Bubble
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

  div {
    padding: 0 4rem 0;
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
