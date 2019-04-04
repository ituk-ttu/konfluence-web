<template>
  <div>
    <h1 class="title">
      Agenda
    </h1>
    <div class="columns is-multiline">
      <div
        class="column is-half"
      >
        <agenda-item
          v-for="agendaItem in agendaItems"
          v-if="agendaItem.index <= 3"
          :title="agendaItem.title"
          :speaker="agendaItem.speaker"
          :time="agendaItem.time"
          :image-src="agendaItem.imageSrc"
          :company="agendaItem.company"
          :language="agendaItem.language"
        />
      </div>
      <div
        class="column is-half"
      >
        <agenda-item
          v-for="agendaItem in agendaItems"
          v-if="agendaItem.index >= 4"
          :title="agendaItem.title"
          :speaker="agendaItem.speaker"
          :time="agendaItem.time"
          :image-src="agendaItem.imageSrc"
          :company="agendaItem.company"
          :language="agendaItem.language"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { agendaItems } from './AgendaItems';

import AgendaItem from "./AgendaItem";

export default {
  name: "Agenda",
  components: {AgendaItem},
  data() {
    return {
      agendaItems: agendaItems
    }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 50px !important;
  }
</style>