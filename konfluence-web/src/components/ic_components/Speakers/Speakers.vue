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

  img {
    object-fit: cover;
  }

  .content {
    text-align: left;
  }

  .z-index {
    z-index: 10;
    position: relative;
  }
  
  @media (max-width: 1000px) {
    .speakers {
      margin: 0;
    }

    .speaker-card {
      margin: 1rem 0;
    }
  }

  .content {
    position: relative;
  }
  .content::before {
    content: '';
    position: absolute;
    top: 0;
    width: 300px;
    height: 25px;
    background: linear-gradient(white, rgba(255, 255, 255, 0.001)); /* transparent keyword is broken in Safari */
  }
  .content::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 25px;
    background: linear-gradient(rgba(255, 255, 255, 0.001), white); /* transparent keyword is broken in Safari */
  }
  .content {
    overflow-y: scroll;
    background: white;
    padding: 15px 0;
    height: 15rem;
  }
</style>