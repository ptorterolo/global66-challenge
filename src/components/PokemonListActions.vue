<template>
    <div class="custom-shadow fixed bottom-0 left-0 right-0 bg-white py-4 ">
        <div class="container mx-auto px-7">
            <div class="max-w-xl mx-auto">
                <div class="flex items-center justify-center gap-4 lg:gap-5">
                    <button type="button" class="btn flex items-center gap-2 w-full" data-testid="toggleShowFavorites"
                        :class="[!store.showFavorites ? 'btn-primary' : 'btn-secondary']"
                        @click="emit('toggleShowFavorites')">
                        <IconList />All
                    </button>
                    <button type="button" @click="emit('toggleShowFavorites')" class="btn w-full"
                        :class="[store.showFavorites ? 'btn-primary' : 'btn-secondary']">
                        <IconFav class="text-white" />Favorites
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconList from '@/components/icons/IconList.vue';
import IconFav from '@/components/icons/IconFav.vue';
import { usePokemonStore } from '@/stores/pokemon'
const store = usePokemonStore()
const emit = defineEmits(['toggleShowFavorites'])
</script>

<style scoped>
.custom-shadow {
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}
</style>