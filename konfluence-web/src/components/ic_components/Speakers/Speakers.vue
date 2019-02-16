<template>
  <div class="speakers">

    <h1 class="title">Speakers</h1>

    <template v-for="i in Math.ceil(speakers.length / 3)">
      <tr>
        <template v-for="speaker in speakers.slice(3 * (i - 1), 3 * (i - 1) + 3)">
          <td>
            <div class="speaker">
              <figure class="image is-4by3">
                <img :src="speaker.image">
              </figure>
              <div class="speaker-info">
                <p class="name">{{ speaker.name }}</p>
                <p class="company">{{ speaker.company }}</p>
                <p class="text">{{ speaker.text }}</p>
              </div>
            </div>
          </td>
        </template>
      </tr>
    </template>
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
    }
  }
</script>

<style scoped>
  .name {
    font-size: 1.5rem;
  }

  .company {
    font-size: 1.2rem;
  }

  .image {
    border-bottom: #f0f0f0 solid 1px;
  }

  .title {
    margin: 3rem;
  }

  .speakers {
    display: flex;
    flex-direction: column;
  }

  .speaker {
    width: 20rem;
    height: 30rem;
    text-align: center;
    background-color: #9e9e9e50;
    -webkit-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.38);
    box-shadow: 3px 3px 14px 0px rgba(0,0,0,0.38);
  }

  td {
    padding: 3rem;
  }

  tr {
    align-self: center;
  }
</style>