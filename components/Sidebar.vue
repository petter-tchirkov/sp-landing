<template>
      <nav
        ref="headerNav"
        class="absolute top-0 right-0 xl:hidden min-h-screen bg-green border-l border-l-white p-4 flex-col gap-10 transition"
        :class="isSidebarShown ? 'translate-x-0 flex' : 'translate-x-96 hidden'"
      >
        <ul class="flex flex-col xl:flex-row items-center gap-4">
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/for-restaurants" @click="isSidebarShown = false">
              For restaurants
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/about-us" @click="isSidebarShown = false">About us</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/contact-us" @click="isSidebarShown = false">Contact us</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/faqs" @click="isSidebarShown = false">FAQs</NuxtLink>
          </li>
        </ul>
        <div class="flex flex-col items-center gap-4">
          <LangSwitcher />
          <img src="/user.png" alt="" class="w-10 h-10" />
          <button class="btn btn-light !text-[#1d9e92]">Book a Demo</button>
        </div>
      </nav>
</template>

<script setup lang="ts">
import { onClickOutside, useWindowSize } from "@vueuse/core";
const { isSidebarShown } = storeToRefs(useGlobalStore());
const headerNav = ref();
const { width } = useWindowSize();

onClickOutside(headerNav, () => {
  if (isSidebarShown.value === true) {
    isSidebarShown.value = false;
  }
});
</script>

<style scoped lang="scss">

.router-link-active {
  position: relative;

  &::after {
    content: "";
    width: 80% !important;
    height: 2px;
    background: #000;
    position: absolute;
    bottom: -3px;
    left: 0;
  }
}
</style>
