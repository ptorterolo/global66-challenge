<template>
    <div class="bg-white flex items-center justify-between p-4 mb-4 cursor-pointer">
        <span class="text-gray-800 text-xl capitalize">{{ name }}</span>
        <button type="button" @click.stop="emit('handleFavorite')"
            class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">
            <IconFav data-testid="favIcon" :class="isFavorite ? 'text-orange-400' : 'text-gray-300'" />
        </button>
    </div>
</template>

<script setup lang="ts">
import IconFav from './icons/IconFav.vue';
const emit = defineEmits(['handleFavorite']);

defineProps({
    name: {
        type: String,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
});

</script>

<style scoped></style>