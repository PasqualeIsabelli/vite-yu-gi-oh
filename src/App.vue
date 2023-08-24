<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CardList
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
      <div class="dropdown mb-4 pt-4"> <!--PERCHE NON APRE IL DROPDOWN?-->
        <button class="btn btn-light dropdown-toggle fs-4 fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleziona Tipologia</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
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
