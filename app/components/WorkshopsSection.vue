<!-- components/WorkshopsSection.vue -->
<template>
    <section class="bg-white py-16 md:py-24">
        <div class="mx-auto max-w-6xl px-4">
            <!-- Top heading row -->
            <div
                class="mb-10 flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start"
            >
                <div>
                    <p class="mb-2 text-xs italic text-slate-500">(02)</p>
                    <h2
                        class="font-serif text-3xl leading-snug text-slate-900 sm:text-4xl"
                    >
                        Workshops Designed
                        <br />
                        For All Skill Levels
                    </h2>
                    <p class="mt-4 text-sm leading-relaxed text-slate-700">
                        From first-time papermakers to seasoned artists, our
                        sessions offer a calm and playful way to explore fiber,
                        color, and texture. All classes are offered in
                        <span class="font-semibold">English</span> and
                        <span class="font-semibold">Spanish / Español</span>.
                    </p>
                </div>

                <div class="flex justify-end">
                    <h2
                        class="font-serif text-4xl italic text-slate-900 sm:text-5xl md:text-6xl"
                    >
                        Workshops
                    </h2>
                </div>
            </div>

            <!-- Grid of workshops -->
            <div class="grid gap-8 lg:grid-cols-2">
                <article
                    v-for="workshop in workshops"
                    :key="workshop.id"
                    class="flex flex-col"
                >
                    <!-- Image -->
                    <div class="mb-4 overflow-hidden bg-slate-100">
                        <img
                            :src="workshop.image"
                            :alt="workshop.alt"
                            class="h-56 w-full object-cover md:h-64"
                        />
                    </div>

                    <!-- Text -->
                    <h3 class="font-serif text-xl text-slate-900">
                        {{ workshop.titleEn }}
                    </h3>
                    <p class="text-sm italic text-slate-600">
                        {{ workshop.titleEs }}
                    </p>

                    <p class="mt-2 text-sm leading-relaxed text-slate-700">
                        {{ workshop.descriptionEn }}
                    </p>
                    <p class="text-xs leading-relaxed text-slate-500">
                        {{ workshop.descriptionEs }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type Workshop = {
    id: number;
    titleEn: string;
    titleEs: string;
    descriptionEn: string;
    descriptionEs: string;
    image: string;
    alt: string;
};

const workshops: Workshop[] = [
    {
        id: 1,
        titleEn: "Date Night Papermaking",
        titleEs: "Noche de Papel en Pareja",
        descriptionEn:
            "Create a set of matching sheets together using flowers, recycled fibers, and shared ideas.",
        descriptionEs:
            "Creen juntos un juego de hojas a mano usando flores, fibras recicladas y mucha imaginación.",
        image: "/amatl_pulp_paper.png",
        alt: "Two pairs of hands forming a sheet of handmade paper together over a deckle.",
    },
    {
        id: 2,
        titleEn: "Private & Group Workshops",
        titleEs: "Talleres Privados y en Grupo",
        descriptionEn:
            "Custom sessions for teams, birthdays, and retreats. Learn the full process from pulp to finished sheet.",
        descriptionEs:
            "Sesiones a la medida para equipos, cumpleaños y retiros. Aprende el proceso completo, del pulpeo a la hoja final.",
        image: "/hero-img-amatl.png",
        alt: "Instructor guiding participants through papermaking at a studio table.",
    },
    {
        id: 3,
        titleEn: "Hand-Building Basics: Sheets & Shapes",
        titleEs: "Fundamentos: Hojas y Formas",
        descriptionEn:
            "Experiment with different molds, textures, and inclusions while learning core sheet-forming techniques.",
        descriptionEs:
            "Experimenta con distintos moldes, texturas e inclusiones mientras aprendes las técnicas básicas para formar hojas.",
        image: "/amatl_paper_creation.png",
        alt: "Hands pressing pulp and flowers into handmade paper on a table.",
    },
    {
        id: 4,
        titleEn: "Intro to Papermaking Tools",
        titleEs: "Introducción a las Herramientas",
        descriptionEn:
            "Get comfortable with vats, molds, presses, and drying setups so you can continue creating at home.",
        descriptionEs:
            "Familiarízate con tinas, marcos, prensas y sistemas de secado para que puedas seguir creando en casa.",
        image: "/marigold-2.png",
        alt: "Close-up of hands working over a papermaking vat filled with pulp.",
    },
];
</script>
