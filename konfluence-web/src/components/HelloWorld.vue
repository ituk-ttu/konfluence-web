<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Davai lets do it</h3>
    <wrapper text="Siin on tekst" />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <wrapper text="Siin on teine tekst" />
  </div>
</template>

<script>
import Wrapper from '../assets/Wrapper'

export default {
  name: 'HelloWorld',
  components: {
    Wrapper
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

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
