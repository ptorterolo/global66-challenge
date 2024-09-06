<template>
    <div class="min-h-screen bg-gray-50 ">
        <div class="container mx-auto pt-8 px-7 pb-20 ">
            <div class="max-w-xl mx-auto">
                <div class="flex items-center gap-4 lg:gap-5 relative mb-10">
                    <IconSearch class="absolute left-4" />
                    <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md pl-10"
                        placeholder="Search" v-model.trim="search" />
                </div>
                <div v-if="loading" class="loading">Loading...</div>
                <template v-if="filteredPokemonList.length">
                    <ul>
                        <li v-for="(pokemon, index) in filteredPokemonList" :key="index">
                            <PokemonCard @click="getPokemonData(pokemon.name)" :name="pokemon.name"
                                :isFavorite="pokemon.favorite" @handleFavorite="handleFavorite(pokemon)" />
                        </li>
                    </ul>
                </template>
                <template v-else-if="search !== ''">
                    <PokemonNotFound />
                </template>
            </div>
        </div>
        <PokemonModal v-if="showModal" @close="showModal = false" :pokemon="currentPokemon"
            @handleFavorite="handleModalFavorite" />

        <PokemonListActions @toggleShowFavorites="toggleShowFavorites" />

    </div>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import PokemonNotFound from '@/components/PokemonNotFound.vue';
import PokemonModal from '@/components/PokemonModal.vue';
import PokemonListActions from '@/components/PokemonListActions.vue';
import { ref, computed } from 'vue'
import { usePokemon } from '@/composables/usePokemon'
import { usePokemonStore } from '@/stores/pokemon'
import type { Pokemon } from '@/types'
const store = usePokemonStore()

const search = ref('')
const showModal = ref(false)
const pokemonList = computed(() => {
    return store.showFavorites ? store.favorites : store.pokemons
})

const { loading, fetchPokemon, pokemon: currentPokemon } = usePokemon()

const filteredPokemonList = computed(() => {
    if (search.value) {
        return pokemonList.value.filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase()));
    } else {
        return pokemonList.value;
    }
});

async function getPokemonData(name: string) {
    try {
        await fetchPokemon(name)
        showModal.value = true
    } catch (error) {
        console.error(error)
    }
}

function handleModalFavorite() {
    currentPokemon.value.favorite = !currentPokemon.value.favorite
    store.pokemons.find(pokemon => pokemon.name === currentPokemon.value.name)!.favorite = currentPokemon.value.favorite
}

function handleFavorite(pokemon: Pokemon) {
    store.toggleFavorite(pokemon)
}
function toggleShowFavorites() {
    store.showFavorites = !store.showFavorites
}
</script>

<style scoped></style>