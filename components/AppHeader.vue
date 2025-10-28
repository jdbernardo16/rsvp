<script lang="ts" setup>
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Details", href: "#details" },
    { name: "RSVP", href: "#rsvp" },
];

const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    isMenuOpen.value = false;
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Prevent body scroll when mobile menu is open (only on client side)
watch(isMenuOpen, (newValue) => {
    if (typeof window !== "undefined") {
        if (newValue) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
});
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 py-4"
    >
        <div
            class="max-w-[var(--container-default)] mx-auto px-4 sm:px-8 flex justify-between items-center"
        >
            <div class="text-left">
                <h1
                    class="font-secondary text-2xl sm:text-3xl font-normal text-brown tracking-wide"
                >
                    Dannica & James
                </h1>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:block">
                <ul class="flex gap-6 sm:gap-8">
                    <li v-for="item in navItems" :key="item.name">
                        <button
                            @click="scrollToSection(item.href)"
                            class="font-primary text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group"
                        >
                            {{ item.name }}
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-200 to-amber-200 group-hover:w-full transition-all duration-300"
                            ></span>
                        </button>
                    </li>
                </ul>
            </nav>

            <!-- Mobile Hamburger Menu -->
            <button
                @click="toggleMenu"
                class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-amber-200 rounded-lg hover:bg-gray-50 transition-all duration-200 p-2"
                aria-label="Toggle menu"
                :class="isMenuOpen ? 'bg-amber-50' : ''"
            >
                <span
                    class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out transform"
                    :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
                ></span>
                <span
                    class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out"
                    :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
                ></span>
                <span
                    class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out transform"
                    :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
                ></span>
            </button>
        </div>

        <!-- Mobile Navigation Drawer -->
    </header>

    <Teleport to="body">
        <div
            class="md:hidden fixed inset-0 z-40"
            :class="isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'"
        >
            <!-- Backdrop -->
            <div
                @click="toggleMenu"
                class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300"
                :class="isMenuOpen ? 'opacity-100' : 'opacity-0'"
            ></div>

            <!-- Menu Drawer -->
            <nav
                class="absolute right-0 top-0 h-full w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-300 ease-in-out overflow-y-auto"
                :class="
                    isMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                "
            >
                <div class="flex flex-col h-full min-h-screen">
                    <!-- Header with Close Button -->
                    <div
                        class="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100"
                    >
                        <div class="text-left">
                            <h2
                                class="font-secondary text-xl sm:text-2xl font-normal text-brown tracking-wide"
                            >
                                Menu
                            </h2>
                        </div>
                        <button
                            @click="toggleMenu"
                            class="p-3 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                            aria-label="Close menu"
                        >
                            <svg
                                class="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Navigation Links -->
                    <div class="flex-1 py-4 sm:py-6">
                        <ul
                            class="flex flex-col px-4 sm:px-6 space-y-2 sm:space-y-3"
                        >
                            <li v-for="item in navItems" :key="item.name">
                                <button
                                    @click="scrollToSection(item.href)"
                                    class="block w-full text-left px-4 sm:px-5 py-4 sm:py-5 text-base sm:text-lg font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span class="flex items-center">
                                        <span class="mr-3">
                                            <!-- Add simple icon indicators -->
                                            <svg
                                                v-if="item.name === 'Home'"
                                                class="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                ></path>
                                            </svg>
                                            <svg
                                                v-else-if="
                                                    item.name === 'Our Story'
                                                "
                                                class="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                ></path>
                                            </svg>
                                            <svg
                                                v-else-if="
                                                    item.name === 'Details'
                                                "
                                                class="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <svg
                                                v-else-if="item.name === 'RSVP'"
                                                class="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                        </span>
                                        {{ item.name }}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- Footer -->
                    <div class="p-4 sm:p-6 border-t border-gray-100 mt-auto">
                        <div class="text-center">
                            <p class="text-xs sm:text-sm text-gray-500 mb-2">
                                Dannica & James
                            </p>
                            <p class="text-xs text-gray-400">Wedding RSVP</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </Teleport>
</template>

<style scoped>
/* Add padding to body to account for fixed header */
:global(body) {
    padding-top: var(--spacing-header);
}
</style>
