<template>
  <div>
    <div class="hero relative bg-cover bg-center">
      <PreLoader />
      <ScrollTop />
      <Header />
      <div class="hero__content max-w-[1440px] m-auto px-11 xl:px-40 pb-20 xl:pb-[236px] lg:pb-[150px]">
        <div class="hero__text flex flex-col w-full pt-28 !max-w-full">
          <h1 class="hero__title text-[40px] lg:text-[64px] font-bold uppercase pt-8 lg:pt-32">{{ $t('forR.one') }}
          </h1>
          <h2 class="hero__subtitle text-[36px] lg:text-[48px] font-bold uppercase text-white mb-7">
            <TypeWritter :text="$t('forR.forBoth')" />
          </h2>
          <p class="hero__paragraph">
            {{ $t('forR.fastSync') }}
          </p>
          <button class="btn btn-light w-fit" @click="scrollToForm('.apply', 150)">{{ $t('header.bookADemo') }}</button>
        </div>
      </div>
    </div>
    <div class="px-11 xl:px-40">
      <div
        class="advantages bg-green flex flex-col lg:flex-row gap-5 py-7 rounded-[45px] lg:rounded-full max-w-[1110px] mt-20 mx-auto px-9 justify-between text-white mb-[150px]">
        <div class="flex gap-4 max-w-[350px]">
          <img src="/icons/check-white.svg" alt="" />
          <span>{{ $t('forR.fastSync') }}</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>{{ $t('forR.saveTime') }}</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>{{ $t('forR.saveMoney') }}</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>{{ $t('forR.earnLoyalty') }}</span>
        </div>
      </div>
    </div>
    <div class="how-it-works container mx-auto !mb-[140px] px-11 xl:px-40">
      <h2 class="uppercase text-[40px] font-bold mb-12">
        {{ $t('forR.how.how') }} <p class="text-green">{{ $t('forR.how.itWorks') }}</p>
      </h2>
      <div class="flex gap-14 flex-col lg:flex-row">
        <div class="flex flex-col bg-green justify-between pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="pl-7 flex flex-col justify-between">
            <h3 class="font-bold text-2xl w-full max-w-[270px]">{{ $t('forR.how.sync') }}</h3>
            <h3 class="font-bold text-white mb-7">{{ $t('forR.how.inMin') }}</h3>
            <p class="text-white mb-10 max-w-[250px]">
              {{ $t('forR.how.syncText') }}
            </p>
          </div>
          <img src="/for-restaurants/card1.png" alt="" class="h-44" />
        </div>
        <div class="flex flex-col bg-green justify-between pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="pl-7 flex flex-col justify-between">
            <h3 class="font-bold text-2xl">{{ $t('forR.how.setup') }}</h3>
            <h3 class="font-bold text-white mb-7">{{ $t('forR.how.inMinutes') }}</h3>
            <p class="text-white mb-10 max-w-[250px]">
              {{ $t('forR.how.setuptext') }}
            </p>
          </div>
          <img src="/for-restaurants/card2.png" alt="" class="h-44" />
        </div>
        <div class="flex flex-col bg-green justify-between pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="px-7 flex flex-col justify-between">
            <h3 class="font-bold text-2xl">{{ $t('forR.how.collect') }}</h3>
            <h3 class="font-bold text-white mb-7">{{ $t('forR.how.inSec') }}</h3>
            <p class="text-white mb-10 max-w-[250px]">
              {{ $t('forR.how.collectText') }}
            </p>
          </div>
          <img src="/for-restaurants/card3.png" alt="" class="h-44" />
        </div>
      </div>
    </div>
    <div class="perfect-host m-auto px-11 xl:px-40 container">
      <h2 class="text-[32px] xl:text-[40px] uppercase font-bold">
        {{ $t('forR.perfectHost.ensure') }} <span class="green-title">{{ $t('forR.perfectHost.withQuicker') }}</span>
      </h2>
      <h2 class="green-title mb-16">{{ $t('forR.perfectHost.checkins') }}</h2>
      <div class="flex flex-col lg:flex-row  items-center justify-between mb-[90px]">
        <div class="flex flex-col">
          <h3 class="text-white bg-green uppercase rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            {{ $t('forR.perfectHost.qr') }}
          </h3>
          <p class="text-xl max-w-96 mb-12">
            {{ $t('forR.perfectHost.qrText') }}
          </p>
        </div>
        <img src="/for-restaurants/perfect-host.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row-reverse  items-center justify-between mb-[90px] lg:gap-32">
        <div class="flex flex-col">
          <h3 class="text-white bg-green uppercase rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            {{ $t('forR.perfectHost.ci') }}
          </h3>
          <p class="text-xl max-w-96 mb-12">
            {{ $t('forR.perfectHost.ciText') }}
          </p>
        </div>
        <img src="/for-restaurants/perfect-host2.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row  items-center justify-between mb-[90px] lg:gap-32">
        <div class="flex flex-col">
          <h3 class="text-white uppercase bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            {{ $t('forR.perfectHost.noApp') }}
          </h3>
          <p class="text-xl max-w-96 mb-12">
            {{ $t('forR.perfectHost.noAppText') }}
          </p>
        </div>
        <img src="/for-restaurants/perfect-host3.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row-reverse  items-center justify-between mb-40">
        <div class="flex flex-col">
          <h3 class="text-white bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            {{ $t('forR.perfectHost.rtd') }}
          </h3>
          <p class="text-xl max-w-96 mb-12">
            {{ $t('forR.perfectHost.rtdText') }}
          </p>
        </div>
        <img src="/for-restaurants/perfect-host4.png" alt="" />
      </div>
    </div>
    <div class="integrates mx-auto container px-4 xl:px-40">
      <h2 class="uppercase text-[40px] font-bold">{{ $t('forR.primed.primed') }}</h2>
      <h2 class="uppercase text-[36px] font-bold mb-6 text-green">
        {{ $t('forR.primed.toJoin') }}
      </h2>
      <p class="text-xl mb-14">
        {{ $t('forR.primed.already') }}
      </p>
      <div class="bg-green py-12 rounded-[59px] mb-16 xl:mb-[187px]"
        style="box-shadow: 0px 4px 10.5px rgba(0, 0, 0, 0.25)">
        <carousel :items-to-show="width > 1024 ? 5 : 1" :transition="2000" :autoplay="200" :wrap-around="true">
          <slide v-for="slide in 15" :key="slide">
            <img :src="`/brands/${slide}.webp`" alt="" class="w-64 mr-4 h-28 object-contain bg-white" />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
    <div class="go-live pt-48 lg:pb-[250px] lg:pt-[120px] pb-64">
      <div class="mx-auto max-w-[1110px]">
        <h2 class="text-[40px] uppercase text-center font-bold my-28 px-4 xl:px-0">
          {{ $t('forR.goLive.go') }}<br /> <span class="text-white">{{ $t('forR.goLive.than48') }}</span>
        </h2>
        <div class="grid-cols-1 lg:grid-cols-2 justify-between max-w-[886px] m-auto gap-24 grid">
          <div class="max-w-[350px]">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-10 lg:translate-x-0">
              1. {{ $t('forR.goLive.youReach') }}
            </p>
            <p class="text-white pl-11 lx:pl-0">
              {{ $t('forR.goLive.youReachText') }}
            </p>
          </div>
          <div class="max-w-[350px] lg:justify-self-end ">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-10 lg:translate-x-0">
              2. {{ $t('forR.goLive.weGen') }}
            </p>
            <p class="text-white pl-11 lx:pl-0">
              {{ $t('forR.goLive.weGenText') }}
            </p>
          </div>
          <div class="max-w-[350px]">
            <p
              class="px-10 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-10 lg:translate-x-0">
              3. {{ $t('forR.goLive.train') }}
            </p>
            <p class="text-white pl-11 lx:pl-0">
              {{ $t('forR.goLive.trainText') }}
            </p>
          </div>
          <div class="max-w-[350px]  lg:justify-self-end">
            <p
              class="px-16 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-10 lg:translate-x-0">
              4. {{ $t('forR.goLive.accept') }}
            </p>
            <p class="text-white pl-11 lx:pl-0">
              {{ $t('forR.goLive.acceptText') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <ApplyForm src="/for-restaurants/form.png" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

const scrollToForm = (selector: string, offset: number) => {
  window.scrollTo({
    behavior: 'smooth',
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  })
};


</script>

<style scoped lang="scss">
.hero {
  background: url("/for-restaurants/hero.jpeg");

  &__paragraph {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: left;
    margin-bottom: 40px;

    color: #ffffff;
  }
}

.go-live {
  background: url("/for-restaurants/go-live.jpeg");
  background-position: center center;
  background-size: cover;
}

@media screen and (max-width: 1024px) {
  .hero {
    background-position: 70% top;
    background-repeat: no-repeat
  }

  .go-live {
    background-position: 23% center;
  }
}


@media screen and (min-width: 1024px) {
  .hero {
    background-position: 60% top;
    background-size: cover;
  }
}
</style>
