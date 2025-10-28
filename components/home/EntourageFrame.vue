<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const entourage = {
    parents: {
        bride: {
            father: "Mr. Roberto Dela Cruz",
            mother: "Mrs. Maria Dela Cruz",
            label: "Parents of the Bride",
        },
        groom: {
            father: "Mr. Antonio Santos",
            mother: "Mrs. Elena Santos",
            label: "Parents of the Groom",
        },
    },
    principalSponsors: [
        {
            name: "Atty. Roberto & Mrs. Maria Santos",
            role: "Principal Sponsor",
        },
        {
            name: "Dr. Carlos & Mrs. Elena Rodriguez",
            role: "Principal Sponsor",
        },
        {
            name: "Engr. Miguel & Mrs. Sofia Fernandez",
            role: "Principal Sponsor",
        },
        {
            name: "Atty. Antonio & Mrs. Carmen Dela Cruz",
            role: "Principal Sponsor",
        },
    ],
    secondarySponsors: [
        { name: "Marcus & Leila Santiago", role: "Candle Sponsors" },
        { name: "David & Anna Reyes", role: "Veil Sponsors" },
        { name: "Michael & Clara Martinez", role: "Cord Sponsors" },
    ],
    groomsmen: [
        { name: "Daniel Wilson", role: "Best Man" },
        { name: "Joshua Thompson", role: "Groomsman" },
        { name: "Ryan Garcia", role: "Groomsman" },
        { name: "Kevin Lee", role: "Groomsman" },
    ],
    bridesmaids: [
        { name: "Sophia Anderson", role: "Maid of Honor" },
        { name: "Emma Davis", role: "Bridesmaid" },
        { name: "Olivia Brown", role: "Bridesmaid" },
        { name: "Ava Johnson", role: "Bridesmaid" },
    ],
    coinBearer: { name: "Lucas James", role: "Coin Bearer" },
    bibleBearer: { name: "Ethan Michael", role: "Bible Bearer" },
    ringBearer: { name: "Liam Alexander", role: "Ring Bearer" },
    flowerGirls: [
        { name: "Isabella Rose", role: "Flower Girl" },
        { name: "Mia Grace", role: "Flower Girl" },
    ],
};

// Section visibility states
const sectionsVisible = ref({
    header: false,
    parents: false,
    principalSponsors: false,
    secondarySponsors: false,
    weddingParty: false,
    littleOnes: false,
});

// Intersection observer for scroll animations
const handleScroll = () => {
    const windowHeight = window.innerHeight;

    // Check header section
    const headerEl = document.querySelector(".entourage-header");
    if (headerEl) {
        const rect = headerEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.header = true;
        }
    }

    // Check parents section
    const parentsEl = document.querySelector(".parents-section");
    if (parentsEl) {
        const rect = parentsEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.parents = true;
        }
    }

    // Check principal sponsors section
    const principalEl = document.querySelector(".principal-sponsors-section");
    if (principalEl) {
        const rect = principalEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.principalSponsors = true;
        }
    }

    // Check secondary sponsors section
    const secondaryEl = document.querySelector(".secondary-sponsors-section");
    if (secondaryEl) {
        const rect = secondaryEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.secondarySponsors = true;
        }
    }

    // Check wedding party section
    const weddingPartyEl = document.querySelector(".wedding-party-section");
    if (weddingPartyEl) {
        const rect = weddingPartyEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.weddingParty = true;
        }
    }

    // Check little ones section
    const littleOnesEl = document.querySelector(".little-ones-section");
    if (littleOnesEl) {
        const rect = littleOnesEl.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.top > 0) {
            sectionsVisible.value.littleOnes = true;
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Trigger header animation after mount
    setTimeout(() => {
        sectionsVisible.value.header = true;
    }, 300);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <section
        class="relative py-16 md:py-24 bg-gradient-to-b from-rose-50/20 via-white to-amber-50/20 overflow-hidden"
    >
        <!-- Background decorative elements -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 right-10 w-32 h-32 opacity-5">
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
            <div class="absolute bottom-20 left-10 w-28 h-28 opacity-5">
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
            <div class="absolute top-1/2 left-1/4 w-24 h-24 opacity-3">
                <svg
                    viewBox="0 0 100 100"
                    class="text-rose-300 animate-spin-slow"
                >
                    <circle cx="50" cy="50" r="1.5" fill="currentColor">
                        <animate
                            attributeName="r"
                            values="1.5;20;1.5"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="0.8;0.1;0.8"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </div>

        <div class="max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
            <!-- Section Header -->
            <div
                class="entourage-header text-center mb-20 transition-all duration-1000 ease-out"
                :class="
                    sectionsVisible.header
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <div class="inline-block mb-8">
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
                    Our Entourage
                </h2>
                <p
                    class="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    The cherished family and friends who will stand with us as
                    we begin our forever
                </p>
            </div>

            <!-- Parents Section -->
            <div
                class="parents-section max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ease-out delay-200"
                :class="
                    sectionsVisible.parents
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <h3
                    class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                >
                    Our Parents
                </h3>
                <div class="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div class="group relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10 text-center">
                                <div class="mb-6">
                                    <div
                                        class="w-20 h-20 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <svg
                                            class="w-10 h-10 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h4
                                        class="text-xl sm:text-2xl font-light text-gray-800 mb-4 font-secondary group-hover:text-rose-600 transition-colors duration-300"
                                    >
                                        {{ entourage.parents.bride.label }}
                                    </h4>
                                </div>
                                <div class="space-y-3">
                                    <p
                                        class="text-lg sm:text-xl text-gray-800 font-light"
                                    >
                                        {{ entourage.parents.bride.father }}
                                    </p>
                                    <p
                                        class="text-lg sm:text-xl text-gray-800 font-light"
                                    >
                                        {{ entourage.parents.bride.mother }}
                                    </p>
                                </div>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-20 h-20 opacity-5"
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

                    <div class="group relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10 text-center">
                                <div class="mb-6">
                                    <div
                                        class="w-20 h-20 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <svg
                                            class="w-10 h-10 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h4
                                        class="text-xl sm:text-2xl font-light text-gray-800 mb-4 font-secondary group-hover:text-rose-600 transition-colors duration-300"
                                    >
                                        {{ entourage.parents.groom.label }}
                                    </h4>
                                </div>
                                <div class="space-y-3">
                                    <p
                                        class="text-lg sm:text-xl text-gray-800 font-light"
                                    >
                                        {{ entourage.parents.groom.father }}
                                    </p>
                                    <p
                                        class="text-lg sm:text-xl text-gray-800 font-light"
                                    >
                                        {{ entourage.parents.groom.mother }}
                                    </p>
                                </div>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-20 h-20 opacity-5"
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

            <!-- Principal Sponsors Section -->
            <div
                class="principal-sponsors-section max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ease-out delay-300"
                :class="
                    sectionsVisible.principalSponsors
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <h3
                    class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                >
                    Principal Sponsors
                </h3>
                <div class="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div
                        v-for="(sponsor, index) in entourage.principalSponsors"
                        :key="index"
                        class="group relative"
                    >
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden"
                            :style="{ transitionDelay: `${index * 100}ms` }"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10 text-center">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ sponsor.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ sponsor.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

            <!-- Secondary Sponsors Section -->
            <div
                class="secondary-sponsors-section max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ease-out delay-400"
                :class="
                    sectionsVisible.secondarySponsors
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <h3
                    class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                >
                    Secondary Sponsors
                </h3>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    <div
                        v-for="(sponsor, index) in entourage.secondarySponsors"
                        :key="index"
                        class="group relative"
                    >
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden text-center"
                            :style="{ transitionDelay: `${index * 100}ms` }"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ sponsor.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ sponsor.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

            <!-- Wedding Party Section -->
            <div
                class="wedding-party-section max-w-6xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ease-out delay-500"
                :class="
                    sectionsVisible.weddingParty
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <div class="grid md:grid-cols-2 gap-8 md:gap-12">
                    <!-- Groomsmen -->
                    <div>
                        <h3
                            class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                        >
                            Groomsmen
                        </h3>
                        <div class="space-y-4 md:space-y-6">
                            <div
                                v-for="(
                                    groomsman, index
                                ) in entourage.groomsmen"
                                :key="index"
                                class="group relative"
                            >
                                <div
                                    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden"
                                    :style="{
                                        transitionDelay: `${index * 100}ms`,
                                    }"
                                >
                                    <!-- Decorative gradient overlay -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    ></div>

                                    <div class="relative z-10">
                                        <p
                                            class="text-lg sm:text-xl text-gray-800 font-light mb-1 group-hover:text-rose-600 transition-colors duration-300"
                                        >
                                            {{ groomsman.name }}
                                        </p>
                                        <p
                                            class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                        >
                                            {{ groomsman.role }}
                                        </p>
                                    </div>

                                    <!-- Decorative corner -->
                                    <div
                                        class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

                    <!-- Bridesmaids -->
                    <div>
                        <h3
                            class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                        >
                            Bridesmaids
                        </h3>
                        <div class="space-y-4 md:space-y-6">
                            <div
                                v-for="(
                                    bridesmaid, index
                                ) in entourage.bridesmaids"
                                :key="index"
                                class="group relative"
                            >
                                <div
                                    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden"
                                    :style="{
                                        transitionDelay: `${index * 100}ms`,
                                    }"
                                >
                                    <!-- Decorative gradient overlay -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    ></div>

                                    <div class="relative z-10">
                                        <p
                                            class="text-lg sm:text-xl text-gray-800 font-light mb-1 group-hover:text-rose-600 transition-colors duration-300"
                                        >
                                            {{ bridesmaid.name }}
                                        </p>
                                        <p
                                            class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                        >
                                            {{ bridesmaid.role }}
                                        </p>
                                    </div>

                                    <!-- Decorative corner -->
                                    <div
                                        class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

            <!-- Little Ones Section -->
            <div
                class="little-ones-section max-w-4xl mx-auto transition-all duration-1000 ease-out delay-600"
                :class="
                    sectionsVisible.littleOnes
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                "
            >
                <h3
                    class="text-2xl sm:text-3xl font-light text-center text-gray-800 mb-8 md:mb-12 font-secondary"
                >
                    Our Little Ones
                </h3>
                <div
                    class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6"
                >
                    <div class="group relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden text-center"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ entourage.coinBearer.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ entourage.coinBearer.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

                    <div class="group relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden text-center"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ entourage.bibleBearer.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ entourage.bibleBearer.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

                    <div class="group relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden text-center"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ entourage.ringBearer.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ entourage.ringBearer.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

                <div
                    class="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto"
                >
                    <div
                        v-for="(girl, index) in entourage.flowerGirls"
                        :key="index"
                        class="group relative"
                    >
                        <div
                            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-2 relative overflow-hidden text-center"
                            :style="{ transitionDelay: `${index * 100}ms` }"
                        >
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div class="relative z-10">
                                <p
                                    class="text-lg sm:text-xl text-gray-800 font-light mb-2 group-hover:text-rose-600 transition-colors duration-300"
                                >
                                    {{ girl.name }}
                                </p>
                                <p
                                    class="text-sm text-rose-500 font-medium uppercase tracking-wider"
                                >
                                    {{ girl.role }}
                                </p>
                            </div>

                            <!-- Decorative corner -->
                            <div
                                class="absolute top-0 right-0 w-16 h-16 opacity-5"
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

            <!-- Bottom decorative element -->
            <div class="mt-20 text-center">
                <div class="inline-flex items-center space-x-4">
                    <div
                        class="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                    ></div>
                    <p class="text-gray-500 italic font-light">
                        Blessed by the presence of our loved ones
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
.principal-sponsors-section .group:nth-child(1) {
    transition-delay: 0.1s;
}
.principal-sponsors-section .group:nth-child(2) {
    transition-delay: 0.2s;
}
.principal-sponsors-section .group:nth-child(3) {
    transition-delay: 0.3s;
}
.principal-sponsors-section .group:nth-child(4) {
    transition-delay: 0.4s;
}

.secondary-sponsors-section .group:nth-child(1) {
    transition-delay: 0.1s;
}
.secondary-sponsors-section .group:nth-child(2) {
    transition-delay: 0.2s;
}
.secondary-sponsors-section .group:nth-child(3) {
    transition-delay: 0.3s;
}

.wedding-party-section .group:nth-child(1) {
    transition-delay: 0.1s;
}
.wedding-party-section .group:nth-child(2) {
    transition-delay: 0.2s;
}
.wedding-party-section .group:nth-child(3) {
    transition-delay: 0.3s;
}
.wedding-party-section .group:nth-child(4) {
    transition-delay: 0.4s;
}

.little-ones-section .group:nth-child(1) {
    transition-delay: 0.1s;
}
.little-ones-section .group:nth-child(2) {
    transition-delay: 0.2s;
}
.little-ones-section .group:nth-child(3) {
    transition-delay: 0.3s;
}
</style>
