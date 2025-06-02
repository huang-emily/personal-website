<script>  
    let { children } = $props();  
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import ToolBar from "../components/ToolBar.svelte";
    import { getWebsiteBgColor, getStrokeColor, toggleDarkMode, getDarkMode } from "../shared.svelte.js";
</script>

<div style="background-color: {getWebsiteBgColor()}; color: {getStrokeColor()};"
    class="min-h-screen flex flex-col content-center">
    <ToolBar />
    <div class="mx-auto my-auto flex flex-row gap-x-10 items-center justify-center">
        <div class="">
            {@render children()}
        </div>
    </div>
    <Footer />
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>