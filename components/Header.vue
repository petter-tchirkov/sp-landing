<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { isSidebarShown } = storeToRefs(useGlobalStore());
const { y } = useWindowScroll();
const localePath = useLocalePath();

onBeforeMount(() => {
  y.value = 0;
});
</script>

<template>
  <header class="py-10 w-full border-b border-b-white fixed top-0 left-0 z-20 transition"
    :class="y > 100 ? 'bg-green' : 'bg-transparent'">
    <div class="flex items-center justify-between px-11 xl:px-40 w-full max-w-dp mx-auto">
      <NuxtLink to="/" class="after:hidden">
        <img src="/logo.svg" class="w-[160px]" />
      </NuxtLink>
      <ul class="hidden xl:flex items-center gap-4">
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/for-restaurants')">
            {{ $t("header.forRestaurants") }}
          </NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/about-us')">{{ $t('header.aboutUs') }}</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/contact-us')">{{ $t('header.contactUs') }}</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/faqs')">{{ $t('header.faqs') }}</NuxtLink>
        </li>
      </ul>
      <button class="xl:hidden" @click="isSidebarShown = !isSidebarShown">
        <img src="/burger.svg" alt="" />
      </button>
      <div class="hidden xl:flex items-center gap-5 mb-2 lg:mb-0 ml-12">
        <LangSwitcher />
        <button
          class="border border-white rounded-[35px] bg-green text-white py-[11px] px-9 hover:bg-white hover:text-green transition font-bold">
          {{ $t('header.account') }}
        </button>
        <button class="btn btn-light !text-[#1d9e92]">{{ $t('header.bookADemo') }}</button>
      </div>
    </div>
    <Sidebar />
  </header>
</template>

<style scoped lang="scss">
.header {
  a {
    position: relative;
    transition: all 0.3s;

    &::after {
      content: "";
      width: 0%;
      height: 2px;
      background: #000;
      position: absolute;
      bottom: -3px;
      left: 0;
      transition: width 0.3s;
    }

    &:hover {
      &::after {
        width: 80%;
      }
    }
  }
}

.nav {
  &__link {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
}

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
