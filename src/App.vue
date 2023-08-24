<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardList from './components/CardList.vue';
import SelectMenu from './components/SelectMenu.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardList,
    SelectMenu
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
      <br>
      <SelectMenu></SelectMenu>
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
