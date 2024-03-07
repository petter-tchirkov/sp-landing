<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="after:hidden">
        <img class="header__logo" src="/logo.svg" />
      </NuxtLink>
      <nav class="header__nav nav">
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
      <div class="header__right">
        <LangSwitcher />
        <img src="/user.png" alt="" />
        <button class="btn btn-light !text-[#1d9e92]">Book a Demo</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding-top: 42px;
  padding-bottom: 28px;
  border-bottom: 1px solid #fff;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding-inline: 165px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-left: 100px;
    margin-bottom: 10px;
  }

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
