<template>
  <div class="footer">
    <div class="">
      <p>
        Made by ITÜK with <font-awesome-icon icon="heart" /> and <font-awesome-icon icon="coffee" />
      </p>
      <p>
        <font-awesome-icon icon="copyright" /> Konfluence {{ getYear() }}
      </p>
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
  .footer {
    height: 10rem;
    background-color: #d0d0d0;
    text-align: center;
    font-size: 6rem;
  }
</style>