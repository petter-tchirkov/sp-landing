<template>
  <section class="apply">
    <img :src="src" alt="" />
    <div class="apply__content">
      <form class="apply__form" @submit="submitForm">
        <div class="apply__input-group">
          <label for="">Name</label>
          <input
            v-model="formData.name"
            type="text"
            :class="
              v$.name.$errors.length
                ? 'bg-[#990100] bg-opacity-15'
                : 'bg-[#f3f3f3]'
            "
          />
          <small
            class="text-[#990100] text-xs"
            v-for="error in v$.name.$errors"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <label for="">Email</label>
          <input
            v-model="formData.email"
            type="text"
            :class="
              v$.email.$errors.length
                ? 'bg-[#990100] bg-opacity-15'
                : 'bg-[#f3f3f3]'
            "
          />
          <small
            class="text-[#990100] text-xs"
            v-for="error in v$.email.$errors"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <label for="">Country</label>
          <input
            v-model="formData.country"
            type="text"
            :class="
              v$.country.$errors.length
                ? 'bg-[#990100] bg-opacity-15'
                : 'bg-[#f3f3f3]'
            "
          />
          <small
            class="text-[#990100] text-xs"
            v-for="error in v$.country.$errors"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="apply__input-group">
          <label for="">Name of your restaurant</label>
          <input
            v-model="formData.restaurantName"
            type="text"
            :class="
              v$.restaurantName.$errors.length
                ? 'bg-[#990100] bg-opacity-15'
                : 'bg-[#f3f3f3]'
            "
          />
          <small
            class="text-[#990100] text-xs"
            v-for="error in v$.restaurantName.$errors"
          >
            {{ error.$message }}
          </small>
        </div>
        <button type="submit" class="btn btn-dark apply__btn">
          Book a Demo
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const formData = ref({
  name: "",
  email: "",
  country: "",
  restaurantName: "",
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    country: { required },
    restaurantName: { required, minLength: minLength(3) },
  };
});

const v$ = useVuelidate(rules, formData);

const { src = "customer.png" } = defineProps<{ src: string }>();

const submitForm = async (e: Event) => {
  const result = await v$.value.$validate();
  if (result) {
    e.preventDefault();
    alert("Form submitted");
  } else {
    e.preventDefault();
  }
};
</script>

<style scoped lang="scss">
.apply {
  display: flex;
  align-items: center;
  margin-bottom: 300px;
  position: relative;

  &__content {
    max-width: 1110px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: end;
  }

  img {
    position: absolute;
    top: -120px;
    left: 0;
  }

  &__form {
    background: #ffffff;
    border-radius: 35px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    padding: 44px 32px;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 46px;
    width: 505px;

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
      margin-bottom: 16px;

      color: #000000;
    }
  }
}
</style>
