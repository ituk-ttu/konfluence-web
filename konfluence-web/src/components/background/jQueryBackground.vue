<template>
  <div id="wrapper">
    <div id="parallax-lvl-0">
      <Bubble v-for="n in 20" v-bind:top="getRandomTop()" v-bind:left="getRandomLeft()"></Bubble>
    </div>

    <div id="parallax-lvl-2">
      <Bubble v-for="n in 5" v-bind:top="getRandomTop()" v-bind:left="getRandomLeft()"></Bubble>
    </div>

    <div id="parallax-lvl-3">
      <Bubble v-for="n in 7" v-bind:top="getRandomTop()" v-bind:left="getRandomLeft()"></Bubble>
    </div>

    <!--<div id="parallax-lvl-1">
      <div id="b1-1" class="bubble size1 blue">&nbsp;</div>
      <div id="b1-2" class="bubble size4 blue">&nbsp;</div>
      <div id="b1-3" class="bubble size4 orange">&nbsp;</div>
      <div id="b1-4" class="bubble size2 pink">&nbsp;</div>
      <div id="b1-5" class="bubble size1 green">&nbsp;</div>
      <div id="b1-6" class="bubble size2 purplhe">&nbsp;</div>
    </div>

    <div id="parallax-lvl-2">
      <div id="b2-1" class="bubble size2 blue">&nbsp;</div>
      <div id="b2-2" class="bubble size1 pink">&nbsp;</div>
      <div id="b2-3" class="bubble size2 green">&nbsp;</div>
      <div id="b2-4" class="bubble size2 purple">&nbsp;</div>
      <div id="b2-5" class="bubble size3 pink">&nbsp;</div>
      <div id="b2-6" class="bubble size1 orange">&nbsp;</div>
    </div>

    <div id="parallax-lvl-3">
      <div id="b3-1" class="bubble size2 green">&nbsp;</div>
      <div id="b3-2" class="bubble size2 pink">&nbsp;</div>
      <div id="b3-3" class="bubble size1 green">&nbsp;</div>
      <div id="b3-4" class="bubble size4 green">&nbsp;</div>
      <div id="b3-5" class="bubble size1 purple">&nbsp;</div>
      <div id="b3-6" class="bubble size2 blue">&nbsp;</div>
    </div>-->
  </div>
</template>

<script>
import Bubble from "./Bubble";
export default {
  name: "jQueryBackground",
  components: {Bubble},
  methods : {
    getRandomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    getRandomLeft: function () {
      return this.getRandomInteger(0, Math.max(document.documentElement.clientWidth))
    },
    getRandomTop: function () {
      let scrollHeight = Math.max(document.getElementById('app').scrollHeight);
      return this.getRandomInteger(0, scrollHeight)
    }
  },
  mounted: function () {
    this.$forceUpdate()
  }
}

import 'expose-loader?$!expose-loader?jQuery!jquery'


$(window).bind('scroll', function (e) {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $('#parallax-lvl-0').css('top', (0 - (scrolled * .25)) + 'px');
  $('#parallax-lvl-1').css('top', (0 - (scrolled * .5)) + 'px');
  $('#parallax-lvl-2').css('top', (0 - (scrolled * .75)) + 'px');
  $('#parallax-lvl-3').css('top', (0 - (scrolled * .9)) + 'px');
}
</script>

<style scoped>
  /* CSS Bubbles */
  #parallax-lvl-0, #parallax-lvl-1, #parallax-lvl-2, #parallax-lvl-3 {
    position: absolute;
    top: 0;
  }

  #parallax-lvl-1 {
    z-index: 0;
  }

  #parallax-lvl-2 {
    z-index: 10;
  }

  #parallax-lvl-3 {
    z-index: 20;
  }
</style>