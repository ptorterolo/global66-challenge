<template>
    <div class="flex justify-center">
        <div class="text-center">
            <h1 class="mt-6 text-4xl font-bold text-gray-800 sm:text-3xl">
                Uh-oh!
            </h1>
            <p class="mt-4 text-gray-600 text-lg md:max-w-xl">
                You look lost on your journey!
            </p>
            <router-link :to="{ name: 'home' }" class="mt-6 inline-block btn btn-primary px-6">
                Go back home
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>