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

          <div>
            <ul class="list-wrapper" v-if="list">
              <li v-for="element in list">{{ element }}</li>
            </ul>
          </div>

          <p v-if="secondary">{{ secondary }}</p>
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
  }

  .text-wrapper {
    min-width: 45rem;
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
</style>
