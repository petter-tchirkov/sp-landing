<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const { isSidebarShown } = storeToRefs(useGlobalStore());
const { x, y } = useWindowScroll()


onBeforeMount(() => {
  y.value = 0
})
</script>

<template>
  <header class="py-10 w-full border-b border-b-white fixed top-0 left-0 lg:relative z-20 transition"
    :class="y > 100 ? 'bg-green' : 'bg-transparent'">
    <div class="flex items-center justify-between px-11 xl:px-40 w-full max-w-dp mx-auto">
      <NuxtLink to="/" class="after:hidden">
        <img src="/logo.svg" />
      </NuxtLink>
      <ul class="hidden xl:flex items-center gap-4">
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" to="/for-restaurants">
            For restaurants
          </NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" to="/about-us">About us</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" to="/contact-us">Contact us</NuxtLink>
        </li>
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" to="/faqs">FAQs</NuxtLink>
        </li>
      </ul>
      <button class="xl:hidden" @click="isSidebarShown = !isSidebarShown">
        <img src="/burger.svg" alt="" />
      </button>
      <div class="hidden xl:flex items-center gap-5 mb-2 ml-24">
        <LangSwitcher />
        <img src="/user.png" alt="" />
        <button class="btn btn-light !text-[#1d9e92]">Book a Demo</button>
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
