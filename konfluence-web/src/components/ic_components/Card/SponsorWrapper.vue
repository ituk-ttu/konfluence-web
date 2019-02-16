<template>
  <wrapper class="sponsors-wrapper">
    <template slot="content">
      <div class="image-wrapper">
        <div class="image-row"
             v-for="imagePath in imagePaths">
          <img class="image" :src="imagePath"
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

  .image {
    transition: transform .4s;
  }

  .image:hover {
    transform: scale(1.05);
  }

  .sponsors-wrapper {
    border-radius: 0;
  }
</style>