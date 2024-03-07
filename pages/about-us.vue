<template>
  <div class="wrapper">
    <Header class="bg-green" />
    <div class="text-center my-24">
      <h2 class="text-[64px] font-bold mb-6">ABOUT US</h2>
      <p class="text-xl">
        Imagine guests can view your menu and pay for meals in one split-second
        scan. Don’t imagine…
      </p>
    </div>
    <div class="flex long-text py-[200px]">
      <div
        class="m-auto max-w-[1110px] flex justify-between gap-14 items-center"
      >
        <div>
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
        <img src="/about-us/1.png" alt="" />
      </div>
    </div>
    <div class="map m-auto max-w-[1110px]">
      <h2
        class="bg-green px-[38px] py-2 rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto"
      >
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
        class="bg-green px-[38px] py-2 rounded-full text-2xl text-white uppercase font-bold text-center mb-9 w-fit mx-auto"
      >
        WHO WE ARE
      </h2>
      <p class="text-lg text-center max-w-[800px] mx-auto mb-16">
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
      <img class="mx-auto mb-[200px]" src="/about-us/photos.png" alt="" />
      <div class="flex justify-between mx-auto max-w-[1110px] mb-[200px]">
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
      <ApplyForm src="/index/customer.png" />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.long-text {
  background: url("/about-us/bg1.png") center center no-repeat;
  background-size: cover;
}
</style>
