import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const isSidebarShown = ref(false);
  const isLoading = ref(false);

  const a = ref(4);
  a.value = "5";

  const loading = () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  };

  return { isSidebarShown, isLoading, loading };
});
