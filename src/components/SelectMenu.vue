<script>
import { store, fetchArchetypes, fetchCards } from '../store'

export default {
  data() {
    return {
      store,
      searchArchetypes: ""
    }
  },
  methods: {
    fetchCards
  },
  mounted() {
    fetchArchetypes()
  }
}
</script>


<template>
  <select class="form-select mb-4" aria-label="Default select example" v-model="store.searchArchetypes">
    <option selected>Seleziona Archetipo</option>
    <option :value="archetype.archetype_name" v-for="archetype in store.archetypes" @click="fetchCards()">{{ archetype.archetype_name }}</option>
  </select>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.form-select {
  width: 400px;
}
</style>