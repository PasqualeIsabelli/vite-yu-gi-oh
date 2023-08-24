<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardList from './components/CardList.vue';
import FilterDropdown from './components/FilterDropdown.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardList,
    FilterDropdown
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <div class="container">
      <FilterDropdown></FilterDropdown>
      <div class="bg-white">
        <CardList></CardList>
      </div>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
@use './scss/partials/variables' as *;

main {
  background-color: $color-primary;

  .input-group {
    width: 400px;
  }
}
</style>
