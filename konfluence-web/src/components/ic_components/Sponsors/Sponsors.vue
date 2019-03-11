<template>
  <wrapper class="sponsors-wrapper">
    <template slot="content">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="sponsor in sponsors"
          class="column is-one-third"
        >
          <img
            class="image"
            :src="sponsor.imgUrl"
            :alt="sponsor.company"
          >
        </div>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from '../Card/Wrapper'
import { sponsors } from './Sponsors'

export default {
  name: 'SponsorWrapper',
  components: {
    Wrapper
  },
  props: {
    title: String,
  },
  data() {
    return {
      sponsors: sponsors
    }
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