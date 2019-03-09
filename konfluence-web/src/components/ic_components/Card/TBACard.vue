<template>
  <wrapper class="tba-wrapper">
    <template slot="content">
      <div class="columns">
        <div class="column has-text-right has-text-weight-bold">
          <p class="is-size-1">
            SPEAKERS
          </p>
          <p class="is-size-1">
            WORKSHOPS
          </p>
          <p class="is-size-1">
            AGENDA
          </p>
        </div>
        <div class="column">
          <p class="is-size-1">
            To be announced soon!
          </p>
        </div>
      </div>
    </template>
  </wrapper>
</template>

<script>
  import Wrapper from "./Wrapper";
  export default {
    name: "TBACard",
    components: {Wrapper}
  }
</script>

<style scoped>
  p {
    padding: 1rem;
  }
</style>