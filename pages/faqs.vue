<template>
  <div class="pt-20 lg:pt-32">
    <PreLoader />
    <Header class="!bg-green" />
    <div class="my-24 text-center">
      <h2 class="text-[40px] xl:text-[64px] font-bold leading-8">DID WE MISSED</h2>
      <h2 class="text-[40px] xl:text-[64px] font-bold text-green">ANYTHING?</h2>
    </div>
    <div class="max-w-[1100px] mx-auto mb-40 px-11">
      <Accordion :activeIndex="0">
        <AccordionTab
          header="WHAT IS QLUB?"
          :pt="{
            root: () => ({
              class: ['mb-4'],
            }),
            headerAction: ({ context }) => ({
              class: [
                'flex justify-between flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
                context.active
                  ? 'rounded-t-[28px] bg-green'
                  : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
              ],
            }),
            content: ({ context }) => ({
              class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
            }),
          }"
        >
          <p class="m-0 w-4/5">
            Qlub is a web-based payment method. That means your customers don't
            need to download any app or sign up anywhere. Qlub works on any web
            browser.
          </p>
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
        </AccordionTab>
        <AccordionTab
          header="HOW DO I SEE MY TRANSACTIONS?"
          :pt="{
            root: () => ({
              class: ['mb-4'],
            }),
            headerAction: ({ context }) => ({
              class: [
                'flex justify-between flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
                context.active
                  ? 'rounded-t-[28px] bg-green'
                  : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
              ],
            }),
            content: ({ context }) => ({
              class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
            }),
          }"
        >
          <p class="m-0 w-4/5">
            Qlub is a web-based payment method. That means your customers don't
            need to download any app or sign up anywhere. Qlub works on any web
            browser.
          </p>
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
        </AccordionTab>
        <AccordionTab
          header="IS QLUB AN APP?"
          :pt="{
            root: () => ({
              class: ['mb-4'],
            }),
            headerAction: ({ context }) => ({
              class: [
                'flex justify-between flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
                context.active
                  ? 'rounded-t-[28px] bg-green'
                  : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
              ],
            }),
            content: ({ context }) => ({
              class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
            }),
          }"
        >
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            Qlub is a web-based payment method. That means your customers don't
            need to download any app or sign up anywhere. Qlub works on any web
            browser.
          </p>
        </AccordionTab>
        <AccordionTab
          header="DO YOU INTEGRATE WITH MY POS?"
          :pt="{
            root: () => ({
              class: ['mb-4'],
            }),
            headerAction: ({ context }) => ({
              class: [
                'flex justify-between flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
                context.active
                  ? 'rounded-t-[28px] bg-green'
                  : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
              ],
            }),
            content: ({ context }) => ({
              class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
            }),
          }"
        >
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            Qlub is a web-based payment method. That means your customers don't
            need to download any app or sign up anywhere. Qlub works on any web
            browser.
          </p>
        </AccordionTab>
        <AccordionTab
          header="IS QLUB SECURE?"
          :pt="{
            root: () => ({
              class: ['mb-4'],
            }),
            headerAction: ({ context }) => ({
              class: [
                'flex justify-between flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
                context.active
                  ? 'rounded-t-[28px] bg-green'
                  : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
              ],
            }),
            content: ({ context }) => ({
              class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
            }),
          }"
        >
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            Qlub is a web-based payment method. That means your customers don't
            need to download any app or sign up anywhere. Qlub works on any web
            browser.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero {
  position: relative;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
