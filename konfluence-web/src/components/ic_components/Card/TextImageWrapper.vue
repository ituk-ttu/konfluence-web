<template>
  <wrapper>
      <template slot="content">
        <div
          :class="imageAlign"
          class="cardbox"
          >

          <div class="text-wrapper">
            <h1 class="title">{{ title }}</h1>
            <p>{{ text }}</p>
          </div>

          <div class="image-wrapper">
            <img :src="imagePath">
          </div>
        </div>
      </template>
  </wrapper>
</template>

<script>
import Wrapper from './Wrapper'

export default {
  name: "WrapperWithImage",
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
    }
  }
}
</script>

<style scoped>

  img {
    height: 100%;
  }

  .cardbox {
    display: flex;
  }

  .text-wrapper {
    min-width: 45rem;
    padding: 2rem;
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
</style>
