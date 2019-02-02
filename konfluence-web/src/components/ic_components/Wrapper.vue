<template>
  <div
    class="wrapper"
    :class="direction"
  >
    <div class="text-flex">
      <p>{{ text }}</p>
    </div>

    <img
      class="image"
      v-if="imagePath"
      :src="imagePath"
    >
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    imagePath: String,
    text: String,
    direction: String
  },
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        background-color: #26de81;
        width: 70rem;
        height: 30rem;
        border-radius: 0.3rem;
      overflow: hidden;
        padding: 0;
        text-align: justify;
        -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
        -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
    }

   img {
    height: 100%;
   }

   .text-flex {
     padding: 1rem;
   }

  .left {
    flex-direction: row-reverse;
  }

  .right {
    flex-direction: row;
  }

  .image {
    padding: inherit;
  }
</style>
