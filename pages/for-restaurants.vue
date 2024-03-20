<template>
  <div >
    <div class="hero relative bg-cover bg-center">
        <PreLoader v-if="isLoading" />
      <Header />
      <div class="hero__content max-w-[1440px] m-auto px-11 xl:px-40 pb-[236px] lg:pb-[150px]">
        <div class="hero__text flex flex-col w-full pt-28">
          <h1 class="hero__title text-[40px] lg:text-[64px] font-bold uppercase  pt-20 lg:pt-32">menu and payment in</h1>
          <h2 class="hero__subtitle text-[36px] lg:text-[48px] font-bold uppercase text-white mb-7">one scan</h2>
          <p class="hero__paragraph">
            Enhance the experience for your customers and staff
          </p>
          <button class="btn btn-light w-auto">Book a Demo</button>
        </div>
      </div>
    </div>
    <div class="px-11 xl:px-40">
      <div
        class="advantages bg-green flex flex-col lg:flex-row gap-5 py-7 rounded-[45px] lg:rounded-full max-w-[1110px] mt-20 mx-auto px-9 justify-between text-white mb-[150px]">
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>Turn tables quicker</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>Earn more tips</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>Swift secure payment</span>
        </div>
        <div class="flex gap-4">
          <img src="/icons/check-white.svg" alt="" />
          <span>No app, no registration</span>
        </div>
      </div>
    </div>
    <div class="how-it-works container mx-auto !mb-[140px] px-11 xl:px-40">
      <h2 class="uppercase text-[40px] font-bold mb-12">
        HOW <p class="text-green">IT WORKS</p>
      </h2>
      <div class="flex gap-14 flex-col lg:flex-row">
        <div class="flex flex-col bg-green pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="pl-7">
            <h3 class="font-bold text-2xl">Sync your POS</h3>
            <h3 class="font-bold text-white mb-7">in 10 minutes</h3>
            <p class="text-white mb-10 max-w-[250px]">
              Get everyone at your venue - from operations to finance - on the
              same page for instant, contactless payments. It’s super easy to
              understand and use qlub.
            </p>
          </div>
          <img src="/for-restaurants/card1.png" alt="" />
        </div>
        <div class="flex flex-col bg-green pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="pl-7">
            <h3 class="font-bold text-2xl">Sync your POS</h3>
            <h3 class="font-bold text-white mb-7">in 10 minutes</h3>
            <p class="text-white mb-10 max-w-[250px]">
              Get everyone at your venue - from operations to finance - on the
              same page for instant, contactless payments. It’s super easy to
              understand and use qlub.
            </p>
          </div>
          <img src="/for-restaurants/card2.png" alt="" />
        </div>
        <div class="flex flex-col bg-green pt-12 rounded-[17px] hover:shadow-lg transition-all">
          <div class="pl-7">
            <h3 class="font-bold text-2xl">Sync your POS</h3>
            <h3 class="font-bold text-white mb-7">in 10 minutes</h3>
            <p class="text-white mb-10 max-w-[250px]">
              Get everyone at your venue - from operations to finance - on the
              same page for instant, contactless payments. It’s super easy to
              understand and use qlub.
            </p>
          </div>
          <img src="/for-restaurants/card3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="perfect-host m-auto px-11 xl:px-40 container">
      <h2 class="black-title">
        BE THE PERFECT HOST <span class="green-title">WITH FASTER</span>
      </h2>
      <h2 class="green-title mb-16">CHECK-INS AND CHECKOUTS</h2>
      <div class="flex flex-col lg:flex-row  items-center justify-between mb-[90px]">
        <div class="flex flex-col">
          <h3 class="text-white bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            QR CODES
          </h3>
          <p class="text-xl max-w-96 mb-12">
            qlub provides customized, unique QR codes for each table helping
            your staff keep a better track of payments
          </p>
        </div>
        <img src="/for-restaurants/perfect-host.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row-reverse  items-center justify-between mb-[90px] lg:gap-32">
        <div class="flex flex-col">
          <h3 class="text-white bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            SEAMLESS INTEGRATION
          </h3>
          <p class="text-xl max-w-96 mb-12">
            qlub syncs directly with your point of sale system without changing
            how you run your business
          </p>
        </div>
        <img src="/for-restaurants/perfect-host2.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row  items-center justify-between mb-[90px] lg:gap-32">
        <div class="flex flex-col">
          <h3 class="text-white bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            NO APP
          </h3>
          <p class="text-xl max-w-96 mb-12">
            Your customers don't need to download any app. qlub is a web-based
            payment service and works on all web browsers
          </p>
        </div>
        <img src="/for-restaurants/perfect-host3.png" alt="" />
      </div>
      <div class="flex flex-col lg:flex-row-reverse  items-center justify-between mb-40">
        <div class="flex flex-col">
          <h3 class="text-white bg-green rounded-full text-2xl font-bold px-8 py-2 mb-12 w-fit">
            REAL-TIME DATA
          </h3>
          <p class="text-xl max-w-96 mb-12">
            Completed transactions reflect instantly on your dashboard. And you
            can access it from any device
          </p>
        </div>
        <img src="/for-restaurants/perfect-host4.png" alt="" />
      </div>
    </div>
    <div class="integrates mx-auto container px-11 xl:px-40">
      <h2 class="uppercase text-[40px] font-bold">INTEGRATES</h2>
      <h2 class="uppercase text-[40px] font-bold mb-6 text-green">
        WITH YOUR POS
      </h2>
      <p class="text-xl max-w-[445px] mb-14">
        qlub is already integrated with top POS systems. You can go live in less
        than 48 hours!
      </p>
      <div class="bg-green py-12 rounded-[59px] mb-[187px]" style="box-shadow: 0px 4px 10.5px rgba(0, 0, 0, 0.25)">
        <carousel :items-to-show="width > 768 ? 5 : 1">
          <slide v-for="slide in 10" :key="slide">
            <img src="/for-restaurants/priroda.png" alt="" />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
    <div class="go-live pt-48 lg:pb-[250px] lg:pt-[120px] pb-64">
      <div class="mx-auto max-w-[1110px]">
        <h2 class="text-[40px] uppercase text-center font-bold my-28">
          Go live in less <span class="text-white">than 48 hours!</span>
        </h2>
        <div class="grid-cols-1 lg:grid-cols-2 justify-between max-w-[886px] m-auto gap-24 grid">
          <div class="max-w-[350px]">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-6 lg:translate-x-0">
              1. You reach out to us
            </p>
            <p class="text-white pl-11 lx:pl-0">
              Vivamus tincidunt, enim vitae elementum sagittis, augue metus
              vestibulum nunc, sit amet ornare nulla eros nec nulla.
            </p>
          </div>
          <div class="max-w-[350px] lg:justify-self-end ">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-6 lg:translate-x-0">
              2. We generate QR codes
            </p>
            <p class="text-white pl-11 lx:pl-0">
              Vivamus tincidunt, enim vitae elementum sagittis, augue metus
              vestibulum nunc, sit amet ornare nulla eros nec nulla.
            </p>
          </div>
          <div class="max-w-[350px] ">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-6 lg:translate-x-0">
              3. We train your staff
            </p>
            <p class="text-white pl-11 lx:pl-0">
              Vivamus tincidunt, enim vitae elementum sagittis, augue metus
              vestibulum nunc, sit amet ornare nulla eros nec nulla.
            </p>
          </div>
          <div class="max-w-[350px]  lg:justify-self-end">
            <p
              class="px-14 py-3 text-green font-bold text-xl text-center bg-white rounded-full mb-12 -translate-x-6 lg:translate-x-0">
              4. You accept payments
            </p>
            <p class="text-white pl-11 lx:pl-0">
              Vivamus tincidunt, enim vitae elementum sagittis, augue metus
              vestibulum nunc, sit amet ornare nulla eros nec nulla.
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
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();

const { loading } = useGlobalStore()
const { isLoading } = storeToRefs(useGlobalStore())

await loading()
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
      background-position: 70% 100%;
    }
    .go-live {
      background-position: 23% center;
    }
  }


  @media screen and (min-width: 1024px) {
    .hero {
      background-position: 10%;
    }
  }


</style>
