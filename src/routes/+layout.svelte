<script lang="ts">  
    let { children } = $props();  
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import ToolBar from "../components/ToolBar.svelte";
    import { websiteBgColor, strokeColor, isDarkMode } from "#lib/shared.svelte";

    function setColorTheme(colorTheme: string) {
        if (colorTheme == "dark") {
            isDarkMode.set(true);
            localStorage.setItem("theme", "dark");
        } else if (colorTheme == "light" ) {
            isDarkMode.set(false);
            localStorage.setItem("theme", "light");
        }
    }

    $effect(() => {
        const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

        if(localStorage.getItem("theme") != null) {
            if (localStorage.getItem("theme") == "dark") {
                isDarkMode.set(true);
            } else {
                isDarkMode.set(false);
            }
        } else {
            if(prefersDarkTheme) {
                setColorTheme("dark");
            } else {
                setColorTheme("light");
            }
        }

        prefersDarkTheme.addEventListener('change', (event) => {
            if(event.matches) {
                setColorTheme("dark");
            } else {
                setColorTheme("light");
            }
        })

    })

</script>

<div style="background-color: {$websiteBgColor}; color: {$strokeColor};"
    class="flex flex-col content-center">
    <ToolBar />
    <div class="flex flex-row items-center justify-center">
        <div class="w-full max-w-2xs pl-6 lg:pl-0 sm:max-w-sm md:max-w-2xl lg:max-w-2xl">
            {#if children}
                {@render children()}
            {:else}
                <p>fallback content</p>
            {/if}
        </div>
    </div>
    <Footer />
</div>
