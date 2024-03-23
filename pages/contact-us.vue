<template>
  <div class="pt-32 lg:pt-56">
    <PreLoader />
    <ScrollTop />
    <Header class="!bg-green" />
    <div class="text-center !-mb-40 xl:my-24 container">
      <div class="px-11 lg:px-40">
        <h2 class="text-[40px] lg:text-[64px] font-bold uppercase">{{ $t('contact.want') }}</h2>
        <h2 class="text-[36px] lg:text-[48px] font-bold uppercase text-green mb-12">{{ $t('contact.us') }}</h2>
        <div class="flex lg:gap-8 flex-wrap">
          <div class="relative mb-12 lg:min-w-[350px] w-full lg:w-auto">
            <img src="/contact/de.png" alt="" class="top-0 left-0 w-full">
            <div class="absolute bottom-1/2">
              <h3 class="text-xl uppercase text-left pl-9 pt-14 mb-2 font-bold">Germany</h3>
              <a href="mailto:info@yumaxpay.com" class="text-left pl-9">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] w-full lg:w-auto">
            <img src="/contact/ua.png" alt="" class="top-0 left-0 w-full">
            <div class="absolute bottom-1/2">
              <h3 class="text-xl uppercase text-left pl-9 pt-14 mb-2 font-bold">Ukraine</h3>
              <a href="mailto:info@yumaxpay.com" class="text-left pl-9">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] w-full lg:w-auto">
            <img src="/contact/es.png" alt="" class="top-0 left-0 w-full">
            <div class="absolute bottom-1/2">
              <h3 class="text-xl uppercase text-left pl-9 pt-14 mb-2 font-bold">Spain</h3>
              <a href="mailto:info@yumaxpay.com" class="text-left pl-9">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] w-full lg:w-auto">
            <img src="/contact/pl.png" alt="" class="top-0 left-0 w-full">
            <div class="absolute bottom-1/2">
              <h3 class="text-xl uppercase text-left pl-9 pt-14 mb-2 font-bold">Poland</h3>
              <a href="mailto:info@yumaxpay.com" class="text-left pl-9">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] w-full lg:w-auto">
            <img src="/contact/uae.png" alt="" class="top-0 left-0 w-full">
            <div class="absolute bottom-1/2 !text-left">
              <h3 class="text-xl uppercase text-left pl-9 pt-14 mb-2 font-bold">United Arab Emirates</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left pl-9">info@yumaxpay.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ApplyForm class="mt-56 lg:mt-[300px]" src="/for-restaurants/form.png" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>
