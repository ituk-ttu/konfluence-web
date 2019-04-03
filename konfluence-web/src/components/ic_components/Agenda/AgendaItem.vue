<template>
  <div class="columns">
    <div class="time column is-2">
      <span class="subtitle is-size-4">
        {{ time }}
      </span>
    </div>
    <div class="column">
      <wrapper>
        <template slot="content">
          <div class="agenda-item is-vcentered">
            <h1 class="title is-size-4">
              {{ title }}
            </h1>
            <h2 class="speaker subtitle is-size-4">
              {{ speaker }}
            </h2>
            <img
              class="image"
              :src="imageSrc"
              :alt="company"
            >
          </div>
        </template>
      </wrapper>
    </div>
  </div>
</template>

<script>
import Wrapper from "../Card/Wrapper";

export default {
  name: "AgendaItem",
  components: {Wrapper},
  props: {
    title: String,
    speaker: String,
    time: String,
    imageSrc: String,
    company: String
  }
}
</script>

<style scoped>
  h1, h2 {
    padding: 1.5rem;
  }

  .title {
    margin-bottom: 0 !important;
    font-weight: 500;
    font-family: "Keep Calm", sans-serif;
  }

  .speaker {
    font-style: italic;
    font-weight: 400;
    padding-top: 1rem;
    margin-bottom: 0 !important;
  }

  .wrapper {
    margin: 0;
    min-height: 10rem;
  }

  .agenda-item {
    text-align: left;
  }

  .time {
    padding-top: 2rem;
    padding-right: 0rem;
  }

  .image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 9rem;
    padding: 0 1.5rem 1.5rem 0;
  }

  @media (max-width: 900px) {
    .wrapper {
      margin: 0.3rem 0.8rem 0 0.8rem;
    }

    .image {
      width: 7rem;
      padding: 0 1rem 1rem 0;
    }
  }

</style>