<script>
export default {
  data() {
    return {}
  }
}
</script>


<template>
  <div class="dropdown mb-4 pt-4">
    <button class="btn btn-light dropdown-toggle fs-4 fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleziona Tipologia</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Spell Card</a></li>
      <li><a class="dropdown-item" href="#">Effect Monster</a></li>
      <li><a class="dropdown-item" href="#">Normal Monster</a></li>
      <li><a class="dropdown-item" href="#">Flip Effect Monster</a></li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

</style>