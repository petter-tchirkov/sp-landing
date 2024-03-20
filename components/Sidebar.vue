<template>
      <nav
        ref="headerNav"
        class="absolute top-0 right-0 xl:hidden min-h-screen bg-green border-l border-l-white p-4 flex-col gap-10 transition"
        :class="isSidebarShown ? 'translate-x-0 flex' : 'translate-x-96 hidden'"
      >
        <ul class="flex flex-col xl:flex-row items-center gap-4">
          <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/for-restaurants')">
            {{$t('header.forRestaurants')}}
          </NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/about-us')">{{$t('header.aboutUs')}}</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/contact-us')">{{$t('header.contactUs')}}</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/faqs')">{{$t('header.faqs')}}</NuxtLink>
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
const localePath = useLocalePath();

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
