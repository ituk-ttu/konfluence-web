<template>
  <div>
    <p>
      Student Council of TalTech's School of IT. We are a group of students organising a variety of events, LAN parties, visits to IT companies and much more.
    </p>
    <div class="contact">
      Get in touch with us:
      <ul>
        <li>
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="lg"
          />
          Message us on
          <a href="https://www.facebook.com/ituk.ttu/">
            facebook
          </a>
        </li>
        <li>
          <font-awesome-icon
            icon="envelope"
            size="lg"
          />
          <a href="mailto:kontakt@ituk.ee">
            Email
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizerText"
}
</script>

<style scoped>

  .contact {
    padding-top: 1em;
  }
</style>