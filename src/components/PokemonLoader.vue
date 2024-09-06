<template>
    <div class="animate-bounce-wrapper">
        <img src="@/assets/images/pokeball.png" alt="Loading..." class="w-28 h-28 animate-spin">
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

.animate-bounce-wrapper {
    animation: bounce 1s ease-in-out infinite;
}
</style>