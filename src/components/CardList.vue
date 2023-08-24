<script>
import SingleCard from "./SingleCard.vue";
import Loader from "./Loader.vue";
import { store, fetchCards } from "../store";

export default {
  components: {
    SingleCard,
    Loader
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    fetchCards();
  }
}
</script>

<template>
  <div class="p-5">
    <div class="bg-dark text-white p-3 fw-bold fs-4">FOUND</div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        <div class="col" v-for="singleCard in store.cards" :key="singleCard.id">
          <SingleCard :card="singleCard"></SingleCard>
        </div>
    </div>
  </div>

  <Loader v-if="store.isLoading"></Loader>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

</style>