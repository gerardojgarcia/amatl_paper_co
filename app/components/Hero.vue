<!-- components/StudioHero.vue -->
<template>
    <section class="relative bg-white">
        <!-- Top text band -->
        <div
            class="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-10 pb-8 md:flex-row md:items-end md:justify-between lg:pt-14"
        >
            <!-- Big title -->
            <h1
                class="font-serif italic text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl"
            >
                Amatl Studio
            </h1>

            <!-- Intro copy -->
            <p
                class="max-w-md text-sm leading-relaxed text-slate-700 md:text-base"
            >
                Join us for hands-on papermaking classes, private group
                sessions, or open studio hours. Learn to pull sheets, embed
                flowers and fibers, and shape something truly unique from pulp
                to finished page.
            </p>
        </div>

        <!-- Image block -->
        <div class="relative">
            <img
                :src="imageSrc"
                :alt="imageAlt"
                class="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px] lg:h-[580px]"
            />

            <!-- Small white square accent (bottom-left) -->
            <span
                class="absolute bottom-4 left-4 h-8 w-8 bg-white shadow-md sm:h-9 sm:w-9"
                aria-hidden="true"
            />

            <!-- Down arrow button (right edge, vertically centered) -->
            <button
                type="button"
                class="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center border border-slate-300 bg-white px-3 py-2 text-xs tracking-[0.2em] uppercase shadow-sm"
                @click="scrollDown"
            >
                <span class="mr-2 hidden sm:inline">Scroll</span>
                <span class="text-base">⌄</span>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        imageSrc?: string;
        imageAlt?: string;
        scrollTargetId?: string;
    }>(),
    {
        // Replace with your actual hero image path
        imageSrc: "/hero-img-amatl.png",
        imageAlt: "Hands shaping handmade paper pulp on a studio table",
        scrollTargetId: "studio-content",
    },
);

const scrollDown = () => {
    const target = document.getElementById(props.scrollTargetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
};
</script>
