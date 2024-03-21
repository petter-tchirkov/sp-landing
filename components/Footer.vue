<template>
  <footer class="footer pt-[220px]">
    <div class="footer__content flex flex-col lg:flex-row px-11 xl:px-40 justify-between lg:mb-20">
      <div class="footer__logo mb-7 xl:mb-0">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <ul class="flex flex-col xl:flex-row xl:items-center gap-9 mb-9 xl:mb-0">
        <li class="nav__item text-white text-lg">
          <NuxtLink class="nav__link" :to="localePath('/for-restaurants')">
            {{ $t('header.forRestaurants') }}
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
      <div class="footer__socials mb-14 xl:mb-0">
        <img src="/ig.png" alt="" class="w-6 h-6" />
        <img src="/fb.png" alt="" class="w-6 h-6" />
      </div>
    </div>
    <div class="border-t border-t-white py-9">
      <p class="text-center text-white text-xs font-light">
        Website created by WebPixel © 2024
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.footer {
  background: url(/footer.png);
  background-size: cover;

  &__socials {
    display: flex;
    gap: 15px;
  }
}
</style>
