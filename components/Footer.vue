<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav class="footer__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/for-restaurants">
              For restaurants
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/about-us">About us</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/contact-us">Contact us</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" to="/faqs">FAQs</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="footer__socials">
        <img src="/ig.png" alt="" />
        <img src="/fb.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  background: url(/footer.png);
  padding-top: 190px;
  padding-bottom: 90px;

  &__content {
    display: flex;
    align-items: center;
    padding-inline: 165px;
    justify-content: space-between;
  }

  &__socials {
    display: flex;
    gap: 15px;
  }
}
</style>
