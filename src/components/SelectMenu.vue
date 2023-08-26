<script>
import { store, fetchArchetypes, fetchCards } from '../store'

export default {
  data() {
    return {
      store,
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
    <option :value="i + 1" v-for="(archetype, i) in store.archetypes" @click="fetchCards(store.searchArchetypes)">{{ archetype.archetype_name }}</option>
  </select>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.form-select {
  width: 400px;
}
</style>