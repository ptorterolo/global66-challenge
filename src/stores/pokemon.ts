import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Pokemon } from '@/types'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([])
  const favorites = computed(() => pokemons.value.filter((pokemon) => pokemon.favorite))
  const showFavorites = ref(false)

  const addPokemons = (payload: Pokemon[]) => {
    pokemons.value.push(...payload)
  }

  const toggleFavorite = (pokemon: Pokemon) => {
    pokemon.favorite = !pokemon.favorite
  }

  return {
    pokemons,
    favorites,
    showFavorites,
    addPokemons,
    toggleFavorite
  }
})
