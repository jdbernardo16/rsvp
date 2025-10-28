<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const heroImage = ref<HTMLElement | null>(null);
const scrollY = ref(0);

const handleScroll = () => {
    scrollY.value = window.scrollY;
    if (heroImage.value) {
        heroImage.value.style.transform = `translateY(${
            scrollY.value * 0.5
        }px) scale(1.1)`;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
    <section>
        <div class="relative h-[60vh] md:h-screen overflow-hidden">
            <div
                ref="heroImage"
                class="absolute inset-0 w-full h-full will-change-transform"
            >
                <img
                    class="w-full h-full object-cover md:object-center object-right"
                    src="/images/DSC09755.JPG"
                    alt="Dannica & James"
                />
            </div>
            <div
                class="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/40 to-transparent"
            ></div>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-0 right-0 md:left-20 md:right-auto px-8 md:px-0 max-w-4xl"
            >
                <div class="text-center md:text-left">
                    <h1
                        class="text-white text-5xl md:text-8xl font-light font-secondary mb-6 tracking-wide animate-fade-in-up"
                    >
                        <span
                            class="inline-block transform hover:scale-105 transition-transform duration-300"
                        >
                            Dannica
                        </span>
                        <span
                            class="font-normal mx-2 md:mx-3 text-pink-200 inline-block animate-pulse"
                        >
                            &
                        </span>
                        <span
                            class="inline-block transform hover:scale-105 transition-transform duration-300"
                        >
                            James
                        </span>
                    </h1>
                    <p
                        class="text-white/90 text-normal md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0"
                    >
                        Two hearts, one beautiful journey. Join us as we
                        celebrate the beginning of our forever together,
                        surrounded by the love and laughter of those who mean
                        the most.
                    </p>
                </div>
            </div>
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div class="animate-bounce">
                    <svg
                        class="w-6 h-6 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>
