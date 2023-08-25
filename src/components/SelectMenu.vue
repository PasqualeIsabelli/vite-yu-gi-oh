<script>
import { store, fetchArchetypes } from '../store'

export default {
  data() {
    return {
      store,
    }
  },
  mounted() {
    fetchArchetypes()
  }
}
</script>


<template>
  <select class="form-select mb-4" aria-label="Default select example">
    <option selected>Seleziona Tipologia</option>
    <option :value="i" v-for="(archetype, i) in store.archetypes">{{ archetype.archetype_name }}</option>
  </select>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.form-select {
  width: 400px;
}
</style>