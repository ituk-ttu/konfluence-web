<template>
  <div class="z-index">
    <h1 class="title">
      Speakers
    </h1>
    <div class="speakers">
      <template v-for="speaker in speakers">
        <div class="card speaker-card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="speaker.image"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ speaker.name }}
                </p>
                <p class="subtitle is-6">
                  {{ speaker.company }}
                </p>
              </div>
            </div>

            <div class="content">
              {{ speaker.text }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { speakers } from './Speakers';

export default {
  name: "Speakers",
  data() {
    return {
      speakers: speakers
    }
  },
}
</script>

<style scoped>
  .speakers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 4rem;
    justify-content: center;
  }

  .speaker-card {
    max-width: 20rem;
    margin: 2rem;
    border-radius: 1.5rem;
    overflow: hidden;
  }

  .content {
    text-align: left;
  }

  .z-index {
    z-index: 10;
    position: relative;
  }
</style>