<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Card from './components/Card.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    Card
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
      <div class="input-group mb-4 pt-4">
        <input type="text" class="form-control" placeholder="Nome o tipo di Carta">
        <button class="btn btn-outline-dark" type="button">Cerca</button>
      </div>
      <div class="bg-white">
        <Card></Card>
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
