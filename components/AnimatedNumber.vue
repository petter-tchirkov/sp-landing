<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const { maxValue = 0 } = defineProps<{ maxValue: number }>()
const initial = ref(0)
let interval = 1000
let duration = Math.floor(interval / maxValue)

const counter = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  counter,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
  },
)

watch(isVisible, (value) => {
  if (value) {
    const i = setInterval(() => {
      initial.value++
      if (initial.value === maxValue) {
        clearInterval(i)
      }
    }, duration)
    initial.value = 0

  }
})


</script>
<template>
  <div ref="counter">
    <span>{{ initial }}</span>
  </div>
</template>
