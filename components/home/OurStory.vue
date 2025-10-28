<script lang="ts" setup>
import { ref, onMounted } from "vue";

const milestones = ref([
    {
        id: 1,
        title: "First Met",
        date: "January 15, 2019",
        story: "Two strangers crossed paths at a coffee shop, unaware that a beautiful journey was about to begin.",
        icon: "heart",
        visible: false,
    },
    {
        id: 2,
        title: "Became a Couple",
        date: "September 08, 2020",
        story: "After months of laughter, deep conversations, and stolen glances, we officially became one.",
        icon: "heart",
        visible: false,
    },
    {
        id: 3,
        title: "The Proposal",
        date: "March 22, 2024",
        story: "Under a starlit sky, with trembling hands and a full heart, the question was asked. She said yes!",
        icon: "ring",
        visible: false,
    },
    {
        id: 4,
        title: "The Wedding",
        date: "December 15, 2025",
        story: "The day we've been dreaming of - where two become one, surrounded by love and cherished memories.",
        icon: "toast",
        visible: false,
    },
]);

const handleScroll = () => {
    const elements = document.querySelectorAll(".story-card");
    const windowHeight = window.innerHeight;

    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;

        if (
            elementMiddle < windowHeight * 0.8 &&
            elementMiddle > 0 &&
            milestones.value[index]
        ) {
            milestones.value[index].visible = true;
        }
    });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Trigger first milestone after mount
    setTimeout(() => {
        if (milestones.value[0]) {
            milestones.value[0].visible = true;
        }
    }, 300);
});
</script>

<template>
    <section
        class="relative py-16 md:py-24 bg-gradient-to-b from-rose-50/30 via-white to-rose-50/30 overflow-hidden"
    >
        <!-- Background decorative elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-40 right-10 w-40 h-40 opacity-5">
                <svg
                    viewBox="0 0 100 100"
                    class="text-rose-400 animate-spin-slow"
                >
                    <circle cx="50" cy="50" r="2" fill="currentColor">
                        <animate
                            attributeName="r"
                            values="2;40;2"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
            <div class="absolute bottom-40 left-10 w-32 h-32 opacity-5">
                <svg
                    viewBox="0 0 100 100"
                    class="text-amber-400 animate-spin-slow-reverse"
                >
                    <circle cx="50" cy="50" r="2" fill="currentColor">
                        <animate
                            attributeName="r"
                            values="2;35;2"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="1;0.2;1"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </div>

        <div class="max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
            <!-- Header Section with Image -->
            <div
                class="flex flex-col lg:flex-row lg:items-center lg:space-x-16 xl:space-x-24 mb-20 md:mb-28"
            >
                <!-- Image Section -->
                <div
                    class="w-full lg:w-5/12 relative flex justify-center lg:justify-start mb-12 lg:mb-0"
                >
                    <div
                        class="p-4 sm:p-5 bg-gradient-to-br from-amber-100 to-rose-100 rounded-t-full relative z-[1] max-w-md shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                    >
                        <div class="w-full rounded-t-full overflow-hidden">
                            <img
                                class="w-full transform hover:scale-110 transition-transform duration-700"
                                src="/images/element2.png"
                                alt="couple"
                            />
                        </div>
                    </div>
                    <div
                        class="w-[200px] sm:w-[250px] lg:w-[300px] absolute top-0 -right-[100px] sm:-right-[125px] lg:-right-[150px] rotate-45 z-0 opacity-60"
                    >
                        <img src="/images/decor1.png" alt="decor" />
                    </div>
                </div>

                <!-- Title Section -->
                <div class="w-full lg:w-7/12 text-center lg:text-left">
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
                        A Love Story
                    </h2>
                    <p
                        class="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    >
                        Every great love story has a beginning. Here's ours - a
                        journey of laughter, growth, and endless moments that
                        led us to forever.
                    </p>
                </div>
            </div>

            <!-- Story Cards Section -->
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div
                        v-for="(milestone, index) in milestones"
                        :key="milestone.id"
                        class="story-card"
                        :class="[
                            milestone.visible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8',
                            index % 2 === 0 ? 'lg:mt-12' : 'lg:-mt-12',
                        ]"
                    >
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden h-fit group"
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
                                    :src="`/images/${milestone.icon}.png`"
                                    :alt="milestone.icon"
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
                                            :src="`/images/${milestone.icon}.png`"
                                            :alt="milestone.icon"
                                            class="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl md:text-3xl font-playfair text-gray-800 mb-1 group-hover:text-rose-600 transition-colors duration-300"
                                        >
                                            {{ milestone.title }}
                                        </h3>
                                        <p
                                            class="text-sm tracking-widest text-rose-500 uppercase font-medium"
                                        >
                                            {{ milestone.date }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Story Content -->
                                <p
                                    class="text-gray-600 leading-relaxed font-light text-lg"
                                >
                                    {{ milestone.story }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute bottom-0 left-0 w-20 h-20 opacity-5"
                            >
                                <svg
                                    viewBox="0 0 100 100"
                                    class="text-rose-400"
                                >
                                    <path
                                        d="M0,100 L100,100 L0,0 Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom decorative element -->
            <div class="mt-20 text-center">
                <div class="inline-flex items-center space-x-4">
                    <div
                        class="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                    ></div>
                    <p class="text-gray-500 italic font-light">
                        And the adventure continues...
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

@keyframes spin-very-slow {
    from {
        transform: rotate(45deg);
    }
    to {
        transform: rotate(405deg);
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

.animate-spin-very-slow {
    animation: spin-very-slow 60s linear infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

/* Custom shadow */
.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Staggered animation delays for cards */
.story-card:nth-child(1) {
    transition-delay: 0.1s;
}
.story-card:nth-child(2) {
    transition-delay: 0.2s;
}
.story-card:nth-child(3) {
    transition-delay: 0.3s;
}
.story-card:nth-child(4) {
    transition-delay: 0.4s;
}
</style>
