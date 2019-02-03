<template>
  <wrapper>
    <template slot="content">
      <div
        class="columns"
        :class="imageAlign"
      >
        <div class="column text-padding">
          <h1 class="title">{{ title }}</h1>
          <p>{{ text }}</p>
        </div>

        <img
          :src="imagePath"
          class="image-align column is-8"
        >
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

  .text-padding {
    padding: 2rem;
  }

  .left {
    flex-direction: row-reverse;
  }

  .right {
    flex-direction: row;
  }

  .image-align {
    justify-content: end;
  }
</style>
