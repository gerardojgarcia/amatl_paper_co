<!-- components/HeaderNav.vue -->
<template>
    <header class="border-b border-slate-200 bg-white">
        <nav
            class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4"
        >
            <!-- Logo -->
            <NuxtLink
                to="/"
                class="flex items-center gap-2"
                aria-label="Amatl Handmade Paper Studio home"
            >
                <span
                    class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900"
                >
                    <span class="h-4 w-4 border-y border-slate-900" />
                </span>
                <span class="text-2xl font-serif tracking-tight">Amatl</span>
            </NuxtLink>

            <!-- Desktop Nav -->
            <div class="hidden items-center gap-8 lg:flex">
                <ul class="flex items-center gap-8 text-sm text-slate-800">
                    <li
                        v-for="item in navItems"
                        :key="item.label"
                        class="relative"
                    >
                        <!-- Simple link -->
                        <div v-if="!item.children">
                            <NuxtLink
                                :to="item.href"
                                class="flex items-center gap-1 hover:text-slate-500"
                            >
                                <span>{{ item.label }}</span>
                            </NuxtLink>
                        </div>

                        <!-- Dropdown parent (desktop) -->
                        <div
                            v-else
                            class="relative"
                            @mouseenter="desktopDropdown = item.label"
                            @mouseleave="desktopDropdown = null"
                        >
                            <button
                                type="button"
                                class="flex items-center gap-1 hover:text-slate-500"
                            >
                                <span>{{ item.label }}</span>
                                <span class="text-xs">▾</span>
                            </button>

                            <!-- Dropdown menu -->
                            <div
                                v-if="desktopDropdown === item.label"
                                class="absolute left-0 top-full z-20 w-44 rounded-md border border-slate-200 bg-white py-2 text-sm shadow"
                            >
                                <NuxtLink
                                    v-for="child in item.children"
                                    :key="child.label"
                                    :to="child.href"
                                    class="block px-4 py-1.5 hover:bg-slate-50"
                                >
                                    {{ child.label }}
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- Contact button -->
                <NuxtLink
                    to="/contact"
                    class="inline-flex items-center gap-2 border border-slate-900 px-5 py-2 text-sm tracking-[0.2em] uppercase"
                >
                    <span>Contact Us</span>
                    <span>›</span>
                </NuxtLink>
            </div>

            <!-- Mobile: Contact button & Hamburger -->
            <div class="flex items-center gap-3 lg:hidden">
                <NuxtLink
                    to="/contact"
                    class="hidden xs:inline-flex items-center gap-2 border border-slate-900 px-3 py-1.5 text-[0.7rem] tracking-[0.2em] uppercase"
                >
                    <span>Contact</span>
                    <span>›</span>
                </NuxtLink>

                <button
                    type="button"
                    class="inline-flex h-9 w-9 items-center justify-center border border-slate-300"
                    @click="toggleMobileMenu"
                    :aria-expanded="isMobileMenuOpen"
                    aria-label="Toggle navigation"
                >
                    <span v-if="!isMobileMenuOpen" class="space-y-1.5">
                        <span class="block h-[1px] w-5 bg-slate-900" />
                        <span class="block h-[1px] w-5 bg-slate-900" />
                        <span class="block h-[1px] w-5 bg-slate-900" />
                    </span>
                    <span v-else class="text-lg leading-none">×</span>
                </button>
            </div>
        </nav>

        <!-- Mobile Nav Panel -->
        <transition name="fade">
            <div
                v-if="isMobileMenuOpen"
                class="border-t border-slate-200 bg-white lg:hidden"
            >
                <ul class="mx-auto max-w-6xl px-4 py-3 text-sm text-slate-900">
                    <li
                        v-for="item in navItems"
                        :key="item.label"
                        class="border-b border-slate-100 py-2 last:border-b-0"
                    >
                        <!-- Simple link -->
                        <div v-if="!item.children">
                            <NuxtLink
                                :to="item.href"
                                class="flex items-center justify-between py-1"
                                @click="closeMobileMenu"
                            >
                                <span>{{ item.label }}</span>
                            </NuxtLink>
                        </div>

                        <!-- Dropdown on mobile -->
                        <div v-else>
                            <button
                                type="button"
                                class="flex w-full items-center justify-between py-1"
                                @click="toggleMobileDropdown(item.label)"
                            >
                                <span>{{ item.label }}</span>
                                <span class="text-xs">
                                    {{
                                        openMobileDropdown === item.label
                                            ? "▴"
                                            : "▾"
                                    }}
                                </span>
                            </button>
                            <div
                                v-if="openMobileDropdown === item.label"
                                class="mt-1 space-y-1 pl-3"
                            >
                                <NuxtLink
                                    v-for="child in item.children"
                                    :key="child.label"
                                    :to="child.href"
                                    class="block py-1 text-slate-700"
                                    @click="closeMobileMenu"
                                >
                                    {{ child.label }}
                                </NuxtLink>
                            </div>
                        </div>
                    </li>

                    <!-- Contact in mobile list -->
                    <li class="mt-2">
                        <NuxtLink
                            to="/contact"
                            class="inline-flex w-full items-center justify-center gap-2 border border-slate-900 px-4 py-2 text-xs tracking-[0.2em] uppercase"
                            @click="closeMobileMenu"
                        >
                            <span>Contact Us</span>
                            <span>›</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

type NavChild = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href?: string;
    children?: NavChild[];
};

const navItems: NavItem[] = [
    {
        label: "Shop",
        children: [
            { label: "All Paper", href: "/shop" },
            { label: "Seeded Stationery", href: "/shop/seeded-stationery" },
            { label: "Wedding Suites", href: "/shop/wedding" },
            { label: "Gift Sets", href: "/shop/gift-sets" },
        ],
    },
    { label: "Studio", href: "/studio" },
    { label: "Gallery", href: "/gallery" },
    { label: "Workshops", href: "/workshops" },
    { label: "Custom Orders", href: "/custom" },
    { label: "Journal", href: "/journal" },
];

const isMobileMenuOpen = ref(false);
const openMobileDropdown = ref<string | null>(null);
const desktopDropdown = ref<string | null>(null);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (!isMobileMenuOpen.value) openMobileDropdown.value = null;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    openMobileDropdown.value = null;
};

const toggleMobileDropdown = (label: string) => {
    openMobileDropdown.value =
        openMobileDropdown.value === label ? null : label;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 150ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
