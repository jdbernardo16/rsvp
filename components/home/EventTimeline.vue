<script lang="ts" setup>
const timelineEvents = [
    {
        time: "2:30 PM",
        title: "Entourage Procession",
        description:
            "The beautiful beginning as our entourage makes their way down the aisle",
    },
    {
        time: "3:00 PM",
        title: "Wedding Ceremony",
        description: "The moment we say 'I do' and begin our forever together",
    },
    {
        time: "4:45 PM",
        title: "Cocktails & Photos",
        description:
            "Celebrate with drinks while we capture these precious moments",
    },
    {
        time: "6:00 PM",
        title: "Dinner & Photos",
        description: "A feast to share with loved ones as the evening unfolds",
    },
    {
        time: "7:00 PM",
        title: "Program & Fun",
        description: "Games, laughter, and memories that will last a lifetime",
    },
    {
        time: "7:15 PM",
        title: "Dances & Advices",
        description:
            "First dance as husband and wife, followed by heartfelt wisdom",
    },
    {
        time: "8:00 PM",
        title: "Messages & SDE",
        description:
            "Words from the heart and a special same-day edit presentation",
    },
];
</script>

<template>
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2
                    class="text-5xl md:text-6xl font-light text-gray-800 mb-4 font-secondary"
                >
                    Our Wedding Day
                </h2>
                <p class="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    A timeline of love, laughter, and happily ever after
                </p>
            </div>

            <!-- Timeline Container -->
            <div class="max-w-4xl mx-auto">
                <div class="relative">
                    <!-- Vertical Line -->
                    <div
                        class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"
                    ></div>

                    <!-- Timeline Events -->
                    <div class="space-y-12">
                        <div
                            v-for="(event, index) in timelineEvents"
                            :key="index"
                            class="relative flex items-center"
                            :class="
                                index % 2 === 0
                                    ? 'justify-start'
                                    : 'justify-end'
                            "
                        >
                            <!-- Timeline Dot -->
                            <div
                                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brown rounded-full border-4 border-white shadow-lg z-10"
                            ></div>

                            <!-- Event Card -->
                            <div
                                class="w-5/12"
                                :class="
                                    index % 2 === 0
                                        ? 'pr-8 text-right'
                                        : 'pl-8 text-left'
                                "
                            >
                                <div
                                    class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div
                                        class="text-brown font-playfair text-2xl font-light mb-2"
                                    >
                                        {{ event.time }}
                                    </div>
                                    <h3
                                        class="text-2xl font-light text-gray-800 mb-2 font-secondary"
                                    >
                                        {{ event.title }}
                                    </h3>
                                    <p
                                        class="text-gray-600 font-light leading-relaxed"
                                    >
                                        {{ event.description }}
                                    </p>
                                </div>
                            </div>
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
    </section>
</template>

<style scoped>
@media (max-width: 768px) {
    .relative.flex {
        justify-content: flex-start !important;
    }

    .w-5\/12 {
        width: 75%;
        padding-left: 2rem !important;
        padding-right: 0 !important;
        text-align: left !important;
    }
}
</style>
