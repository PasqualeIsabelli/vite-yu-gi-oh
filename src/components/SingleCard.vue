<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card h-100 border-0 rounded-0">
    <img :src="card.card_images[0].image_url" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title text-white text-center">{{ card.name.toUpperCase() }}</h5>
      <p class="card-text text-center fw-bold">{{ card.archetype }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
.card {
  background-color: $color-primary;
}
</style>