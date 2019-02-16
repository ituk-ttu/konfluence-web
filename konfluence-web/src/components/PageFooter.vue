<template>
  <div class="footer">
    <div class="">
      <p>Made by ITÜK with ☕ and ❤️ <br>
        ©Konfluence {{ getYear() }} </p>
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