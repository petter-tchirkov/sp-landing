<template>
  <nav ref="headerNav"
    class="absolute top-0 right-0 xl:hidden min-h-screen bg-green border-l border-l-white p-4 flex-col gap-10 transition"
    :class="isSidebarShown ? 'translate-x-0 flex' : 'translate-x-96 hidden'">
    <div class="close absolute top-4 right-4" @click="isSidebarShown = false">
      <span class="block h-1 w-9 bg-white rotate-45 translate-y-1"></span>
      <span class="block h-1 w-9 bg-white -rotate-45"></span>
    </div>
    <LangSwitcher class="w-fit mx-auto" />
    <ul class="flex flex-col xl:flex-row items-center gap-4">
      <li class="nav__item text-white text-lg">
        <NuxtLink class="nav__link" :to="localePath('/for-restaurants')" @click="isSidebarShown = false">
          {{ $t('header.forRestaurants') }}
        </NuxtLink>
      </li>
      <li class="nav__item text-white text-lg">
        <NuxtLink class="nav__link" :to="localePath('/about-us')" @click="isSidebarShown = false">{{
      $t('header.aboutUs') }}</NuxtLink>
      </li>
      <li class="nav__item text-white text-lg">
        <NuxtLink class="nav__link" :to="localePath('/contact-us')" @click="isSidebarShown = false">{{
      $t('header.contactUs') }}</NuxtLink>
      </li>
      <li class="nav__item text-white text-lg">
        <NuxtLink class="nav__link" :to="localePath('/faqs')" @click="isSidebarShown = false">{{ $t('header.faqs') }}
        </NuxtLink>
      </li>
    </ul>
    <div class="flex flex-col items-center gap-4">
      <button
        class="border w-full border-white rounded-[35px] bg-green text-white py-[11px] px-9 hover:bg-white hover:text-green transition font-bold">
        {{ $t('header.account') }}
      </button>
      <button class="btn btn-light !text-[#1d9e92]">{{ $t('header.bookADemo') }}</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const { isSidebarShown } = storeToRefs(useGlobalStore());
const headerNav = ref();
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
