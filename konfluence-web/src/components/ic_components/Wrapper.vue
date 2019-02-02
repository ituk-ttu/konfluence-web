<template>
  <div class="wrapper">
    <slot name="content">
      <div class="text-padding">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Wrapper",
  components: {

  },
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped>
    .wrapper {
      display: flex;
      background-color: white;
      height: 25rem;
      border-radius: 0.3rem;
      overflow: hidden;
      padding: 0;
      margin: 5rem 0;
      text-align: justify;
      -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
      -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
      box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.13);
    }

   .text-padding {
     padding: 2rem;
   }
</style>
