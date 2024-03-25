<template>
  <div class="h-10">
    <span>{{ showText }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{ text: string }>()


const showText = ref('')
let index = 1
let decrementIndex = 1
let isDecrement = false
const incrementText = () => {
  if (!isDecrement) {
    showText.value = props.text.slice(0, index)
    index++
  }
}
const decrementText = () => {
  showText.value = props.text.slice(0, -decrementIndex)
  decrementIndex++
  if (showText.value === '') {
    isDecrement = false
    index = 1
    decrementIndex = 1
  }
}

const operateText = () => {
  if (index === props.text.length + 1) {
    isDecrement = true
    decrementText()
  } else {
    incrementText()
  }
}
onMounted(() => { setInterval(operateText, 300) })
</script>
