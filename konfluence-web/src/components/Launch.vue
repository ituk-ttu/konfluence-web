<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span
              id="maintitle"
              class="is-size-1-mobile"
            >
              konfluence
              <sup id="yearnumber">
                2019
              </sup>
            </span>
            <h2 class="subtitle">
              First of it's kind student-organized front-end development conference
            </h2>
          </div>
        </div>
        <div class="level" style="margin-top: 30px;">
          <div class="level-left">
            <a class="button is-primary is-large is-rounded">
              TICKETS
            </a>
            <a class="button is-success is-large is-rounded">
              AGENDA
            </a>
            <a class="button is-info is-large is-rounded">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Launch"
}
</script>

<style scoped>
  @font-face {
    font-family: "Keep Calm";
    src: url(../assets/fonts/KeepCalm-Medium.ttf) format('truetype')
  }

  .hero {
    text-align: left;
  }

  .button {
    margin-right: 10px;
  }

  #maintitle {
    font-family: "Keep Calm", sans-serif;
    font-weight: 600;
    font-size: 60pt;
  }

  #yearnumber {
    color: #3498db;
  }

  sup {
    font-size: 30pt;
  }
</style>