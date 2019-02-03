<template>
  <div class="footer columns">
    <div class="column is-8">
      <p>This webpage is the property of RaimondMaeKaspar Creations incorporated limited {{getYear()}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  methods: {
    getYear: function () {
      return new Date().getFullYear().toString()
    }
  }
}
</script>

<style scoped>

  p {
    padding: 2rem 0;
  }

  .footer {
    height: 10rem;
    background-color: #e0e0e0;
    text-align: left;
    font-size: 6rem;
    padding: 0 12rem;
  }
</style>