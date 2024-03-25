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
          <div class="relative mb-12 lg:min-w-[350px] p-9 pb-11 bg-[#f7f7f7] rounded-[17px] w-full lg:w-auto">
            <div class="flex flex-col gap-2">
              <img src="/contact/de.svg" alt="" class="w-fit">
              <h3 class="text-xl uppercase text-left font-bold">Germany</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] p-9 pb-11 bg-[#f7f7f7] rounded-[17px] w-full lg:w-auto">
            <div class="flex flex-col gap-2">
              <img src="/contact/ua.svg" alt="" class="w-fit">
              <h3 class="text-xl uppercase text-left font-bold">Ukraine</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] p-9 pb-11 bg-[#f7f7f7] rounded-[17px] w-full lg:w-auto">
            <div class="flex flex-col gap-2">
              <img src="/contact/es.svg" alt="" class="w-fit">
              <h3 class="text-xl uppercase text-left font-bold">Spain</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] p-9 pb-11 bg-[#f7f7f7] rounded-[17px] w-full lg:w-auto">
            <div class="flex flex-col gap-2">
              <img src="/contact/pl.svg" alt="" class="w-fit">
              <h3 class="text-xl uppercase text-left font-bold">Poland</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left">info@yumaxpay.com</a>
            </div>
          </div>
          <div class="relative mb-12 lg:min-w-[350px] p-9 pb-11 bg-[#f7f7f7] rounded-[17px] w-full lg:w-auto">
            <div class="flex flex-col gap-2">
              <img src="/contact/uae.svg" alt="" class="w-fit">
              <h3 class="text-xl uppercase text-left font-bold">United Arab Emirates</h3>
              <a href="mailto:info@yumaxpay.com" class="!text-left">info@yumaxpay.com</a>
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
