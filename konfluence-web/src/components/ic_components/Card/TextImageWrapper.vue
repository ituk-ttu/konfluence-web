<template>
  <wrapper>
    <template slot="content">
      <div :class="imageAlign" class="cardbox">
        <div class="text-wrapper">
          <h1 class="title">{{ title }}</h1>
          <p>{{ text }}</p>

          <div>
            <ul v-if="list" class="list-wrapper">
              <li v-for="element in list">{{ element }}</li>
            </ul>
          </div>

          <p v-if="secondary">{{ secondary }}</p>
        </div>

        <img :src="imagePath">
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from './Wrapper'

export default {
  name: 'WrapperWithImage',
  components: {
    Wrapper
  },
  props: {
    title: String,
    text: String,
    imagePath: {
      type: String,
      required: true
    },
    imageAlign: {
      type: String,
      required: true
    },
    list: Array,
    secondary: String
  }
}
</script>

<style scoped>

  .cardbox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }

  .text-wrapper {
    padding: 2rem;
  }

  .list-wrapper {
    margin: 1rem 0 1rem 2rem;
    list-style-type: square;
  }

  .text {
    padding: 2rem;
  }

  .left {
    flex-direction: row-reverse;
  }

  .right {
    flex-direction: row;
  }

  .card-height {
    height: 10rem;
  }

  img {
    height: 100%;
    max-width: inherit;
  }
</style>
