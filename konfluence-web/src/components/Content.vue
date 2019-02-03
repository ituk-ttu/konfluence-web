<template>
  <div
    id="content"
    class="container"
  >
    <text-image-wrapper
      id="about"
      title="About"
      text="TBA"
      image-align="left"
      image-path="http://craftagency.co.uk/sites/default/files/CraftBlog_Leeds_AllDayHey_Conference_2.jpg"
    />

    <text-image-wrapper
      id="speakers"
      title="Speakers"
      text="TBA"
      image-align="right"
      image-path="https://2017.front-trends.com/static/img/conference.jpg"
    />

    <wrapper
      id="venue"
      title="Venue"
      text="TBA"
    />

    <wrapper
      id="workshops"
      title="Workshops"
      text="TBA"
    />

    <wrapper
      id="sponsors"
      title="Sponsors"
      text="TBA"
    />

    <wrapper
      id="organizers"
      title="Organizers"
      text="TBA"
    />
  </div>
</template>

<script>
import Wrapper from './ic_components/Card/Wrapper'
import TextImageWrapper from './ic_components/Card/TextImageWrapper'

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
  @import "../../node_modules/bulma/css/bulma.css";
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