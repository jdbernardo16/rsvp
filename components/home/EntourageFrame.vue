<script lang="ts" setup>
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
</script>

<template>
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2
                    class="text-5xl md:text-6xl font-light text-gray-800 mb-4 font-secondary"
                >
                    Our Entourage
                </h2>
                <p class="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    The cherished family and friends who will stand with us as
                    we begin our forever
                </p>
            </div>

            <!-- Parents -->
            <div class="max-w-4xl mx-auto mb-16">
                <h3
                    class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                >
                    Our Parents
                </h3>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div class="mb-4">
                            <div
                                class="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <svg
                                    class="w-8 h-8 text-brown"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h4
                                class="text-xl font-light text-gray-800 mb-4 font-secondary"
                            >
                                {{ entourage.parents.bride.label }}
                            </h4>
                        </div>
                        <div class="space-y-2">
                            <p class="text-lg text-gray-800 font-light">
                                {{ entourage.parents.bride.father }}
                            </p>
                            <p class="text-lg text-gray-800 font-light">
                                {{ entourage.parents.bride.mother }}
                            </p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div class="mb-4">
                            <div
                                class="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <svg
                                    class="w-8 h-8 text-brown"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h4
                                class="text-xl font-light text-gray-800 mb-4 font-secondary"
                            >
                                {{ entourage.parents.groom.label }}
                            </h4>
                        </div>
                        <div class="space-y-2">
                            <p class="text-lg text-gray-800 font-light">
                                {{ entourage.parents.groom.father }}
                            </p>
                            <p class="text-lg text-gray-800 font-light">
                                {{ entourage.parents.groom.mother }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Principal Sponsors -->
            <div class="max-w-4xl mx-auto mb-16">
                <h3
                    class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                >
                    Principal Sponsors
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div
                        v-for="(sponsor, index) in entourage.principalSponsors"
                        :key="index"
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <p class="text-lg text-gray-800 font-light text-center">
                            {{ sponsor.name }}
                        </p>
                        <p
                            class="text-sm text-brown font-light text-center mt-1"
                        >
                            {{ sponsor.role }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Secondary Sponsors -->
            <div class="max-w-4xl mx-auto mb-16">
                <h3
                    class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                >
                    Secondary Sponsors
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div
                        v-for="(sponsor, index) in entourage.secondarySponsors"
                        :key="index"
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                        <p class="text-lg text-gray-800 font-light">
                            {{ sponsor.name }}
                        </p>
                        <p class="text-sm text-brown font-light mt-1">
                            {{ sponsor.role }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Wedding Party Grid -->
            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Groomsmen -->
                    <div>
                        <h3
                            class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                        >
                            Groomsmen
                        </h3>
                        <div class="space-y-4">
                            <div
                                v-for="(
                                    groomsman, index
                                ) in entourage.groomsmen"
                                :key="index"
                                class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <p class="text-lg text-gray-800 font-light">
                                    {{ groomsman.name }}
                                </p>
                                <p class="text-sm text-brown font-light">
                                    {{ groomsman.role }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bridesmaids -->
                    <div>
                        <h3
                            class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                        >
                            Bridesmaids
                        </h3>
                        <div class="space-y-4">
                            <div
                                v-for="(
                                    bridesmaid, index
                                ) in entourage.bridesmaids"
                                :key="index"
                                class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <p class="text-lg text-gray-800 font-light">
                                    {{ bridesmaid.name }}
                                </p>
                                <p class="text-sm text-brown font-light">
                                    {{ bridesmaid.role }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bearers & Flower Girls -->
            <div class="max-w-4xl mx-auto mt-16">
                <h3
                    class="text-3xl font-light text-center text-gray-800 mb-8 font-secondary"
                >
                    Our Little Ones
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                        <p class="text-lg text-gray-800 font-light">
                            {{ entourage.coinBearer.name }}
                        </p>
                        <p class="text-sm text-brown font-light mt-1">
                            {{ entourage.coinBearer.role }}
                        </p>
                    </div>
                    <div
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                        <p class="text-lg text-gray-800 font-light">
                            {{ entourage.bibleBearer.name }}
                        </p>
                        <p class="text-sm text-brown font-light mt-1">
                            {{ entourage.bibleBearer.role }}
                        </p>
                    </div>
                    <div
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                        <p class="text-lg text-gray-800 font-light">
                            {{ entourage.ringBearer.name }}
                        </p>
                        <p class="text-sm text-brown font-light mt-1">
                            {{ entourage.ringBearer.role }}
                        </p>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-6 max-w-md mx-auto">
                    <div
                        v-for="(girl, index) in entourage.flowerGirls"
                        :key="index"
                        class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                        <p class="text-lg text-gray-800 font-light">
                            {{ girl.name }}
                        </p>
                        <p class="text-sm text-brown font-light mt-1">
                            {{ girl.role }}
                        </p>
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
