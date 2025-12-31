<template>
    <section class="bg-[#f8f1e7] py-16 md:py-24">
        <div class="mx-auto max-w-6xl px-4">
            <!-- Top row: label + heading + intro copy -->
            <div
                class="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
            >
                <div>
                    <p class="mb-2 text-xs italic text-slate-500">(04)</p>
                    <h2
                        class="font-serif text-3xl leading-snug text-slate-900 sm:text-4xl"
                    >
                        Handcrafted Paper
                        <span class="italic">Made with Love</span>
                    </h2>
                </div>

                <p
                    class="max-w-md text-sm leading-relaxed text-slate-700 md:text-right"
                >
                    Browse our curated selection of handmade sheets, stationery
                    sets, and giftable bundles—each one pulled, pressed, and
                    dried in small batches using regional fibers and flowers.
                </p>
            </div>

            <!-- Products grid -->
            <div class="grid gap-x-10 gap-y-12 md:grid-cols-3 md:gap-y-16">
                <article
                    v-for="product in products"
                    :key="product.id"
                    class="flex flex-col"
                >
                    <!-- Image -->
                    <div class="mb-6 flex items-center justify-center">
                        <img
                            :src="product.image"
                            :alt="product.name"
                            class="max-h-64 w-auto object-contain hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    <!-- Name + price row -->
                    <div
                        class="flex items-baseline justify-between gap-4 text-sm text-slate-900"
                    >
                        <h3 class="font-serif text-lg">
                            {{ product.name }}
                        </h3>

                        <div class="text-right">
                            <span class="text-xs text-slate-500 mr-1">$</span>
                            <span class="text-sm">
                                {{ formatPrice(product.price) }} USD
                            </span>

                            <span
                                v-if="product.originalPrice"
                                class="ml-2 text-xs text-slate-400 line-through"
                            >
                                $ {{ formatPrice(product.originalPrice) }} USD
                            </span>
                        </div>
                    </div>

                    <!-- CTA (only on featured item) -->
                    <div v-if="product.featured" class="mt-6">
                        <button
                            type="button"
                            class="inline-flex items-center bg-[#7f9f7a] px-6 py-2 text-xs uppercase tracking-[0.2em] text-white"
                        >
                            Add to Cart
                        </button>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type Product = {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    featured?: boolean;
};

const products: Product[] = [
    {
        id: 1,
        name: "Marigold",
        price: 15,
        image: "/marigold-1.png",
    },
    {
        id: 2,
        name: "Handmade Paper in Off-White",
        price: 45,
        image: "/off-white-1.png",
    },
    {
        id: 3,
        name: "Handmade Paper in Lavender",
        price: 29,
        image: "/lavender-1.png",
    },
    {
        id: 4,
        name: "Handmade Paper in Marble Swirl",
        price: 29.99,
        originalPrice: 32,
        image: "/off-white-2.png",
    },
    {
        id: 5,
        name: "Handmade Paper in Coffee",
        price: 19,
        image: "/coffee-1.png",
    },
    {
        id: 6,
        name: "Handmade Paper in Rosemary",
        price: 9,
        originalPrice: 12,
        image: "/rosemary-1.png",
        featured: true,
    },
];

const formatPrice = (value: number) => value.toFixed(2);
</script>
