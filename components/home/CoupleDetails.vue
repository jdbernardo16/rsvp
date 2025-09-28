<script lang="ts" setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);
const hoveredItem = ref<string | null>(null);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 300);
});

const handleMouseEnter = (category: string) => {
    hoveredItem.value = category;
};

const handleMouseLeave = () => {
    hoveredItem.value = null;
};
</script>

<template>
    <section class="bg-brown relative overflow-hidden">
        <!-- Subtle decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-20 w-8 h-8 opacity-10">
                <img
                    src="/images/heart.png"
                    alt="heart"
                    class="w-full h-full"
                />
            </div>
            <div class="absolute bottom-32 right-32 w-12 h-12 opacity-5">
                <img
                    src="/images/heart.png"
                    alt="heart"
                    class="w-full h-full"
                />
            </div>
        </div>

        <div class="max-w-[1440px] m-auto px-20 py-20 text-white relative z-10">
            <div class="flex items-center space-x-20">
                <div class="w-7/12">
                    <div class="grid grid-cols-2 gap-x-10 gap-y-20 text-center">
                        <!-- He Likes Section -->
                        <div
                            class="relative group"
                            @mouseenter="handleMouseEnter('he')"
                            @mouseleave="handleMouseLeave"
                        >
                            <div
                                class="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                            <p
                                class="text-3xl font-playfair mb-4 relative z-10"
                            >
                                <span
                                    class="inline-block transform transition-all duration-300"
                                    :class="{
                                        'scale-105': hoveredItem === 'he',
                                    }"
                                >
                                    HE LIKES
                                </span>
                            </p>
                            <ul class="tracking-widest text-xl space-y-1">
                                <li
                                    v-for="(item, index) in [
                                        'Sports',
                                        'Chocolates',
                                        'Singing',
                                        'Shoes',
                                        'Nature',
                                    ]"
                                    :key="item"
                                    class="transform transition-all duration-300 hover:scale-105 hover:text-white/80"
                                    :style="{
                                        transitionDelay: `${index * 50}ms`,
                                    }"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>

                        <!-- She Likes Section -->
                        <div
                            class="relative group"
                            @mouseenter="handleMouseEnter('she')"
                            @mouseleave="handleMouseLeave"
                        >
                            <div
                                class="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                            <p
                                class="text-3xl font-playfair mb-4 relative z-10"
                            >
                                <span
                                    class="inline-block transform transition-all duration-300"
                                    :class="{
                                        'scale-105': hoveredItem === 'she',
                                    }"
                                >
                                    SHE LIKES
                                </span>
                            </p>
                            <ul class="tracking-widest text-xl space-y-1">
                                <li
                                    v-for="(item, index) in [
                                        'K-Drama',
                                        'Fruits',
                                        'Singing',
                                        'Perfume & Mist',
                                        'Photography',
                                        'Beach & Mountains',
                                    ]"
                                    :key="item"
                                    class="transform transition-all duration-300 hover:scale-105 hover:text-white/80"
                                    :style="{
                                        transitionDelay: `${index * 50}ms`,
                                    }"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>

                        <!-- They Like Section -->
                        <div class="col-span-full relative group">
                            <div
                                class="absolute -inset-4 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                            <p
                                class="text-3xl font-playfair mb-4 relative z-10"
                            >
                                <span
                                    class="inline-block transform transition-all duration-300 group-hover:scale-105"
                                >
                                    THEY LIKE
                                </span>
                            </p>
                            <ul class="tracking-widest text-xl space-y-1">
                                <li
                                    v-for="(item, index) in [
                                        'Watching Movies Together',
                                        'Going on Road Trips',
                                        'Praying & Singing Praises',
                                        'Exploring Scents',
                                        'Trying Out New Food',
                                        'Doing Tiktok Trends',
                                        'Taking Photos & Videos',
                                    ]"
                                    :key="item"
                                    class="transform transition-all duration-300 hover:scale-105 hover:text-white/80"
                                    :style="{
                                        transitionDelay: `${index * 50}ms`,
                                    }"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Image Section with Subtle Effects -->
                <div class="w-5/12 relative">
                    <div class="relative">
                        <!-- Main image container -->
                        <div
                            class="p-5 bg-white/10 backdrop-blur-sm rounded-t-full relative z-[1] transform transition-all duration-500 hover:scale-105"
                        >
                            <div
                                class="w-full rounded-t-full overflow-hidden relative"
                            >
                                <img
                                    class="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
                                    src="/images/img2.JPG"
                                    alt="couple"
                                />
                                <!-- Subtle overlay -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                        </div>

                        <!-- Decorative element -->
                        <div
                            class="w-[300px] absolute top-0 -left-[150px] -rotate-45 z-0"
                        >
                            <img
                                class="invert opacity-20"
                                src="/images/decor1.png"
                                alt="decor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Subtle hover transitions */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Smooth transitions */
* {
    transition-timing-function: ease-in-out;
}
</style>
