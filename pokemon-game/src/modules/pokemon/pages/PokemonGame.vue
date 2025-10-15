<template>
    <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-2xl font-bold">Espere por favor</h1>
        <h3 class="animate-pulse">Estamos cargando los pokemons</h3>
    </section>

    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-4xl font-bold mb-3">Pokemon Game</h1>
        <h3 class="text-lg mb-3">¿Quien es ese pokemon?</h3>

        <!-- Pokemon Picture -->
        <PokemonPicture />

        <!-- Pokemon Opcions -->
        <PokemonOptions />

    </section>


</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { gameStatus, getPokemons } = usePokemonGame();

</script>

<style scoped>

</style>