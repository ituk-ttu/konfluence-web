<template>
  <div>
    <Bubble
      color="blue"
      cx="50"
      cy="40"
      r="90"
    />
    <Bubble
      color="yellow"
      cx="30"
      cy="50"
      r="30"
    />
  </div>
</template>

<script>
import Bubble from './Bubble'

export default {
  name: 'Background',
  components: {
    Bubble
  }
}

</script>

<style scoped>

</style>