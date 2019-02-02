<template>
  <div>
    <div>
      <h1>{{ text }}</h1>
    </div>

    <div
      v-if="imagePath"
      id="imageBox"
    >
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
    text: String
  }
}
</script>

<style scoped>
    div {
        padding: 2rem;
        background-color: #26de81;
        width: 50rem;
        height: 30rem;
        border-radius: 0.3rem;
        text-align: justify;
        -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
        -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
        box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
    }
</style>
