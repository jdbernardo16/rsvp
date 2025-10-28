<script lang="ts" setup>
const currentYear = new Date().getFullYear();

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
    <footer
        class="bg-gradient-to-b from-amber-50 to-white border-t border-amber-100"
    >
        <div
            class="max-w-[var(--container-default)] mx-auto px-4 sm:px-8 py-12 md:py-16"
        >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <!-- Couple Names & Wedding Info -->
                <div class="text-center md:text-left">
                    <h2
                        class="font-secondary text-3xl md:text-4xl font-normal text-brown mb-4"
                    >
                        Dannica & James
                    </h2>
                    <p class="text-gray-600 mb-4 font-light">
                        Two hearts, one beautiful journey
                    </p>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <div
                            class="w-12 h-0.5 bg-gradient-to-r from-rose-200 to-amber-200"
                        ></div>
                        <img
                            src="/images/heart.png"
                            alt="Heart"
                            class="w-5 h-5 opacity-70"
                        />
                        <div
                            class="w-12 h-0.5 bg-gradient-to-r from-rose-200 to-amber-200"
                        ></div>
                    </div>
                </div>

                <!-- Navigation Links -->
                <div class="text-center">
                    <h3
                        class="font-primary text-sm font-semibold text-gray-700 uppercase tracking-wider mb-6"
                    >
                        Navigate
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="item in navItems" :key="item.name">
                            <button
                                @click="scrollToSection(item.href)"
                                class="font-primary text-gray-600 hover:text-amber-600 transition-colors duration-300 relative group"
                            >
                                {{ item.name }}
                                <span
                                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-200 to-amber-200 group-hover:w-full transition-all duration-300"
                                ></span>
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Contact & Social -->
                <div class="text-center md:text-right">
                    <h3
                        class="font-primary text-sm font-semibold text-gray-700 uppercase tracking-wider mb-6"
                    >
                        Get In Touch
                    </h3>
                    <div class="space-y-3 text-gray-600">
                        <p class="font-light">
                            <span class="font-primary">Email:</span>
                            <a
                                href="mailto:dannica.james@example.com"
                                class="hover:text-amber-600 transition-colors duration-300"
                            >
                                dannica.james@example.com
                            </a>
                        </p>
                        <p class="font-light">
                            <span class="font-primary">Phone:</span>
                            <a
                                href="tel:+1234567890"
                                class="hover:text-amber-600 transition-colors duration-300"
                            >
                                (123) 456-7890
                            </a>
                        </p>
                    </div>

                    <!-- Social Icons -->
                    <div
                        class="flex justify-center md:justify-end space-x-4 mt-6"
                    >
                        <a
                            href="#"
                            class="text-gray-400 hover:text-amber-600 transition-colors duration-300"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="text-gray-400 hover:text-amber-600 transition-colors duration-300"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="text-gray-400 hover:text-amber-600 transition-colors duration-300"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Romantic Quote -->
            <div class="mt-12 pt-8 border-t border-amber-100 text-center">
                <blockquote class="max-w-3xl mx-auto">
                    <p
                        class="font-secondary text-2xl md:text-3xl text-brown/80 font-light italic mb-3"
                    >
                        "Being deeply loved by someone gives you strength, while
                        loving someone deeply gives you courage."
                    </p>
                    <cite class="font-primary text-sm text-gray-600 not-italic">
                        — Lao Tzu
                    </cite>
                </blockquote>
            </div>

            <!-- Copyright -->
            <div class="mt-8 pt-6 border-t border-amber-100 text-center">
                <p class="font-primary text-sm text-gray-500">
                    © {{ currentYear }} Dannica & James. All rights reserved.
                    Made with
                    <span class="text-rose-400">♥</span>
                    for their special day.
                </p>
            </div>
        </div>
    </footer>
</template>
