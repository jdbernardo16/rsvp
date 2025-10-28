<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const locations = ref([
    {
        id: 1,
        type: "ceremony",
        title: "Ceremony",
        time: "3:00 PM",
        description: "Witness us become one at exactly 3:00 in the afternoon",
        venue: "Parish of the Holy Family",
        address: "Luyos, Tanauan, Batangas",
        icon: "heart",
        visible: false,
    },
    {
        id: 2,
        type: "reception",
        title: "Reception",
        time: "4:45 PM onwards",
        description:
            "Join us celebrate and have fun until the last minute of our special day",
        venue: "Jardin De Antonio",
        address: "Talaga, Tanauan, Batangas",
        icon: "toast",
        visible: false,
    },
]);

const sectionVisible = ref(false);

const handleScroll = () => {
    const sectionEl = document.querySelector(".locations-section");
    const locationCards = document.querySelectorAll(".location-card");
    const windowHeight = window.innerHeight;

    if (sectionEl) {
        const rect = sectionEl.getBoundingClientRect();

        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionVisible.value = true;
        }
    }

    locationCards.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (
            elementMiddle < windowHeight * 0.8 &&
            elementMiddle > 0 &&
            locations.value[index]
        ) {
            locations.value[index].visible = true;
        }
    });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Trigger section animation after mount
    setTimeout(() => {
        sectionVisible.value = true;
    }, 300);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <section
        class="locations-section relative py-20 md:py-28 bg-gradient-to-b from-rose-50/30 via-white to-amber-50/30 overflow-hidden"
    >
        <!-- Background decorative elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 left-10 w-32 h-32 opacity-5">
                <svg
                    viewBox="0 0 100 100"
                    class="text-rose-400 animate-spin-slow"
                >
                    <circle cx="50" cy="50" r="2" fill="currentColor">
                        <animate
                            attributeName="r"
                            values="2;30;2"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="1;0.2;1"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
            <div class="absolute bottom-20 right-10 w-28 h-28 opacity-5">
                <svg
                    viewBox="0 0 100 100"
                    class="text-amber-400 animate-spin-slow-reverse"
                >
                    <circle cx="50" cy="50" r="2" fill="currentColor">
                        <animate
                            attributeName="r"
                            values="2;25;2"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </div>

        <div class="max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
            <!-- Section Header -->
            <div
                class="text-center mb-16 md:mb-20 transition-all duration-1000 ease-out"
                :class="
                    sectionVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
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
                    class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-secondary leading-tight mb-6 text-gray-800"
                >
                    The Locations
                </h2>
                <p
                    class="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    Witness us become one in these beautiful venues
                </p>
            </div>

            <!-- Locations Grid -->
            <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                <div
                    v-for="(location, index) in locations"
                    :key="location.id"
                    class="location-card"
                    :class="[
                        location.visible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8',
                    ]"
                >
                    <div
                        class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden h-full group"
                    >
                        <!-- Decorative gradient overlay -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>

                        <!-- Icon -->
                        <div
                            class="absolute -top-4 -right-4 w-20 h-20 opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-500"
                        >
                            <img
                                :src="`/images/${location.icon}.png`"
                                :alt="location.icon"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <div class="relative z-10">
                            <!-- Icon and Title Row -->
                            <div class="flex items-center mb-6">
                                <div
                                    class="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center mr-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                                >
                                    <img
                                        :src="`/images/${location.icon}.png`"
                                        :alt="location.icon"
                                        class="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="text-2xl md:text-3xl font-playfair text-gray-800 mb-1 group-hover:text-rose-600 transition-colors duration-300"
                                    >
                                        {{ location.title }}
                                    </h3>
                                    <p
                                        class="text-sm tracking-widest text-rose-500 uppercase font-medium"
                                    >
                                        {{ location.time }}
                                    </p>
                                </div>
                            </div>

                            <!-- Description -->
                            <p
                                class="text-gray-600 leading-relaxed font-light text-lg mb-6"
                            >
                                {{ location.description }}
                            </p>

                            <!-- Venue Details -->
                            <div class="border-t border-rose-100 pt-6">
                                <p
                                    class="text-xl md:text-2xl font-light text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ location.venue }}
                                </p>
                                <p
                                    class="text-gray-600 font-light leading-relaxed"
                                >
                                    {{ location.address }}
                                </p>
                            </div>
                        </div>

                        <!-- Decorative corner -->
                        <div
                            class="absolute bottom-0 left-0 w-20 h-20 opacity-5"
                        >
                            <svg viewBox="0 0 100 100" class="text-rose-400">
                                <path
                                    d="M0,100 L100,100 L0,0 Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom decorative element -->
            <div class="mt-16 text-center">
                <div class="inline-flex items-center space-x-4">
                    <div
                        class="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                    ></div>
                    <p class="text-gray-500 italic font-light">
                        We can't wait to see you there
                    </p>
                    <div
                        class="h-px w-24 bg-gradient-to-l from-transparent via-rose-300 to-transparent"
                    ></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-slow-reverse {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
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

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
    animation: spin-slow-reverse 25s linear infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

/* Staggered animation delays for cards */
.location-card:nth-child(1) {
    transition-delay: 0.1s;
}
.location-card:nth-child(2) {
    transition-delay: 0.2s;
}
</style>
