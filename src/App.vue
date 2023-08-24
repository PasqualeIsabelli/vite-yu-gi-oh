<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardList from './components/CardList.vue';
import Dropdown from './components/Dropdown.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardList,
    Dropdown
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
      <Dropdown></Dropdown>
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
