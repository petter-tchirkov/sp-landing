<template>
    <div class="wrapper">
        <PreLoader v-if="isLoading" />
        <!-- HERO -->
        <div class="hero bg-[url(/index/hero2.png)] bg-cover bg-center pb-[343px] relative lg:mb-32  pt-20 lg:pt-36">
            <Header />
            <ScrollTop />
            <div class="hero__content container">
                <div class="hero__info flex flex-col lg:flex-row px-11 xl:px-40">
                    <div class="hero__text">
                        <h1 class="hero__title text-[40px] lg:text-[64px] font-bold uppercase">
                            The Fastest Payment for
                        </h1>
                        <h2 class="hero__subtitle text-[36px] lg:text-[48px] font-bold uppercase text-white mb-7">
                            restaurants
                        </h2>
                        <p class="hero__description">
                            Imagine guests can view your menu and pay for meals in one
                            split-second scan. Don’t imagine…
                        </p>
                        <button class="hero__btn btn btn-light">Book a demo</button>
                    </div>
                    <img src="/index/qr.png" alt="" />
                </div>
                <div class="hero__specs flex flex-col lg:flex-row mx-11 xl:mx-0 xl:ml-40">
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
            <div class="trusted__content px-11 lg:px-40 container">
                <h2 class="trusted__title text-[36px] lg:text-[40px] uppercase">
                    Trusted by fantastic
                </h2>
                <h2 class="trusted__subtitle text-[36px] lg:text-[40px] uppercase">
                    restaurants like yours
                </h2>
                <div class="trusted__carousel">
                    <carousel :items-to-show="width > 1024 ? 5 : 1">
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
        <section class="dine-in bg-[url(/index/numbers-bg.png)] bg-cover bg-center">
            <div class="dine-in__content container px-11 xl:px-40 py-20">
                <h2 class="dine-in__title white-title">give insanely good</h2>
                <h2 class="dine-in__subtitle black-title mb-24">
                    dine-in expreriences
                </h2>
                <div class="dine-in__list flex flex-col lg:flex-row lg:gap-32">
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <span class="dine-in__number">16 min</span>
                        </div>
                        <div class="dine-in__description">
                            Vivamus tincidunt, enim vitae elementum
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <span class="dine-in__number">300%</span>
                        </div>
                        <div class="dine-in__description">
                            Vivamus tincidunt, enim vitae elementum
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <span class="dine-in__number">7x</span>
                        </div>
                        <div class="dine-in__description">
                            Vivamus tincidunt, enim vitae elementum
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-4">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
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
        <section class="payment container flex flex-col lg:flex-row px-11 xl:px-40 pt-24">
            <div class="payment__content">
                <h2 class="payment__title black-title">The payment experience</h2>
                <h2 class="payment__subtitle green-title mb-12">
                    today’s guests are craving
                </h2>
                <div class="payment__tabs flex flex-wrap lg:flex-nowrap justify-between gap-3 mb-16">
                    <div class="payment__tab">
                        <input v-model="actions" value="scan" type="radio" name="tab" id="scan" />
                        <label class="w-[132px] lg:w-40" for="scan">scan</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="split" type="radio" name="tab" id="split" />
                        <label class="w-[132px] lg:w-40" for="split">split</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="tip" type="radio" name="tab" id="tip" />
                        <label class="w-[132px] lg:w-40" for="tip">tip</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="pay" type="radio" name="tab" id="pay" />
                        <label class="w-[132px] lg:w-40" for="pay">pay</label>
                    </div>
                </div>
                <p class="payment__text">
                    {{ getExperienceText }}
                </p>
                <button class="btn btn-dark payment__btn mb-20">Book a Demo</button>
            </div>
            <img src="/index/hollow-phone.png" alt="" />
        </section>
        <!-- END OG PAYMENT -->
        <!-- FLEXIBILITY -->
        <section class="flexible bg-[url(/index/flexible-bg.png)] bg-cover bg-center py-64 lg:py-96">
            <div class="flexible__content px-11 xl:px-40 flex flex-col md:flex-row justify-between container">
                <div class="flexible__left flex flex-col justify-center pt-32 md:pt-0">
                    <h2 class="flexible__title black-title">be flexible</h2>
                    <h2 class="flexible__subtitle white-title">in accepting payments</h2>
                    <p class="flexible__text text-xl text-left max-w-[470px] text-white mt-6 mb-16">
                        There’s an option for every customer. qlub works with the world’s
                        leading payment partners
                    </p>
                </div>
                <div class="flexible__right">
                    <div class="flexible__row flex gap-7 mb-8 justify-center xl:justify-around">
                        <img class="w-20 h-20" src="/index/visa.png" alt="" />
                        <img class="w-20 h-20" src="/index/ae.png" alt="" />
                        <img class="w-20 h-20" src="/index/ap.png" alt="" />
                    </div>
                    <div class="flexible__row-small flex gap-7 justify-center">
                        <img class="w-20 h-20" src="/index/gp.png" alt="" />
                        <img class="w-20 h-20" src="/index/mc.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF FLEXIBILITY -->
        <!-- RAVE -->
        <section class="rave mb-40">
            <div class="rave__content container px-11 xl:px-40 lg:pt-12">
                <h2 class="rave__title black-title">Rave about</h2>
                <h2 class="rave__subtitle green-title mb-16">our faster payments</h2>
                <div class="flex flex-col md:flex-row md:gap-9">
                    <div class="rave__item py-9 px-7 bg-[#f8f8f8] rounded-[34px] shadow-box mb-9 md:mb-0">
                        <div class="rave__top flex gap-7 mb-8">
                            <div class="rave__sphere w-24 h-24 rounded-full bg-[#d9d9d9]"></div>
                            <div class="rave__name">
                                <h3 class="text-green uppercase font-bold ">richmond</h3>
                                <span>Restaurant Manager</span>
                            </div>
                        </div>
                        <div class="rave__text">
                            <p>Vivamus tincidunt, enim vitae elementum sagittis, augue metus vestibulum nunc, sit amet
                                ornare nulla
                                eros nec nulla.</p>
                        </div>
                    </div>
                    <div class="rave__item py-9 px-7 bg-[#f8f8f8] rounded-[34px] shadow-box">
                        <div class="rave__top flex gap-7 mb-8">
                            <div class="rave__sphere w-24 h-24 rounded-full bg-[#d9d9d9]"></div>
                            <div class="rave__name">
                                <h3 class="text-green uppercase font-bold ">richmond</h3>
                                <span>Restaurant Manager</span>
                            </div>
                        </div>
                        <div class="rave__text">
                            <p>Vivamus tincidunt, enim vitae elementum sagittis, augue metus vestibulum nunc, sit amet
                                ornare nulla
                                eros nec nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="prime">
            <div class="prime__content container px-11 xl:px-40">
                <h2 class="prime__title black-title">primed and ready</h2>
                <h3 class="prime__subtitle green-title mb-7">to join your pos team</h3>
                <p class="prime__text mb-[70px]">qlub is already integrated with top POS systems. You can go live in
                    less than
                    48 hours!</p>
                <div class="prime__carousel bg-[#f8f8f8] shadow-box rounded-[60px] py-12 mb-32">
                    <carousel :items-to-show="width > 1024 ? 5 : 1">
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
        <ApplyForm src="/index/customer.png" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const { width } = useWindowSize();
const actions = ref("scan");

const { loading } = useGlobalStore()
const { isLoading } = storeToRefs(useGlobalStore())

await loading()

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


    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-top: 100px;
    }

    &__text {
        max-width: 500px;
    }

    &__description {
        font-size: 20px;
        color: #fff;
        margin-bottom: 56px;
    }

    &__specs {
        display: flex;
        justify-content: space-between;
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
    &__title {
        line-height: 50px;
        text-align: left;
    }

    &__subtitle {
        font-weight: 700;
        line-height: 50px;
        text-align: left;
        color: #1d9e92;
        margin-bottom: 60px;
    }

    &__carousel {
        margin-bottom: 152px;
        background: #f8f8f8;
        border-radius: 59px;
        box-shadow: 0px 4px 10.5px rgba(0, 0, 0, 0.25);
        padding: 50px 0;
    }
}

.dine-in {

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
    }
}

.payment {
    &__tabs {
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
            transition: 0.3s;
        }

        input[type="radio"]:checked+label {
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
    &__content {
        img {
            transition: 0.2s;

            &:hover {
                transform: scale(1.1);
            }
        }
    }


}

.rave {

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

@media screen and (max-width: 1024px) {
    .flexible {
        background-position: 30%;
    }
}
</style>
