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
        />
      </div>
      <div class="column">
        <ticket-card
          title="Regular bird"
          price="16"
          button-color="color-red"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Late bird"
          price="20"
          button-color="color-green"
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