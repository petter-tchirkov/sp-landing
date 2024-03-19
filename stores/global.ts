import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const isSidebarShown = ref(false);

  return { isSidebarShown };
});
