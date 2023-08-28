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
  methods: {
    fetchNextPage() {
      fetchCards(store.paginationInfo.next_page)
    },
    fetchPrevPage() {
      fetchCards(store.paginationInfo.previous_page)
    }
  },
  mounted() {
    fetchCards();
  }
}
</script>

<template>
  <div class="p-5">
    <div class="bg-dark text-white p-3 mb-3 fw-bold fs-4">Found {{ store.card.length }} results</div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        <div class="col" v-for="singleCard in store.card" :key="singleCard.id">
          <SingleCard :card="singleCard"></SingleCard>
        </div>
    </div>
    <div class="text-center px-5 d-flex justify-content-between">
      <button type="button" class="btn mt-5 fw-bold fs-3 px-4" @click="fetchPrevPage"><i class="fa-solid fa-angle-left" style="color: #000000;"></i> Pagina precedente</button>
      <button type="button" class="btn mt-5 fw-bold fs-3 px-4" @click="fetchNextPage">Pagina successiva <i class="fa-solid fa-angle-right" style="color: #000000;"></i></button>
    </div>
  </div>

  <Loader v-if="store.isLoading"></Loader>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.btn {
  background-color: $color-primary;
}

</style>