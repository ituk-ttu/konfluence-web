<template>
  <wrapper class="sponsors-wrapper">
    <template slot="content">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="columns">
        <div
          v-for="imagePath in imagePaths"
          class="column"
        >
          <img
            class="image"
            :src="imagePath"
            alt="sponsor"
          >
        </div>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from './Wrapper'

export default {
  name: 'SponsorWrapper',
  components: {
    Wrapper
  },
  props: {
    title: String,
    imagePaths: Array
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 3rem;
  }

  .image {
    transition: transform .4s;
    width: 200px;
    height: 200px;
    object-fit: scale-down;
    display: block;
    margin: auto;
  }

  .image:hover {
    transform: scale(1.1);
  }

  .sponsors-wrapper {
    border-radius: 0;
    background: transparent;
  }
</style>