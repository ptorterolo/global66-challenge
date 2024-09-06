<template>
    <!-- Modal -->
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="rounded min-w-80 lg:w-1/4 relative z-10">
            <div class="bg-pokemon bg-center min-h-56 relative flex items-center justify-center">
                <button @click.stop="emit('close')" class="absolute top-4 right-4">
                    <IconClose class="w-6 h-6 text-white" />
                </button>
                <img :src="pokemon.sprites?.other?.['official-artwork'].front_default" :alt="pokemon.name"
                    class="w-44 h-auto" />
            </div>
            <article class="bg-white p-6 text-gray-600 text-lg font-extrabold">
                <div class="border-b border-gray-200 pb-2">
                    Name:<span class="ml-2 capitalize font-bold">{{ pokemon.name }}</span>
                </div>
                <div class="border-b border-gray-200 py-2">
                    Weight:<span class="ml-2 capitalize font-bold">{{ pokemon.weight }}</span>
                </div>
                <div class="border-b border-gray-200 py-2">
                    Height:<span class="ml-2 capitalize font-bold">{{ pokemon.height }}</span>
                </div>
                <div class="border-b border-gray-200 py-2">
                    Types:<span class="ml-2 capitalize font-bold">{{ getTypes(pokemon.types) }}</span>
                </div>
                <section class="flex items-center justify-between gap-4 mt-4">
                    <button type="button" @click.stop="copyData" data-testId="share" class="btn btn-primary">Share to my
                        friends</button>
                    <button type="button" data-testId="handleFavorite" @click.stop="emit('handleFavorite')"
                        class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">
                        <IconFav :class="pokemon.favorite ? 'text-orange-400' : 'text-gray-300'" />
                    </button>
                </section>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconFav from './icons/IconFav.vue';
import IconClose from './icons/IconClose.vue';
import type { PokemonTypes } from '@/types'

const emit = defineEmits(['close', 'handleFavorite'])
const props = defineProps(['pokemon']);
function getTypes(types: PokemonTypes[]) {
    return types.map(type => type.type.name).join(', ')
}
function copyData() {
    const pokemonData = `Name: ${props.pokemon.name}\nWeight: ${props.pokemon.weight}\nHeight: ${props.pokemon.height}\nTypes: ${props.pokemon.types.map(type => type.type.name).join(', ')}`;
    navigator.clipboard.writeText(pokemonData);
}


</script>

<style scoped></style>