<template>
  <div>
    <parallax
      :speed-factor="speed"
      :direction="direction"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
        viewBox="0 0 256 256"
      >
        <path
          :class="color"
          d="M256.3 128.2c0 70.8-57.4 128.2-128.2 128.2C57.4 256.3 0 199 0 128.2S57.4 0 128.2 0C199 0 256.3 57.4 256.3 128.2z"
        />
      </svg>
    </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Bubbles',
  components: {
    Parallax
  },
  props: {
    color: String,
    direction: String,
    speed: Number
  }
}
</script>

<style scoped>
  .red {
    fill: #DB4437;
  }

  .yellow {
    fill: #F4B400;
  }

  .blue {
    fill: #0984E3;
  }

  .green {
    fill: #0F9D58;
  }

</style>