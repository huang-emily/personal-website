<script lang="ts">
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import ToolBar from "../components/ToolBar.svelte";
    import UtilityBar from "../components/UtilityBar.svelte";
    import { isDarkMode } from "#lib/shared.svelte.js";

    let { children } = $props();

    $effect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        const saved = localStorage.getItem("theme");

        if (saved) {
            isDarkMode.set(saved === "dark");
        } else {
            isDarkMode.set(prefersDark.matches);
        }

        function onSystemChange(event: MediaQueryListEvent) {
            if (localStorage.getItem("theme")) return;
            isDarkMode.set(event.matches);
        }

        prefersDark.addEventListener("change", onSystemChange);
        return () => prefersDark.removeEventListener("change", onSystemChange);
    });

    $effect(() => {
        document.documentElement.classList.toggle("dark", $isDarkMode);
    });
</script>

<div class="flex flex-col content-center">
    <ToolBar />
    <div class="flex flex-row items-center justify-center">
        <div class="w-full max-w-2xs pl-6 lg:pl-0 sm:max-w-sm md:max-w-xl lg:max-w-2xl">
            {#if children}
                {@render children()}
            {:else}
                <p>fallback content</p>
            {/if}
        </div>
    </div>
    <UtilityBar />
    <Footer />
</div>
