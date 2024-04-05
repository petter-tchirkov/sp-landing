<template>
  <section id="apply" class="apply flex flex-col-reverse lg:flex-row gap-28 items-center relative mb-32">
    <img :src="src" alt="" class=" md:-translate-x-36 lg:-translate-x-12" />
    <div class="apply__content px-11 2xl:px-40">
      <form class="apply__form w-full px-4 py-12" @submit.prevent="submitForm">
        <h2 class="!text-center text-xl xl:text-[40px] font-bold text-green">{{
      $t('applyForm.join') }}
        </h2>
        <h3 class="black-title mb-6 !text-center">{{ $t('applyForm.today') }}</h3>
        <div class="apply__input-group">
          <input v-model="formData.name" type="text" :class="v$.name.$errors.length
      ? 'bg-[#990100] bg-opacity-15'
      : 'bg-[#f3f3f3]'
      " :placeholder="$t('applyForm.name') + '&#42'" />
          <small class="text-[#990100] text-xs" v-for="error in v$.name.$errors">
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <input v-model="formData.email" type="text" :class="v$.email.$errors.length
      ? 'bg-[#990100] bg-opacity-15'
      : 'bg-[#f3f3f3]'
      " :placeholder="$t('applyForm.email') + '&#42'" />
          <small class="text-[#990100] text-xs" v-for="error in v$.email.$errors">
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <input v-model="formData.phone" type="text" :class="v$.email.$errors.length
      ? 'bg-[#990100] bg-opacity-15'
      : 'bg-[#f3f3f3]'
      " :placeholder="$t('applyForm.phone') + '&#42'" />
          <small class="text-[#990100] text-xs" v-for="error in v$.phone.$errors">
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <input v-model="formData.country" type="text" :class="v$.country.$errors.length
      ? 'bg-[#990100] bg-opacity-15'
      : 'bg-[#f3f3f3]'
      " :placeholder="$t('applyForm.country') + '&#42'" />
          <small class="text-[#990100] text-xs" v-for="error in v$.country.$errors">
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <input v-model="formData.restName" type="text" class="bg-[#f3f3f3]"
            :placeholder="$t('applyForm.restaurantName')" />
        </div>
        <div class="flex justify-center">
          <button type="submit" class="btn btn-dark apply__btn">
            {{ $t('header.bookADemo') }}
          </button>
        </div>
      </form>
    </div>
    <CheckMark v-show="checked" />
  </section>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, numeric, helpers } from "@vuelidate/validators";
const { t } = useI18n()

const checked = ref(false)
const check = () => {
  checked.value = true
  setTimeout(() => {
    checked.value = false
  }, 2000)
}

const formData = ref({
  name: "",
  email: "",
  phone: "",
  country: "",
  restName: "",
});

const rules = computed(() => {
  return {
    name: { required: helpers.withMessage(() => t('applyForm.nameReq'), required) },
    email: {
      required: helpers.withMessage(() => t('applyForm.emailReq'), required),
      email: helpers.withMessage(() => t('applyForm.emailValid'), email)
    },
    country: { required: helpers.withMessage(() => t('applyForm.countryReq'), required) },
    phone: {
      required: helpers.withMessage(() => t('applyForm.phoneReq'), required),
      numeric: helpers.withMessage(() => t('applyForm.phoneValid'), numeric),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const { src = "customer.png" } = defineProps<{ src: string }>();

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    await $fetch(`https://api.yumaxpay.com/api/Messages`, {
      method: "POST",
      body: formData.value,
      onResponse({ response }) {
        if (response.status === 200) {
          check()
        }
      }
    })
  }
  v$.value.$reset()
  formData.value = {
    name: "",
    email: "",
    phone: "",
    country: "",
    restName: "",
  };
};
</script>

<style scoped lang="scss">
.apply {

  &__content {
    width: 100%;
    display: flex;
    justify-content: end;
  }


  &__form {
    background: #ffffff;
    border-radius: 35px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    input {
      border-radius: 9px;
      height: 40px;
      padding-left: 16px;
    }

    label {
      font-weight: 700;
      font-size: 14px;
      line-height: 29px;
      text-align: left;
      margin-bottom: 4px;

      color: #000000;
    }
  }
}
</style>
