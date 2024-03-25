<template>
  <span>{{ showText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{ text: string }>()


const showText = ref('')
let index = 1
const changeText = () => {
  showText.value = props.text.slice(0, index)
  index++
  if (index > props.text.length) {
    index--
  }
}
onMounted(() => { setInterval(changeText, 300) })
</script>
