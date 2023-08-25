<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
    }
  }
}
</script>


<template>
  <select class="form-select mb-4" aria-label="Default select example">
    <option selected>Seleziona Tipologia</option>
    <option value="1" v-for="singleType in store.type"></option> <!--DA SISTEMARE-->
    <!-- <option value="1">Spell Card</option>
    <option value="2">Effect Monster</option>
    <option value="3">Normal Monster</option>
    <option value="4">Flip Effect Monster</option>
    <option value="5">Trap Card</option>
    <option value="6">Union Effect Monster</option>
    <option value="7">Fusion Monster</option>
    <option value="8">Pendulum Effect Monster</option>
    <option value="9">Link Monster</option>
    <option value="10">XYZ Monster</option>
    <option value="11">Synchro Monster</option>
    <option value="12">Tuner Monster</option>
    <option value="13">Gemini Monster</option>
    <option value="14">Spirit Monster</option>
    <option value="15">Ritual Effect Monster</option>
    <option value="16">Skill Card</option>
    <option value="17">Tuner Monster</option>
    <option value="18">Token</option> -->
  </select>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.form-select {
  width: 400px;
}
</style>