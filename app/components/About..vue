<template>
    <section class="relative overflow-hidden bg-white py-16 md:py-24">
        <!-- Top-left decorative squares -->
        <div
            class="pointer-events-none absolute -left-4 top-0 flex flex-col gap-4 opacity-70"
        >
            <span class="h-10 w-10 bg-amber-50" />
            <span class="ml-10 h-10 w-10 bg-amber-100" />
        </div>

        <div
            class="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-center md:gap-16"
        >
            <!-- Text column -->
            <div class="max-w-xl">
                <p class="mb-4 text-sm italic text-slate-500">(01)</p>

                <h2
                    class="mb-6 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl"
                >
                    <span>Try </span>
                    <span class="italic">Papermaking</span>
                </h2>

                <p class="text-sm leading-relaxed text-slate-700 sm:text-base">
                    Whether you’re looking for a solo creative escape, a fun
                    group activity, or to design the perfect set of handmade
                    stationery, our classes guide you through every step of the
                    papermaking process. Learn how to turn recycled fibers and
                    petals into textured sheets, and become part of our growing
                    studio community.
                </p>
            </div>

            <!-- Image collage column -->
            <div class="relative flex items-center justify-end">
                <!-- Black accent block -->
                <span
                    class="pointer-events-none absolute left-6 top-10 h-16 w-16 bg-black md:left-10 md:top-16"
                />

                <!-- Main image -->
                <div
                    class="relative z-10 w-full max-w-xl overflow-hidden bg-slate-200"
                >
                    <img
                        :src="mainImageSrc"
                        :alt="mainImageAlt"
                        class="h-64 w-full object-cover sm:h-72 md:h-80 lg:h-96"
                    />
                </div>

                <!-- Secondary image -->
                <div
                    class="absolute -bottom-10 left-0 z-20 w-52 overflow-hidden bg-slate-200 shadow-md sm:w-64 md:-bottom-12 md:left-4 lg:w-72"
                >
                    <img
                        :src="secondaryImageSrc"
                        :alt="secondaryImageAlt"
                        class="h-40 w-full object-cover sm:h-48"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        mainImageSrc?: string;
        mainImageAlt?: string;
        secondaryImageSrc?: string;
        secondaryImageAlt?: string;
    }>(),
    {
        mainImageSrc: "/amatl_paper_creation.png",
        mainImageAlt:
            "Hands lifting a fresh sheet of handmade paper from a deckle",
        secondaryImageSrc: "/amatl_pulp_paper.png",
        secondaryImageAlt:
            "Close-up of paper pulp with petals floating in a vat",
    },
);
</script>
