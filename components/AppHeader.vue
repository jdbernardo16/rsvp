<script lang="ts" setup>
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
};
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 py-4"
    >
        <div
            class="max-w-[var(--container-default)] mx-auto px-8 flex justify-between items-center"
        >
            <div class="text-left">
                <h1
                    class="font-secondary text-3xl font-normal text-brown tracking-wide"
                >
                    Dannica & James
                </h1>
            </div>

            <nav>
                <ul class="flex gap-8">
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
        </div>
    </header>
</template>

<style scoped>
/* Add padding to body to account for fixed header */
:global(body) {
    padding-top: var(--spacing-header);
}
</style>
