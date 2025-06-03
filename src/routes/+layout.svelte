<script lang="ts">  
    let { children } = $props();  
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import ToolBar from "../components/ToolBar.svelte";
    import { websiteBgColor, strokeColor, isDarkMode } from "../shared.svelte.js";

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
    class="min-h-screen flex flex-col content-center">
    <ToolBar />
    <div class="mx-auto my-auto flex flex-row gap-x-10 items-center justify-center">
        <div class="ml-20 pr-10 lg:pr-10 lg:pl-4 ">
            {@render children()}
        </div>
    </div>
    <Footer />
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>