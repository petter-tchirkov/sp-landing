<template>
  <div class="wrapper pt-20 lg:pt-44">
    <PreLoader v-if="isLoading"/>
    <Header class="!bg-green"/>
    <div class="text-center">
      <h2 class="text-[40px] lg:text-[64px] font-bold uppercase mb-6">ABOUT US</h2>
    </div>
    <div class="flex long-text lg:pt-4 relative bg-[url(/about-us/bg1.png)]" style="background-position: 80%;">
      <!-- <img src="/about-us/bg1.png" alt="" class="object-cover absolute -bottom-48 left-0 -z-10 h-[150%] lg:hidden"> -->
      <div class="m-auto flex flex-col lg:flex-row justify-between gap-14 items-center xl:pt-72 pb-96 container xl:px-40">
        <div class="px-11 xl:px-0">
          <p class="text-white text-lg mb-7">
            If you’re like us, you understand efficiency, speed, and
            convenience. Not only because we’re a 21st-century business that
            loves comfort, but also because we love seeing others experience it
            too. Have you seen how amazing people look when they’re comfortable?
            Like you: you look peaceful – especially when you’re focused on
            doing the things you love…
          </p>
          <p class="text-white text-lg">
            For example, giving your customers maximum thrill with your quality
            of service. Not when you’re fussing about bills and taking payments.
            There’s qlub for that. qlub enables restaurants, pubs, and cafe
            owners to present their menus and get payments in seconds. It’s the
            type of fast-paced stuff that folks are used to – the comfort –
            while keeping staff and guests happy.
          </p>
        </div>
        <img class="px-11" src="/about-us/1.png" alt="" />
      </div>
    </div>
    <div class="map m-auto max-w-[1110px] px-11 lg:px-0">
      <h2
        class="bg-green px-[38px] py-9 lg:py-2 rounded-[33px] lg:rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto">
        Today, 1000 + restaurants are on board with qlub
      </h2>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16">
        In the UAE, KSA, Turkey, Brazil, Japan, Australia, India, and Singapore.
        Heck, we’re global! We call them our partners because we team up with
        them to give their customers a fast, seamless checkout experience.
      </p>
      <img class="mx-auto mb-32" src="/about-us/map.png" alt="" />
    </div>
    <div class="who-we-are">
      <h2
        class="bg-green px-[38px] py-2 rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto">
        WHO WE ARE
      </h2>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16 px-11 lg:px-0">
        While building and scaling multiple internet startups and raising
        millions of dollars, our founders noticed something baffling: There have
        been so few technology - driven improvements to the dine-in experience
        in 20 years. Meanwhile, various other industries are getting “disrupted”
        or streamlined with innovation. That changed when the pandemic called
        for a change. And we rose to that call. Combining QRs with cashless
        payments, we created the payment function of the future. It’s not as
        easy as it sounds, but it’s glorious work. We got backed by $17-million
        funding and today, our team is 200+ members strong across the globe.
      </p>
      <img class="mx-auto mb-16 lg:mb-24" :src="width > 768 ? '/about-us/photos.png' : '/about-us/photos-mob.png'"
        alt="" />
      <div
        class="flex flex-col lg:flex-row justify-between mx-auto max-w-[1110px] mb-[200px] px-11 lg:px-0 gap-12 lg:gap-0">
        <div class="flex gap-4 max-w-[300px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>
            No more waiting for the waiter (pun intended) to finally get to your
            table during peak hours.
          </p>
        </div>
        <div class="flex gap-4 max-w-[240px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>
            No more trouble splitting the bills when you’re out with friends.
          </p>
        </div>
        <div class="flex gap-4 max-w-[160px] items-start">
          <img src="/icons/check.svg" alt="" />
          <p>Convenience par excellence.</p>
        </div>
      </div>
      <div class="bg-green py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-11 xl:px-60 mb-20">
        <span class="text-white text-2xl">Join the qlub right now!</span>
        <button class="btn btn-light">Book a Demo</button>
      </div>
      <ApplyForm src="/index/customer.png" />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const { loading } = useGlobalStore()
const { isLoading } = storeToRefs(useGlobalStore())

await loading()
</script>

<style scoped lang="scss">
@media screen and (min-width: 1024px) {
  .long-text {
    background: url("/about-us/bg1.png") center center no-repeat;
    background-size: cover;
  }

}
</style>
