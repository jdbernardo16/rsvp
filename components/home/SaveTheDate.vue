<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const weddingDate = new Date("2025-12-15T00:00:00");
const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

const isVisible = ref(false);

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
    setTimeout(() => {
        isVisible.value = true;
    }, 100);
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

const countdownItems = computed(() => [
    { value: timeLeft.value.days, label: "Days" },
    { value: timeLeft.value.hours, label: "Hours" },
    { value: timeLeft.value.minutes, label: "Minutes" },
    { value: timeLeft.value.seconds, label: "Seconds" },
]);
</script>

<template>
    <section
        class="relative py-24 md:py-32 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
        <!-- Floating decorative elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
                class="absolute top-20 left-10 w-32 h-32 opacity-10 animate-float"
            >
                <svg viewBox="0 0 100 100" class="text-rose-300">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                </svg>
            </div>
            <div
                class="absolute bottom-32 right-16 w-24 h-24 opacity-10 animate-float-delayed"
            >
                <svg viewBox="0 0 100 100" class="text-amber-300">
                    <circle cx="50" cy="50" r="35" fill="currentColor" />
                </svg>
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Decorative header image -->
            <div
                class="max-w-[500px] mx-auto mb-12 transition-all duration-1000 ease-out"
                :class="
                    isVisible
                        ? 'opacity-80 translate-y-0'
                        : 'opacity-0 -translate-y-4'
                "
            >
                <img class="w-full" src="/images/element1.png" alt="element" />
            </div>

            <!-- Header section -->
            <div
                class="text-center mb-20 transition-all duration-1000 delay-200 ease-out"
                :class="
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                "
            >
                <div class="inline-block mb-6">
                    <div class="flex items-center space-x-3">
                        <div
                            class="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"
                        ></div>
                        <svg
                            class="w-6 h-6 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                        <div
                            class="h-px w-12 bg-gradient-to-l from-transparent to-rose-300"
                        ></div>
                    </div>
                </div>

                <h2
                    class="text-6xl md:text-7xl font-light text-gray-800 mb-6 font-secondary tracking-wide"
                >
                    Save the Date
                </h2>

                <!-- Date and Location with enhanced styling -->
                <div
                    class="flex flex-col md:flex-row text-center justify-center items-center md:space-x-4 space-y-2 md:space-y-0 font-light text-2xl md:text-3xl font-playfair mb-6"
                >
                    <p class="text-rose-600">December 15, 2025</p>
                    <span class="hidden md:inline text-gray-400">•</span>
                    <p class="text-gray-700">Intramuros Manila</p>
                </div>

                <p
                    class="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    Mark your calendars for our special day as we celebrate love
                    and new beginnings
                </p>
            </div>

            <div class="max-w-6xl mx-auto">
                <!-- Enhanced Countdown Timer -->
                <div
                    class="mb-20 transition-all duration-1000 delay-500 ease-out"
                    :class="
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    "
                >
                    <div
                        class="flex justify-center items-start gap-3 md:gap-6 flex-wrap"
                    >
                        <template
                            v-for="(item, index) in countdownItems"
                            :key="item.label"
                        >
                            <!-- Countdown card -->
                            <div
                                class="countdown-card group cursor-default"
                                :style="{ animationDelay: `${index * 100}ms` }"
                            >
                                <div
                                    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-rose-100 hover:border-rose-200 hover:-translate-y-2 min-w-[100px] md:min-w-[140px]"
                                >
                                    <div
                                        class="text-5xl md:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-amber-500 leading-none mb-3 group-hover:scale-110 transition-transform duration-500"
                                    >
                                        {{
                                            String(item.value).padStart(2, "0")
                                        }}
                                    </div>
                                    <div
                                        class="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium"
                                    >
                                        {{ item.label }}
                                    </div>
                                </div>
                            </div>

                            <!-- Separator -->
                            <div
                                v-if="index < countdownItems.length - 1"
                                class="hidden md:flex items-center text-4xl md:text-5xl font-light text-rose-300 opacity-50 mt-6"
                            >
                                •
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Decorative footer -->
                <div
                    class="text-center transition-all duration-1000 delay-700 ease-out"
                    :class="
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                    "
                >
                    <div class="inline-flex flex-col items-center space-y-6">
                        <!-- Quote or message -->
                        <p
                            class="text-gray-500 italic text-lg max-w-md font-light"
                        >
                            "Two souls with but a single thought, two hearts
                            that beat as one"
                        </p>

                        <!-- Decorative divider -->
                        <div class="flex items-center space-x-4">
                            <div
                                class="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                            ></div>
                            <div class="relative">
                                <svg
                                    class="w-10 h-10 text-rose-400 animate-pulse-slow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>
                            </div>
                            <div
                                class="h-px w-20 bg-gradient-to-l from-transparent via-rose-300 to-transparent"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes float-delayed {
    0%,
    100% {
        transform: translateY(0px) translateX(0px);
    }
    50% {
        transform: translateY(-15px) translateX(10px);
    }
}

@keyframes pulse-slow {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.countdown-card {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
