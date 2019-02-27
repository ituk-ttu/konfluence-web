<template>
  <div>
    <h1 class="title">
      Tickets
    </h1>
    <div class="columns">
      <div class="column">
        <ticket-card
          title="Early bird"
          price="10"
          button-color="color-blue"
          active-until="10/03/2019"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Regular bird"
          price="16"
          button-color="color-red"
          disabled=true
          active-until="10/04/2019"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Late bird"
          price="20"
          button-color="color-green"
          disabled=true
          active-until="23/05/2019"
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