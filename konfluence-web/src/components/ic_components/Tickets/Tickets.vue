<template>
  <div>
    <h1 class="title">
      Tickets
    </h1>
    <div class="columns">
      <div class="column">
        <ticket-card
          title="Early bird"
          student-price="4"
          regular-price="10"
          button-color="color-blue"
          footer-date="07/04/2019"
          footer-text="Available until"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Standard bird"
          student-price="10"
          regular-price="15"
          button-color="color-red"
          disabled="true"
          footer-date="08/04/2019"
          footer-text="Available from"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Late bird"
          student-price="15"
          regular-price="20"
          button-color="color-green"
          disabled="true"
          footer-text="Event day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TicketCard from "./TicketCard";

export default {
  name: "Tickets",
  components: {TicketCard}
}
</script>

<style scoped>

</style>