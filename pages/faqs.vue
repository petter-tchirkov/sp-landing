<template>
  <div class="pt-20 lg:pt-32">
    <PreLoader />
    <ScrollTop />
    <Header class="!bg-green" />
    <div class="my-24 text-center">
      <h2 class="text-[40px] xl:text-[64px] font-bold leading-8 uppercase">{{ $t('faqs.did') }}</h2>
      <h2 class="text-[40px] xl:text-[64px] font-bold text-green uppercase">{{ $t('faqs.anything') }}</h2>
    </div>
    <div class="max-w-[1100px] mx-auto mb-40 px-11">
      <Accordion>
        <AccordionTab :header="$t('faqs.what')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <p class="m-0 w-4/5">
            {{ $t('faqs.whatText') }}
          </p>
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.how')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <p class="m-0 w-4/5">
            {{ $t('faqs.howText') }}
          </p>
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.do')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.doText') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.doYou')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.doYouText') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.howLong')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.howLongText') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.can')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.canText') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.is')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.isText') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.which')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.whatAre') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.whichText')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.whatAre') }}
          </p>
        </AccordionTab>
        <AccordionTab :header="$t('faqs.howMuch')" :pt="{
        root: () => ({
          class: ['mb-4'],
        }),
        headerAction: ({ context }) => ({
          class: [
            'flex justify-between uppercase flex-row-reverse w-full text-lg font-bold p-4 pl-10 border-0 border-b-transparent -mb-1 items-center',
            context.active
              ? 'rounded-t-[28px] bg-green'
              : 'rounded-[28px] bg-[#1D9E92] bg-opacity-20',
          ],
        }),
        content: () => ({
          class: ['bg-green text-white pl-10 rounded-b-[28px] pb-10 pt-3'],
        }),
      }">
          <template #headericon="scope">
            <img v-if="!scope.active" src="/icons/plus.svg" alt="" />
            <img v-else src="/icons/minus.svg" alt="" />
          </template>
          <p class="m-0 w-4/5">
            {{ $t('faqs.howMuchText') }}
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
