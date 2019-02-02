<template>
  <div id="app" class="container">
    <Background />
    <div>
      <wrapper
        direction="right"
        image-path="http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
        text="Pikutav mees."
      />

      <div>
        <wrapper
          direction="right"
          image-path="https://www.kiplinger.com/kipimages/pages/18048.jpg"
          text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
        />
      </div>

      <wrapper
        text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
      />
    </div>
  </div>
</template>

<script>
import Wrapper from './components/ic_components/Wrapper'
import Background from './components/background/Background'

export default {
  name: 'App',
  components: {
    Background,
    Wrapper
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
/*
  p {
    margin: 0;
    font-size: 2rem;
    color: #333333;
  }
*/

</style>