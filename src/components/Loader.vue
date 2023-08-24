<script>
export default {

}
</script>


<template>
  <div class="loader d-flex justify-content-center align-items-center">
    <div class="spinner-grow text-dark size" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.loader {
  position: absolute;
  inset: 0;
  background-color: $color-primary;
  .size {
    width: 100px;
    height: 100px;
  }
}
</style>