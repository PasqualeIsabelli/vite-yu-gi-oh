<script>
export default {
  data() {
    return {}
  }
}
</script>


<template>
  <select class="form-select mb-4" aria-label="Default select example">
    <option selected>Seleziona Tipologia</option>
    <option value="1">Spell Card</option>
    <option value="2">Effect Monster</option>
    <option value="3">Normal Monster</option>
    <option value="4">Flip Effect Monster</option>
  </select>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.form-select {
  width: 400px;
}
</style>