<template>
  <div class="wrapper">
    <!-- HERO -->
    <div class="hero">
      <Header />
      <div class="hero__content container">
        <div class="hero__info">
          <div class="hero__text">
            <h1 class="hero__title">The Fastest Payment for</h1>
            <h2 class="hero__subtitle">restaurants</h2>
            <p class="hero__description">
              Imagine guests can view your menu and pay for meals in one
              split-second scan. Don’t imagine…
            </p>
            <button class="hero__btn btn btn-light">Book a demo</button>
          </div>
          <img src="/index/qr.png" alt="" />
        </div>
        <div class="hero__specs">
          <div class="hero__spec">
            <img src="/icons/check.svg" alt="" />
            <span>Turn tables quicker</span>
          </div>
          <div class="hero__spec">
            <img src="/icons/check.svg" alt="" />
            <span>Earn more tips</span>
          </div>
          <div class="hero__spec">
            <img src="/icons/check.svg" alt="" />
            <span>Swift secure payment</span>
          </div>
          <div class="hero__spec">
            <img src="/icons/check.svg" alt="" />
            <span>No app, no registration</span>
          </div>
        </div>
      </div>
    </div>
    <!-- END OF HERO -->
    <!-- TRUSTED -->
    <section class="trusted">
      <div class="trusted__content container">
        <h2 class="trusted__title">Trusted by fantastic</h2>
        <h2 class="trusted__subtitle">restaurants like yours</h2>
        <div class="trusted__carousel">
          <carousel :items-to-show="5">
            <slide v-for="slide in 10" :key="slide">
              <img src="/index/slider-image.png" alt="" />
            </slide>
            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
      </div>
    </section>
    <!-- END OF TRUSTED -->
    <!-- DINE IN -->
    <section class="dine-in">
      <div class="dine-in__content container">
        <h2 class="dine-in__title white-title">give insanely good</h2>
        <h2 class="dine-in__subtitle">dine-in expreriences</h2>

        <div class="dine-in__list">
          <div class="dine-in__item">
            <div class="dine-in__sphere">
              <div></div>
              <span class="dine-in__number">16 min</span>
            </div>
            <div class="dine-in__description">
              Vivamus tincidunt, enim vitae elementum
            </div>
          </div>
          <div class="dine-in__item">
            <div class="dine-in__sphere">
              <div></div>
              <span class="dine-in__number">300%</span>
            </div>
            <div class="dine-in__description">
              Vivamus tincidunt, enim vitae elementum
            </div>
          </div>
          <div class="dine-in__item">
            <div class="dine-in__sphere">
              <div></div>
              <span class="dine-in__number">7x</span>
            </div>
            <div class="dine-in__description">
              Vivamus tincidunt, enim vitae elementum
            </div>
          </div>
          <div class="dine-in__item">
            <div class="dine-in__sphere">
              <div></div>
              <span class="dine-in__number">100%</span>
            </div>
            <div class="dine-in__description">
              Vivamus tincidunt, enim vitae elementum
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END OF DINE-IN -->
    <!-- PAYMENT -->
    <section class="payment container">
      <div class="payment__content">
        <h2 class="payment__title black-title">The payment experience</h2>
        <h2 class="payment__subtitle green-title">
          today’s guests are craving
        </h2>
        <div class="payment__tabs">
          <div class="payment__tab">
            <input
              v-model="actions"
              value="scan"
              type="radio"
              name="tab"
              id="scan"
            />
            <label for="scan">scan</label>
          </div>
          <div class="payment__tab">
            <input
              v-model="actions"
              value="split"
              type="radio"
              name="tab"
              id="split"
            />
            <label for="split">split</label>
          </div>
          <div class="payment__tab">
            <input
              v-model="actions"
              value="tip"
              type="radio"
              name="tab"
              id="tip"
            />
            <label for="tip">tip</label>
          </div>
          <div class="payment__tab">
            <input
              v-model="actions"
              value="pay"
              type="radio"
              name="tab"
              id="pay"
            />
            <label for="pay">pay</label>
          </div>
        </div>
        <p class="payment__text">
          {{ getExperienceText }}
        </p>
        <button class="btn btn-dark payment__btn">Book a Demo</button>
      </div>
      <img src="/index/hollow-phone.png" alt="" />
    </section>
    <!-- END OG PAYMENT -->
    <!-- FLEXIBILITY -->
    <section class="flexible">
      <div class="flexible__content container">
        <div class="flexible__left">
          <h2 class="flexible__title black-title">be flexible</h2>
          <h2 class="flexible__subtitle white-title">in accepting payments</h2>
          <p class="flexible__text">
            There’s an option for every customer. qlub works with the world’s
            leading payment partners
          </p>
        </div>
        <div class="flexible__right">
          <div class="flexible__row">
            <img src="/index/visa.png" alt="" />
            <img src="/index/ae.png" alt="" />
            <img src="/index/ap.png" alt="" />
          </div>
          <div class="flexible__row-small">
            <img src="/index/gp.png" alt="" />
            <img src="/index/mc.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- END OF FLEXIBILITY -->
    <!-- RAVE -->
    <section class="rave">
      <div class="rave__content container">
        <h2 class="rave__title black-title">Rave about</h2>
        <h2 class="rave__subtitle green-title">our faster payments</h2>
        <div class="rave__carousel">
          <carousel :items-to-show="2" :items-to-scroll="1" snap-align="start">
            <slide v-for="slide in 10" :key="slide">
              <div class="rave__slide">
                <img src="/index/slider-image.png" alt="" />
                <p>
                  Vivamus tincidunt, enim vitae elementum sagittis, augue metus
                  vestibulum nunc, sit amet ornare nulla eros nec nulla.
                </p>
              </div>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </section>
    <ApplyForm src="/index/customer.png" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const actions = ref("scan");

const getExperienceText = computed(() => {
  switch (actions.value) {
    case "scan":
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt reiciendis reprehenderit quae quod aperiam pariatur amet recusandae voluptatum odio?";
    case "split":
      return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit ullam dignissimos omnis culpa, iusto dolores voluptatem quo quibusdam praesentium quos eligendi error ipsam harum consequatur accusantium, id modi, cumque ipsum nemo velit quia voluptate! Repellendus ut illo voluptatibus corrupti.";
    case "tip":
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptates?";
    case "pay":
      return "Lorem ipsum dolor sit amet.";
  }
});
</script>

<style lang="scss">
.hero {
  position: relative;
  background: url("/index/hero2.png");
  background-size: cover;
  padding-bottom: 300px;

  &__image {
    position: relative;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #1d9e92;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 165px;
    padding-right: 165px;
    padding-top: 100px;
  }

  &__text {
    max-width: 500px;
  }

  &__title {
    font-size: 64px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 4px 4px #00000040;
  }

  &__subtitle {
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    text-shadow: 0 4px 23px #00000040;
    margin-bottom: 30px;
  }

  &__description {
    font-size: 20px;
    color: #fff;
    margin-bottom: 56px;
  }

  &__specs {
    display: flex;
    justify-content: space-between;
    margin-left: 165px;
    gap: 42px;
    border-radius: 59px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    background: #f8f8f8;
    padding: 27px 36px;
    max-width: 1110px;
  }

  &__spec {
    display: flex;
    gap: 15px;
  }
}

.trusted {
  padding-top: 130px;

  &__content {
    padding: 0 165px;
  }

  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    text-transform: uppercase;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    text-transform: uppercase;
    color: #1d9e92;
    margin-bottom: 60px;
  }

  &__carousel {
    margin-bottom: 100px;
    background: #f8f8f8;
    border-radius: 59px;
    box-shadow: 0px 4px 10.5px rgba(0, 0, 0, 0.25);
    padding: 50px 0;
  }
}

.dine-in {
  background: url("/public/index/numbers-bg.png");

  &__content {
    padding: 65px 165px;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 90px;
  }

  &__list {
    display: flex;
    gap: 143px;
  }

  &__item {
    position: relative;
  }

  &__sphere {
    &:hover {
      div {
        transform: scale(1.2);
      }
    }
    div {
      width: 97px;
      height: 97px;
      border-radius: 50%;
      background: #000;
      margin-bottom: 34px;
      transition: 0.3s;
    }
  }

  &__number {
    font-weight: 700;
    font-size: 36px;
    line-height: 50px;
    text-align: left;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    top: 25px;
    left: 55px;
  }

  &__description {
    font-size: 20px;
    line-height: 1.17;
    text-align: left;
    color: #fff;
    max-width: 170px;
  }
}

.payment {
  margin-top: 140px;
  margin-bottom: 105px;
  display: flex;
  padding-inline: 165px;
  justify-content: space-between;

  &__tabs {
    display: flex;
    gap: 30px;
    margin-bottom: 100px;

    input {
      display: none;
    }

    label {
      border: 2px solid #1d9e92;
      border-radius: 33px;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.17;
      text-align: left;
      text-transform: uppercase;
      color: #1d9e92;
      padding-block: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      transition: 0.3s;
    }

    input[type="radio"]:checked + label {
      background: #1d9e92;
      color: #fff;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.17;
    text-align: left;
    color: #2b2a29;
    margin-bottom: 47px;
  }
}

.flexible {
  background: url("/index/flexible-bg.png") center center no-repeat;
  background-size: cover;

  &__text {
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    max-width: 470px;
    color: #ffffff;
    margin-top: 26px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding-inline: 165px;
    padding-block: 350px;
    img {
      transition: 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__row {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }

  &__row-small {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
}

.rave {
  margin-bottom: 200px;

  &__content {
    padding-inline: 165px;
  }

  &__slide {
    padding: 50px 83px 50px 58px;
    background: #f7f7f7;
    border-radius: 34px;
    box-shadow: 0px 4px 10.5px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    gap: 36px;
    margin-block: 20px;
    margin-inline: 15px;

    p {
      font-size: 16px;
      line-height: 1.17;
      text-align: left;
      color: #2b2a29;
    }
  }

  .carousel__pagination-button:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #a4d5d0;
  }
  .carousel__pagination-button--active:after {
    background-color: #1d9e92;
  }
}
</style>
