<template>
    <div v-if="!loading" class="flex items-center justify-center min-h-screen bg-gray-50">
        <div class="text-center p-6">
            <img src="@/assets/images/pikachu.png" alt="Pikachu Welcome" class="mx-auto h-72 w-72" />

            <h1 class="mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
                Welcome to Pokédex
            </h1>

            <p class="mt-4 text-gray-600 text-lg md:max-w-xl">
                The digital encyclopedia created by Professor Oak is an invaluable tool
                <span class="md:block">to Trainers in the Pokémon world.</span>
            </p>

            <button type="button" @click="loadNextPage" class="mt-6 inline-block btn btn-primary px-6">
                Get started
            </button>
        </div>
    </div>
    <PokemonLoading v-if="loading" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PokemonLoading from './PokemonLoading.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const loading = ref(false);
function loadNextPage() {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        router.push({ name: 'pokemon.list' });
    }, 2000);
}
</script>

<style scoped></style>