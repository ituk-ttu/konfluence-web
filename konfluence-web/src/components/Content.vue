<template>
  <div
    id="content"
    class="container"
  >
    <text-image-wrapper
      id="about"
      title="About"
      text="Konfluence brings together the best developers, engineers, designers and.., who specialize in front end development with emphasis on quality user interface design and experience, web development and newest front-end technologies. The conference is entirely organized by the students of TalTech school of IT and takes place on 26th of April."
      :list="['How is beautiful and user-friendly design created?',
       'How can be development process be safe and effective?',
       'What are the technologies used by Estonian and international companies and what are the technologies of the future?',
       'What does the design process of user interfaces look like?']"
      secondary="The name Konfluence is a word play on the word conference in Estonian (konverents) and the Atlassian Confluence, which is an exemplary software in the fields of high quality product design in both front and back end technologies."
      image-align="left"
      image-path="https://www.intersolar.de/fileadmin/_processed_/9/9/csm_Conference_5cee960ed0.jpg"
    />

    <speakers id="speakers" />

    <text-image-wrapper
      id="venue"
      title="Venue"
      text="TalTech Mektory Innovatsiooni- ja ettevõtluskeskus, Raja 4c Tallinn"
      image-align="right"
      image-path="https://www.tallinn.ee/gal_pildid/158808.jpg"
    />

    <wrapper
      id="workshops"
      title="Workshops"
      text="TBA"
    />
    <wrapper
      id="organizers"
      title="Organizers"
      text="ITÜK"
    />

    <sponsor-wrapper
      id="sponsors"
      title="Sponsors"
      :image-paths="['https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png', 'https://i.imgur.com/Fgldzjc.png']"
    />

  </div>
</template>

<script>
import Wrapper from './ic_components/Card/Wrapper'
import TextImageWrapper from './ic_components/Card/TextImageWrapper'
import Speakers from './ic_components/Speakers/Speakers.vue'
import SponsorWrapper from './ic_components/Card/SponsorWrapper'

export default {
  name: 'Content',
  components: {
    Speakers,
    Wrapper,
    TextImageWrapper,
    SponsorWrapper
  }
}
</script>

<style scoped>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #2c3e50;
  }

  .right-align {
    align-self: flex-end;
  }
</style>

<style lang="scss">
  @import "../../node_modules/bulma/css/bulma.css";
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #333333;
  }
  p {
    margin: 0;
    font-size: 1rem;
    color: #333333;
  }
</style>