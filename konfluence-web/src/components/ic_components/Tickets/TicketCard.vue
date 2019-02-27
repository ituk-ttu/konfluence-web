<template>
  <div class="card ticket-card z-index-above-bubbles">
    <div class="card-content">
      <p class="title is-size-3">
        {{ title }}
      </p>
      <p class="price is-size-1">
        <sup class="is-size-4">
          €
        </sup>
        {{ price }}
        <sup class="is-size-5">
          / person
        </sup>
      </p>
    </div>
    <footer class="card-footer">
      <a
        class="button card-footer-item is-size-4"
        :class="buttonColor"
        href=""
      >
        BUY
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: {
    title: String,
    price: String,
    disabled: Boolean,
    buttonColor: String
  }
}
</script>

<style scoped>
  .ticket-card {
    max-width: 22rem;
    margin: 2rem;
    border-radius: 1.5rem;
    overflow: hidden;
  }

  .z-index-above-bubbles {
    position: relative;
    z-index: 10;
  }

  .price {
    font-family: "Keep Calm", sans-serif;
    margin-bottom: 2rem !important;
  }

  .title {
    margin-top: 1rem;
    margin-bottom: 4rem !important;
  }

  sup {
    color: gray;
  }

  @font-face {
    font-family: "Keep Calm";
    src: url(../../../assets/fonts/KeepCalm-Medium.ttf) format('truetype')
  }

  /*red*/
  .color-red {
    background-color: #fc5c65;
    color: white;
  }

  /*blue*/
  .color-blue {
    background-color: #45aaf2;
    color: white;
  }

  /*green*/
  .color-green {
    background-color: #26de81;
    color: white;
  }
</style>