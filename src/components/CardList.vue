<script>
import axios from "axios";
import SingleCard from "./SingleCard.vue"

export default {
  components: {
    SingleCard
  },
  data() {
    return {
      cards: [],
    }
  },
  methods: {
    fetchCards() {
      const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

      axios.get(url).then((response) => {
        this.cards = response.data.data;
      });
    }
  },
  mounted() {
    this.fetchCards();
  }
}
</script>

<template>
  <div class="p-5">
    <div class="bg-dark text-white p-3 fw-bold fs-4">FOUND</div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        <div class="col" v-for="singleCard in cards" :key="singleCard.id">
          <SingleCard :card="singleCard"></SingleCard>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

</style>