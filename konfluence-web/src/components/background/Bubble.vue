<template>
  <div 
    class="bubble"
    v-bind:class="[getRandomSize(), getRandomColor()]"
    v-bind:style="{ top: this.top + 'px', left: this.left + 'px' }"
  >
  </div>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    top: Number,
    left: Number
  },
  methods: {
    getRandomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    getRandomSize: function () {
      let sizeNumber = this.getRandomInteger(1, 4);
      console.log('size' + sizeNumber);
      return 'size' + sizeNumber;
    },
    getRandomColor: function () {
      let colorNumber = this.getRandomInteger(1, 6);
      return 'color' + colorNumber;
    }
  }
}
</script>

<style scoped>
  .bubble {
    border-radius: 100%;
    position: absolute;
    opacity: 0.7;
  }

  .size1 {
    width: 100px;
    height: 100px;
  }

  .size2 {
    width: 200px;
    height: 200px;
  }

  .size3 {
    width: 300px;
    height: 300px;
  }

  .size4 {
    width: 400px;
    height: 400px;
  }

  /*white*/
  .color1 {
    background-color: #ededed;
  }

  /*blue*/
  .color2 {
    background-color: #5799a9;
  }

  /*pink*/
  .color3 {
    background-color: #e86d65;
  }

  /*orange*/
  .color4 {
    background-color: #e59e70;
  }

  /*purple*/
  .color5 {
    background-color: #8c5e7a;
  }

  /*green*/
  .color6 {
    background-color: #1d7f59;
  }
</style>