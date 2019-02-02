<template>
  <div
    id="app"
    class="container"
  >
    <text-image-wrapper
      image-align="left"
      title="Mine vaata sinna"
      image-path="http://craftagency.co.uk/sites/default/files/CraftBlog_Leeds_AllDayHey_Conference_2.jpg"
      text="Pikutav mees."
    />

    <text-image-wrapper
      image-align="right"
      image-path="https://2017.front-trends.com/static/img/conference.jpg"
      text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
    />

    <wrapper
      title="Venue"
      text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
    />

    <wrapper
      title="Workshops"
      text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
    />

    <wrapper
      title="Sponsors"
      text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
    />

    <wrapper
      title="Organizers"
      text="Lorem ipsum dolor sit amet, vim umpit duo, an nec nemore officiis iudicabit. Id nisl altera meliore ius, est in solum detraxit accusamus. Te dolorem philosophia eum, his appareat incorrupte dissentiet te."
    />
  </div>
</template>

<script>
import Wrapper from './components/ic_components/Wrapper'
import TextImageWrapper from './components/ic_components/TextImageWrapper'

export default {
  name: 'Content',
  components: {
    Wrapper,
    TextImageWrapper
  }
}
</script>

<style scoped>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #2c3e50;
  }

  .right-align {
    align-self: flex-end;
  }
</style>

<style lang="scss">
  @import "~bulma/css/bulma.css";
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #333333;
  }
  p {
    margin: 0;
    font-size: 1rem;
    color: #333333;
  }
</style>