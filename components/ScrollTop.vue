<template>
    <div v-if="y > 200" class="rounded-full w-12 h-12 bg-green fixed bottom-4 right-4 border-4 border-white" @click="y = 0">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const {y} = useWindowScroll({ behavior: 'smooth' })
</script>

<style scoped>

</style>