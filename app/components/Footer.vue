<template>
    <footer class="bg-black text-slate-100">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <!-- Top area -->
            <div
                class="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between"
            >
                <!-- Brand / intro -->
                <div class="max-w-sm space-y-6">
                    <NuxtLink
                        to="/"
                        class="flex items-center gap-3"
                        aria-label="Amatl Handmade Paper Studio home"
                    >
                        <span
                            class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100"
                        >
                            <span class="h-4 w-4 border-y border-slate-100" />
                        </span>
                        <span class="text-2xl font-serif tracking-tight"
                            >Amatl</span
                        >
                    </NuxtLink>

                    <p class="text-sm leading-relaxed text-slate-300">
                        Join us for hands-on papermaking workshops, open studio
                        sessions, and custom projects, and shape something truly
                        unique.
                    </p>

                    <!-- Social icons -->
                    <div class="flex items-center gap-4 text-sm">
                        <button
                            v-for="icon in social"
                            :key="icon.label"
                            type="button"
                            class="flex h-8 w-8 items-center justify-center border border-slate-500 text-xs uppercase tracking-wide hover:border-slate-200 hover:text-slate-50"
                            :aria-label="icon.label"
                        >
                            {{ icon.short }}
                        </button>
                    </div>
                </div>

                <!-- Link columns -->
                <div
                    class="flex flex-1 flex-col gap-10 text-sm md:flex-row md:justify-center"
                >
                    <div>
                        <p
                            class="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-400"
                        >
                            COMPANY
                        </p>
                        <ul class="space-y-2">
                            <li v-for="item in companyLinks" :key="item.label">
                                <NuxtLink
                                    :to="item.href"
                                    class="hover:text-slate-300"
                                >
                                    {{ item.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p
                            class="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-400"
                        >
                            MORE
                        </p>
                        <ul class="space-y-2">
                            <li v-for="item in moreLinks" :key="item.label">
                                <NuxtLink
                                    :to="item.href"
                                    class="hover:text-slate-300"
                                >
                                    {{ item.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="max-w-md space-y-4">
                    <h3
                        class="font-serif text-3xl leading-snug text-slate-50 sm:text-4xl"
                    >
                        Join Our Newsletter
                    </h3>
                    <p class="text-sm leading-relaxed text-slate-300">
                        Sign up to receive studio news, workshop dates, and
                        seasonal paper releases.
                    </p>

                    <form
                        class="flex flex-col gap-3 sm:flex-row"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="flex-1">
                            <label for="footer-email" class="sr-only"
                                >Email</label
                            >
                            <input
                                id="footer-email"
                                v-model="email"
                                type="email"
                                required
                                placeholder="Email"
                                class="w-full border border-slate-600 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            class="flex items-center justify-center border border-slate-100 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-slate-100 hover:text-black"
                        >
                            <span class="sr-only">Submit</span>
                            <span>›</span>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom bar -->
            <div
                class="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex md items-center md:justify-between md:gap-4"
            >
                <p class="mb-2 md:mb-0">
                    © Amatl. All Rights Reserved. Licensing.
                </p>
                <p class="space-x-1 text-[0.7rem]">
                    <span>Site by Headless Flower Studio</span>
                    <span>·</span>
                    <span>Powered by Nuxt</span>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const social = [
    { label: "Visit our Instagram", short: "IG" },
    { label: "Visit our Facebook", short: "FB" },
    { label: "Visit our Pinterest", short: "PI" },
    { label: "Visit our Behance", short: "BE" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Workshops", href: "/workshops" },
    { label: "Our Services", href: "/services" },
    { label: "Our Team", href: "/team" },
    { label: "What We Do", href: "/studio" },
];

const moreLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
];

const handleSubmit = () => {
    // Replace with your real newsletter integration
    console.log("Newsletter email:", email.value);
    email.value = "";
};
</script>
