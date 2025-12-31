// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo"],
  site: {
    url: "https://amatlpaper.com",
    name: "Amatl Handmade Paper Studio",
    description:
      "Handmade artisan papers crafted from native plants in Los Angeles and San Miguel de Allende.",
    defaultLocale: "en",
  },
  seo: {
    meta: {
      title: "Amatl Handmade Paper Studio",
      description:
        "Artisan papermaking studios in Los Angeles and San Miguel de Allende using local native fibers.",
    },
  },
});
