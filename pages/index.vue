<template>
    <div class="wrapper">
        <PreLoader />
        <!-- HERO -->
        <div class="hero bg-[url(/index/hero2.jpg)] bg-cover bg-center pb-[343px] relative lg:mb-32  pt-20 lg:pt-36">
            <Header />
            <ScrollTop />
            <div class="hero__content container">
                <div class="hero__info flex flex-col lg:flex-row px-11 xl:px-40">
                    <div class="hero__text">
                        <h1 class="hero__title text-[40px] lg:text-[64px] font-bold uppercase">
                            {{ $t("index.hero.payForYourMeal") }}
                        </h1>
                        <h2 class="hero__subtitle text-[36px] lg:text-[48px] font-bold uppercase text-white mb-7">
                            <TypeWritter :text="$t('index.hero.fast')" />
                        </h2>
                        <p class="hero__description mb-14">
                            {{ $t("index.hero.imagineGuests") }}
                        </p>
                        <button class="hero__btn btn btn-light" @click="scrollToForm('.apply', 150)">{{
                            $t("header.bookADemo")
                        }}</button>
                    </div>
                    <img src="/index/qr.png" alt="" class="animate-wiggle">
                </div>
                <div class="hero__specs flex flex-col lg:flex-row mx-11 xl:mx-0 xl:ml-40">
                    <div class="hero__spec">
                        <img src="/icons/check.svg" alt="" />
                        <span>{{ $t("index.hero.seatFaster") }}</span>
                    </div>
                    <div class="hero__spec">
                        <img src="/icons/check.svg" alt="" />
                        <span>{{ $t("index.hero.earnTips") }}</span>
                    </div>
                    <div class="hero__spec">
                        <img src="/icons/check.svg" alt="" />
                        <span>{{ $t("index.hero.fastPayment") }}</span>
                    </div>
                    <div class="hero__spec">
                        <img src="/icons/check.svg" alt="" />
                        <span>{{ $t("index.hero.noApps") }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- END OF HERO -->
        <!-- TRUSTED -->
        <section class="trusted">
            <div class="trusted__content px-4 lg:px-40 container">
                <h2 class="trusted__title text-[36px] lg:text-[40px] uppercase font-bold">
                    {{ $t("index.trusted.recommendedBy") }}
                </h2>
                <h2 class="trusted__subtitle text-[36px] lg:text-[40px] uppercase">
                    {{ $t("index.trusted.restaurants") }}
                </h2>
                <div class="trusted__carousel">
                    <carousel :items-to-show="width > 1024 ? 5 : 1" :transition="2000" :autoplay="200"
                        :wrap-around="true">
                        <slide v-for="slide in 15" :key="slide">
                            <img :src="`/brands/${slide}.webp`" alt="" class="w-64 h-28 object-contain bg-white" />
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
                <h2 class="dine-in__title white-title">{{ $t("index.give.give") }}</h2>
                <h2 class="dine-in__subtitle black-title mb-24">
                    {{ $t("index.give.impressions") }}
                </h2>
                <div class="dine-in__list flex flex-col lg:flex-row lg:gap-32">
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <div class="flex absolute top-[25px] left-[55px]">
                                <span class="dine-in__number">
                                    <AnimatedNumber :max-value="12" />
                                </span>
                                <span class="dine-in__rest"> {{ '&nbsp;' + $t('index.give.min') }}</span>
                            </div>
                        </div>
                        <div class="dine-in__description">
                            {{ $t("index.give.save") }}
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <div class="flex absolute top-[25px] left-[55px]">
                                <span class="dine-in__number">
                                    <AnimatedNumber :max-value="340" />
                                </span>
                                <span class="dine-in__rest">%</span>
                            </div>
                        </div>
                        <div class="dine-in__description">
                            {{ $t("index.give.earn") }}
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-16">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <div class="flex absolute top-[25px] left-[55px]">
                                <span class="dine-in__rest" v-if="locale === 'ua'">У&nbsp;</span>
                                <span class="dine-in__number">
                                    <AnimatedNumber :max-value="8" />
                                </span>
                                <span class="dine-in__rest">&nbsp;{{ $t('index.give.x') }}</span>
                            </div>
                        </div>
                        <div class="dine-in__description max-w-64">
                            {{ $t("index.give.get") }}
                        </div>
                    </div>
                    <div class="dine-in__item relative mb-4">
                        <div class="dine-in__sphere group">
                            <div class="w-24 h-24 rounded-full bg-black transition mb-9 group-hover:scale-125"></div>
                            <div class="flex absolute top-[25px] left-[55px]">
                                <span class="dine-in__number">
                                    <AnimatedNumber :max-value="100" />
                                </span>
                                <span class="dine-in__rest">%</span>
                            </div>
                        </div>
                        <div class="dine-in__description">
                            {{ $t("index.give.guarantee") }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF DINE-IN -->
        <!-- PAYMENT -->
        <section class="payment container flex flex-col items-center lg:items-start lg:flex-row px-4 xl:px-40 pt-24">
            <div class="payment__content">
                <h2 class="payment__title"
                    :class="locale === 'de' ? 'text-2xl xl:text-[40px] font-bold uppercase' : 'black-title'">
                    {{ $t("index.payment.experience") }}</h2>
                <h2 class="payment__subtitle green-title mb-12">
                    {{ $t("index.payment.crave") }}
                </h2>
                <div class="payment__tabs flex flex-wrap lg:flex-nowrap justify-between gap-3 mb-16">
                    <div class="payment__tab">
                        <input v-model="actions" value="scan" type="radio" name="tab" id="scan" />
                        <label class="w-[132px] lg:w-40" for="scan">{{ $t("index.payment.actions.scan") }}</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="split" type="radio" name="tab" id="split" />
                        <label class="w-[132px] lg:w-40" for="split">{{ $t("index.payment.actions.split") }}</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="tip" type="radio" name="tab" id="tip" />
                        <label class="w-[132px] lg:w-40" for="tip">{{ $t("index.payment.actions.tip") }}</label>
                    </div>
                    <div class="payment__tab">
                        <input v-model="actions" value="pay" type="radio" name="tab" id="pay" />
                        <label class="w-[132px] lg:w-40" for="pay">{{ $t("index.payment.actions.pay") }}</label>
                    </div>
                </div>
                <p class="payment__text">
                    {{ getExperienceText }}
                </p>
                <button class="btn btn-dark payment__btn mb-20" @click="scrollToForm('.apply', 150)">
                    {{ $t('header.bookADemo') }}
                </button>
            </div>
            <!-- <img src="/index/hollow-phone.png" class="w-[230px] mx-auto xl:mx-0 xl:ml-32 rounded-xl" alt="" /> -->
            <video id="autoplay" autoplay="autoplay" style="background-color: '#fff'" playsinline muted loop
                class="object-contain w-64 !bg-white">
                <source src="/video.mp4" type="video/mp4" />
            </video>
        </section>
        <!-- END OG PAYMENT -->
        <!-- FLEXIBILITY -->
        <section class="flexible bg-[url(/index/flexible-bg.png)] bg-cover py-24 lg:py-96">
            <div class="flexible__content px-11 xl:px-40 flex flex-col md:flex-row justify-between container">
                <div class="flexible__left flex flex-col justify-center pt-32 md:pt-0">
                    <h2 class="flexible__title black-title">{{ $t('index.flexible.bePrepared') }}</h2>
                    <h2 class="flexible__subtitle max-w-[700px]"
                        :class="locale === 'de' ? 'text-2xl uppercase font-bold xl:text-[40px] text-white' : 'white-title'">
                        {{ $t('index.flexible.toAccept') }}</h2>
                    <p class="flexible__text text-xl text-left max-w-[470px] text-white mt-6 mb-16">
                        {{ $t('index.flexible.customerChoice') }}
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
        <section class="rave mb-10 xl:mb-40">
            <div class="rave__content container px-11 xl:px-40 lg:pt-12">
                <h2 class="rave__title black-title">{{ $t('index.rave.countries') }}</h2>
                <h2 class="rave__subtitle green-title mb-16">{{ $t('index.rave.faster') }}</h2>
                <carousel :items-to-show="width > 1024 ? 2 : 1" :transition="5000" :autoplay="200" class="py-4">
                    <slide v-for="review in reviews" :key="review.name" class="pb-8">
                        <div class="rave__item py-9 px-7 bg-[#f8f8f8] rounded-[34px] shadow-box mb-9 md:mb-0">
                            <div class="rave__top flex gap-7 mb-8">
                                <div class="rave__sphere w-24 h-24 rounded-full">
                                    <img class="rounded-full object-cover w-24 h-24"
                                        :src="`/reviews/${review.image}.jpeg`" alt="">
                                </div>
                                <div class="rave__name flex flex-col items-start">
                                    <h3 class="text-green text-left uppercase font-bold ">{{ review.name }}</h3>
                                    <span class="!text-left">{{ review.position }}</span>
                                </div>
                            </div>
                            <div class="rave__text !text-left">
                                <p>{{ review.review }}</p>
                            </div>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </section>
        <section class="prime">
            <div class="prime__content container px-11 xl:px-40">
                <h2 class="prime__title black-title">{{ $t('index.primed.primed') }}</h2>
                <h3 class="prime__subtitle green-title mb-7">{{ $t('index.primed.toJoin') }}</h3>
                <p class="prime__text mb-[70px] text-xl">{{ $t('index.primed.already') }}</p>
                <div id="prime" class="prime__carousel bg-[#f8f8f8] shadow-box rounded-[60px] py-12 mb-32">
                    <carousel :items-to-show="width > 1024 ? 5 : 1" :transition="2000" :autoplay="200"
                        :wrap-around="true">
                        <slide v-for="slide in 6" :key="slide">
                            <img :src="`/pos/${slide}.webp`" alt="" class="w-64 h-28 object-cover" />
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
import { Carousel, Slide, Navigation } from "vue3-carousel";


const { width } = useWindowSize();
const { locale } = useI18n();
const actions = ref("scan");
const { t } = useI18n()

const scrollToForm = (selector: string, offset: number) => {
    window.scrollTo({
        behavior: 'smooth',
        top:
            document.querySelector(selector)!.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offset,
    })
};

onMounted(() => {
    const video = document.getElementById('autoplay') as HTMLVideoElement;
    video.play();
});

const reviews = ref([
    {
        name: "Madison Smith",
        review: "Amazing convenience! With this QR code scanning program, accessing the menu and settling the bill has never been easier. Highly recommended!",
        position: "Restaurant Manager",
        image: 1
    },
    {
        name: "Olivia Johnson",
        review: "Efficient and user-friendly! This QR scanning app makes dining out a breeze. I love how seamlessly it handles payments. A must-have for restaurants!",
        position: "Sommelier",
        image: 2
    },
    {
        name: "Emma Williams",
        review: "Revolutionary dining experience! Thanks to this QR code scanner, I can explore the menu, place orders, and pay without any hassle. It's a game-changer!",
        position: "Customer",
        image: 3
    },
    {
        name: "Jackson Miller",
        review: "Saves time and effort! This app simplifies the dining process by allowing quick access to the menu and easy bill payment through QR code scanning. Love it!",
        position: "Head Waiter",
        image: 4

    },
    {
        name: "Liam Davis",
        review: "Innovative and practical! I'm impressed by how smoothly this program integrates QR code for menu access and payment. It's a brilliant solution for modern dining",
        position: "Customer",
        image: 5

    },
    {
        name: "Noah Wilson",
        review: "Streamlined dining made possible! With this QR code scanner, I can manage my orders and settle bills swiftly and securely. Dining out has never been this convenient!",
        position: "Bartender",
        image: 6

    },
])


const getExperienceText = computed(() => {
    switch (actions.value) {
        case "scan":
            return t('index.payment.scan');
        case "split":
            return t('index.payment.split');
        case "tip":
            return t('index.payment.tip');
        case "pay":
            return t('index.payment.pay');
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


.carousel__slide {
    padding: 0 20px;
}

.dine-in {

    &__number,
    &__rest {
        font-weight: 700;
        font-size: 36px;
        line-height: 50px;
        text-align: left;
        text-transform: uppercase;
        color: #fff;
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
        background-position: 10%;
    }
}
</style>
