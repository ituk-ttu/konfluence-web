<template>
  <div class="parallax-container">
    <v-parralax>
      <svg
        height="max"
        width="max"
      >
        <circle
          :cx="cx"
          :cy="cy"
          :r="radius"
          :fill="color"
        ></circle>
      </svg>
    </v-parralax>
  </div>
</template>

<script>
import VParralax from 'vuetify'

export default {
  name: 'Bubble',
  components: {
    VParralax
  },
  props: {
    color: {
      red: '#DB4437',
      blue: '#0984E3',
      green: '#0F9D58',
      yellow: '#F4B400'
    },
    cx: String,
    cy: String,
    radius: String
  }
}
</script>

<style scoped>

</style>