import { ref, onMounted, onBeforeUnmount } from 'vue'
import { apiBaseUrl } from '@/constants'
import { usePokemonStore } from '@/stores/pokemon'
import type { Pokemon } from '@/types'

export function usePokemon() {
  const store = usePokemonStore()
  const pokemon = ref<Pokemon>({
    name: '',
    weight: 0,
    height: 0,
    types: []
  })
  const nextUrl = ref(`${apiBaseUrl}?offset=0&limit=20`)
  const loading = ref(false)

  async function fetchPokemonList() {
    if (loading.value || !nextUrl.value) return

    loading.value = true
    try {
      const response = await fetch(nextUrl.value)
      const data = await response.json()
      const pokemonWithFavorites = data.results.map((pokemon: Pokemon) => ({
        ...pokemon,
        favorite: false
      }))
      store.addPokemons(pokemonWithFavorites)
      nextUrl.value = data.next
    } catch (error) {
      console.error('Failed to load Pokémon:', error)
    } finally {
      loading.value = false
    }
  }

  async function fetchPokemon(name: string) {
    try {
      const response = await fetch(`${apiBaseUrl}/${name}`)
      const data = await response.json()
      data.favorite = store.pokemons.find((pokemon) => pokemon.name === name)?.favorite
      pokemon.value = data
    } catch (error) {
      console.error('Failed to fetch Pokemon list:', error)
    }
  }

  const handleScroll = () => {
    const bottomOfWindow =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1
    if (bottomOfWindow) {
      fetchPokemonList()
    }
  }

  onMounted(() => {
    fetchPokemonList()
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    loading,
    pokemon,
    fetchPokemonList,
    fetchPokemon
  }
}
