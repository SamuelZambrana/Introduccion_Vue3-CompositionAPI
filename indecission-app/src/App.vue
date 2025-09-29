<template>
  <h1 class="text-3xl font-bold underline">Hola dev</h1>

  <hr />

  <MuyCounter :value="5"/>
  <MyCounterScript :value="5" />
  <MyCounterScript2 :value="5" />

</template>

<script lang="ts" setup>
import MuyCounter from './components/MuyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/myCounterScript/MyCounterScript2.vue';


</script>

<style>

</style>