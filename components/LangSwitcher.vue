<template>
  <Dropdown
    v-model="selectedLanguage"
    :options="languages"
    option-label="name"
    option-value="code"
    :pt="{
      root: ({ state }) => ({
        class: [
          'bg-white',
          'px-4 py-[10px]',
          'cursor-pointer',
          'flex gap-3',
          state.overlayVisible ? 'rounded-t-[16px]' : 'rounded-[30px]',
        ],
      }),
      list: ({ state }) => {
        return {
          class: [
            'rounded-b-[16px]',
            'bg-white',
            'transition-all',
            'duration-300',
            'py-2',
            'w-[103%]',
            'translate-x-[-1px]',
            state.overlayVisible
              ? 'border border-green border-t-transparent'
              : 'border-none',
          ],
        };
      },
      item: ({ state }) => ({
        class: [
          'px-4 py-2',
          'cursor-pointer',
          'hover:bg-green hover:bg-opacity-20',
          'last:rounded-b-[8px]',
        ],
      }),
    }"
  >
    <template #value="{ value }">
      <LanguageIcon :lang="value" />
    </template>
    <template #option="{ option }">
      <div class="flex gap-2 items-center text-green">
        <LanguageIcon :lang="option.code" class="w-6 h-6"/>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
const selectedLanguage = ref("en");
const languages = ref([
  { name: "English", code: "en" },
  { name: "Espaniol", code: "es" },
  { name: "Deutsch", code: "de" },
  { name: "Українська", code: "ua" },
]);
</script>

<style scoped></style>
