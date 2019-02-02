<template>
  <div
    class="wrapper columns"
    :class="direction"
  >
    <div class="column is-6 text-padding">
      <p>{{ text }}</p>
    </div>

    <div class="column">
      <img
        v-if="imagePath"
        :src="imagePath"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    imagePath: String,
    text: String,
    direction: String
  }
}
</script>

<style scoped>
    .wrapper {
      display: flex;
      background-color: #26de81;
      height: 30rem;
      border-radius: 0.3rem;
      overflow: hidden;
      padding: 0;
      margin: 5rem;
      text-align: justify;
      -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
      -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
      box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
    }

   img {
     height: 100%;
     padding: inherit;
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
</style>
