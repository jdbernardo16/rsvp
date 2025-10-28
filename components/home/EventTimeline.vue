<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const timelineEvents = ref([
    {
        time: "2:30 PM",
        title: "Entourage Procession",
        description:
            "The beautiful beginning as our entourage makes their way down the aisle",
        visible: false,
    },
    {
        time: "3:00 PM",
        title: "Wedding Ceremony",
        description: "The moment we say 'I do' and begin our forever together",
        visible: false,
    },
    {
        time: "4:45 PM",
        title: "Cocktails & Photos",
        description:
            "Celebrate with drinks while we capture these precious moments",
        visible: false,
    },
    {
        time: "6:00 PM",
        title: "Dinner & Photos",
        description: "A feast to share with loved ones as the evening unfolds",
        visible: false,
    },
    {
        time: "7:00 PM",
        title: "Program & Fun",
        description: "Games, laughter, and memories that will last a lifetime",
        visible: false,
    },
    {
        time: "7:15 PM",
        title: "Dances & Advices",
        description:
            "First dance as husband and wife, followed by heartfelt wisdom",
        visible: false,
    },
    {
        time: "8:00 PM",
        title: "Messages & SDE",
        description:
            "Words from the heart and a special same-day edit presentation",
        visible: false,
    },
]);

const timelineProgress = ref(0);

const handleScroll = () => {
    const elements = document.querySelectorAll(".timeline-event");
    const windowHeight = window.innerHeight;

    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (
            elementMiddle < windowHeight * 0.8 &&
            elementMiddle > 0 &&
            timelineEvents.value[index]
        ) {
            timelineEvents.value[index].visible = true;
        }
    });

    // Calculate timeline progress
    const timelineEl = document.querySelector(".timeline-container");
    if (timelineEl) {
        const rect = timelineEl.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        const total = rect.height - windowHeight;
        timelineProgress.value = Math.min(100, (scrolled / total) * 100);
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Trigger first event after mount
    setTimeout(() => {
        if (timelineEvents.value[0]) {
            timelineEvents.value[0].visible = true;
        }
    }, 300);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <section
        class="py-20 bg-gradient-to-b from-rose-50/20 via-white to-rose-50/20"
    >
        <div class="container mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <div class="inline-block mb-6">
                    <div class="flex items-center space-x-3">
                        <div
                            class="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"
                        ></div>
                        <svg
                            class="w-6 h-6 text-rose-400 animate-pulse-slow"
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
                    class="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-4 font-secondary"
                >
                    Our Wedding Day
                </h2>
                <p
                    class="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto"
                >
                    A timeline of love, laughter, and happily ever after
                </p>
            </div>

            <!-- Timeline Container -->
            <div class="max-w-4xl mx-auto timeline-container">
                <div class="relative">
                    <!-- Vertical Line -->
                    <div
                        class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-rose-200 hidden md:block"
                    >
                        <!-- Animated progress line -->
                        <div
                            class="absolute top-0 left-0 w-full bg-gradient-to-b from-rose-400 to-amber-400 transition-all duration-300 ease-out"
                            :style="{ height: `${timelineProgress}%` }"
                        ></div>
                    </div>

                    <!-- Timeline Events -->
                    <div class="space-y-12 md:space-y-16">
                        <div
                            v-for="(event, index) in timelineEvents"
                            :key="index"
                            class="timeline-event relative flex items-center"
                            :class="
                                index % 2 === 0
                                    ? 'justify-start'
                                    : 'justify-end'
                            "
                        >
                            <!-- Timeline Dot -->
                            <div
                                class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center"
                            >
                                <!-- Pulsing ring -->
                                <div
                                    class="absolute inset-0 rounded-full bg-rose-400 opacity-20 animate-ping"
                                ></div>
                            </div>

                            <!-- Mobile timeline dot -->
                            <div
                                class="md:hidden absolute left-8 top-6 w-4 h-4 rounded-full bg-rose-400 border-4 border-white shadow-lg z-10"
                            ></div>
                            <div
                                class="md:hidden absolute left-[2.4rem] top-6 bottom-0 w-0.5 bg-rose-200"
                            ></div>

                            <!-- Event Card -->
                            <div
                                class="w-full md:w-5/12"
                                :class="
                                    index % 2 === 0
                                        ? 'pr-8 md:text-right'
                                        : 'pl-8 md:text-left'
                                "
                            >
                                <div
                                    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden group"
                                    :class="[
                                        event.visible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8',
                                    ]"
                                >
                                    <!-- Decorative gradient overlay -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    ></div>

                                    <div class="relative z-10">
                                        <div
                                            class="text-rose-500 font-playfair text-2xl md:text-3xl font-light mb-3 group-hover:text-rose-600 transition-colors duration-300"
                                        >
                                            {{ event.time }}
                                        </div>
                                        <h3
                                            class="text-2xl md:text-3xl font-light text-gray-800 mb-3 font-secondary group-hover:text-rose-600 transition-colors duration-300"
                                        >
                                            {{ event.title }}
                                        </h3>
                                        <p
                                            class="text-gray-600 font-light leading-relaxed text-base md:text-lg"
                                        >
                                            {{ event.description }}
                                        </p>
                                    </div>

                                    <!-- Decorative corner -->
                                    <div
                                        class="absolute top-0 right-0 w-16 h-16 opacity-5"
                                        :class="
                                            index % 2 === 0
                                                ? 'left-0'
                                                : 'right-0'
                                        "
                                    >
                                        <svg
                                            viewBox="0 0 100 100"
                                            class="text-rose-400"
                                        >
                                            <path
                                                d="M0,0 L100,0 L100,100 Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Decorative Elements -->
            <div class="mt-16 text-center">
                <div class="inline-flex items-center space-x-4">
                    <div class="h-px w-16 bg-rose-300"></div>
                    <div class="text-rose-400">
                        <svg
                            class="w-8 h-8 animate-pulse-slow"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                    </div>
                    <div class="h-px w-16 bg-rose-300"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

/* Staggered animation delays for events */
.timeline-event:nth-child(1) .bg-white {
    transition-delay: 0.1s;
}
.timeline-event:nth-child(2) .bg-white {
    transition-delay: 0.2s;
}
.timeline-event:nth-child(3) .bg-white {
    transition-delay: 0.3s;
}
.timeline-event:nth-child(4) .bg-white {
    transition-delay: 0.4s;
}
.timeline-event:nth-child(5) .bg-white {
    transition-delay: 0.5s;
}
.timeline-event:nth-child(6) .bg-white {
    transition-delay: 0.6s;
}
.timeline-event:nth-child(7) .bg-white {
    transition-delay: 0.7s;
}

@media (max-width: 768px) {
    .relative.flex {
        justify-content: flex-start !important;
    }

    .w-5\/12 {
        width: 100%;
        padding-left: 2rem !important;
        padding-right: 0 !important;
        text-align: left !important;
    }
}
</style>
