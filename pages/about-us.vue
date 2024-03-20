<template>
  <div class="wrapper pt-20 lg:pt-44">
    <PreLoader />
    <Header class="!bg-green"/>
    <div class="text-center">
      <h2 class="text-[40px] lg:text-[64px] font-bold uppercase mb-6">{{$t('about.aboutUs')}}</h2>
    </div>
    <div class="flex long-text lg:pt-4 relative bg-[url(/about-us/bg1.png)]" style="background-position: 80%;">
      <!-- <img src="/about-us/bg1.png" alt="" class="object-cover absolute -bottom-48 left-0 -z-10 h-[150%] lg:hidden"> -->
      <div class="m-auto flex flex-col lg:flex-row justify-between gap-14 items-center xl:pt-72 pb-96 container xl:px-40">
        <div class="px-11 xl:px-0">
          <p class="text-white text-lg mb-7">
            {{$t('about.ourP')}}
          </p>
          <p class="text-white text-lg">
            {{$t('about.once')}}
          </p>
          <p class="text-white text-lg">
            {{$t('about.quick')}}
          </p>
        </div>
        <img class="px-11" src="/about-us/1.png" alt="" />
      </div>
    </div>
    <div class="map m-auto max-w-[1110px] px-11 lg:px-0">
      <h2
        class="bg-green px-[38px] py-9 lg:py-2 rounded-[33px] lg:rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto">
        {{$t('about.over')}}
      </h2>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16">
        {{$t('about.countries')}}
      </p>
      <img class="mx-auto mb-32" src="/about-us/map.png" alt="" />
    </div>
    <div class="who-we-are">
      <h2
        class="bg-green px-[38px] py-2 rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto">
        {{$t('about.who.who')}}
      </h2>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16 px-11 lg:px-0">
        {{$t('about.who.ourTeam')}}
      </p>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16 px-11 lg:px-0">
        {{$t('about.who.weD')}}
      </p>
      <img class="mx-auto mb-16 lg:mb-24" :src="width > 768 ? '/about-us/photos.png' : '/about-us/photos-mob.png'"
        alt="" />
      <div
        class="flex flex-col lg:flex-row justify-between mx-auto max-w-[1110px] mb-[200px] px-11 lg:px-0 gap-12 lg:gap-0">
        <div class="flex gap-4 max-w-[300px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>
            {{$t('about.noMore')}}
          </p>
        </div>
        <div class="flex gap-4 max-w-[240px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>
            {{$t('about.noMore2')}}
          </p>
        </div>
        <div class="flex gap-4 max-w-[160px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>{{$t('about.flawless')}}</p>
        </div>
      </div>
      <div class="bg-green py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-11 xl:px-60 mb-20">
        <span class="text-white text-2xl">{{$t('applyForm.join')}}</span>
        <button class="btn btn-light">{{$t('header.bookADemo')}}</button>
      </div>
      <ApplyForm src="/index/customer.png" />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();
</script>

<style scoped lang="scss">
@media screen and (min-width: 1024px) {
  .long-text {
    background: url("/about-us/bg1.png") center center no-repeat;
    background-size: cover;
  }

}
</style>
