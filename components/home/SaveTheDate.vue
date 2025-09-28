<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const weddingDate = new Date("2025-12-15T00:00:00");
const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance > 0) {
        timeLeft.value = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    } else {
        timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
};

let interval: NodeJS.Timeout;

onMounted(() => {
    calculateTimeLeft();
    interval = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
});

const formattedDate = computed(() => {
    return weddingDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});
</script>

<template>
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-[500px] mx-auto mb-10 opacity-80">
                <img class="w-full" src="/images/element1.png" alt="element" />
            </div>
            <div class="text-center mb-16">
                <h2
                    class="text-5xl md:text-6xl font-light text-gray-800 mb-3 font-secondary"
                >
                    Save the Date
                </h2>

                <!-- Date and Location -->
                <div
                    class="flex text-center w-fit space-x-3 m-auto font-light text-2xl font-playfair mb-4"
                >
                    <p>December 15, 2025</p>
                    <p>|</p>
                    <p>Intramuros Manila</p>
                </div>
                <p class="text-xl text-gray-600 font-light">
                    Mark your calendars for our special day
                </p>
            </div>

            <div class="max-w-6xl mx-auto">
                <!-- Countdown Timer -->
                <div class="mb-16">
                    <div class="flex justify-center items-start gap-2 md:gap-4">
                        <div class="text-center">
                            <div
                                class="text-5xl md:text-6xl font-light text-gray-800 leading-none"
                            >
                                {{ timeLeft.days }}
                            </div>
                            <div
                                class="text-xs uppercase tracking-widest text-gray-600 mt-1"
                            >
                                Days
                            </div>
                        </div>

                        <div
                            class="text-4xl md:text-5xl font-light text-gray-800 mt-1"
                        >
                            :
                        </div>

                        <div class="text-center">
                            <div
                                class="text-5xl md:text-6xl font-light text-gray-800 leading-none"
                            >
                                {{ timeLeft.hours }}
                            </div>
                            <div
                                class="text-xs uppercase tracking-widest text-gray-600 mt-1"
                            >
                                Hours
                            </div>
                        </div>

                        <div
                            class="text-4xl md:text-5xl font-light text-gray-800 mt-1"
                        >
                            :
                        </div>

                        <div class="text-center">
                            <div
                                class="text-5xl md:text-6xl font-light text-gray-800 leading-none"
                            >
                                {{ timeLeft.minutes }}
                            </div>
                            <div
                                class="text-xs uppercase tracking-widest text-gray-600 mt-1"
                            >
                                Minutes
                            </div>
                        </div>

                        <div
                            class="text-4xl md:text-5xl font-light text-gray-800 mt-1"
                        >
                            :
                        </div>

                        <div class="text-center">
                            <div
                                class="text-5xl md:text-6xl font-light text-gray-800 leading-none"
                            >
                                {{ timeLeft.seconds }}
                            </div>
                            <div
                                class="text-xs uppercase tracking-widest text-gray-600 mt-1"
                            >
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Decorative Elements -->
                <div class="mt-16 text-center">
                    <div class="inline-flex items-center space-x-4">
                        <div class="h-px w-16 bg-gray-300"></div>
                        <div class="text-gray-700">
                            <svg
                                class="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                />
                            </svg>
                        </div>
                        <div class="h-px w-16 bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
