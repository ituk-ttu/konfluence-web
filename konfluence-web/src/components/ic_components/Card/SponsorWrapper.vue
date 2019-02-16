<template>
  <wrapper>
    <template slot="content">
      <div class="text-wrapper">
        <h1 class="title">{{ title }}</h1>
      </div>
      <div class="image-wrapper">
        <div class="image-row"
             v-for="imagePath in imagePaths">
          <img :src="imagePath"
              alt="sponsor" />
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
  .text-wrapper {
    min-width: 15rem;
    padding: 2rem;
  }

  .image-wrapper {
    display: block;
  }

  .image-row {
    float: left;
    width: 33.33%;
    height: auto;
  }

  .image-row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>