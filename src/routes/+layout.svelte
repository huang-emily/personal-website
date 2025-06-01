<script>  
    let { children } = $props();  
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import ToolBar from "../components/ToolBar.svelte";
    import { getWebsiteBgColor, getStrokeColor } from "../shared.svelte.js";
</script>

<div style="background-color: {getWebsiteBgColor()}; color: {getStrokeColor()};"
    class="min-h-screen flex flex-col content-center justify-between">
    <ToolBar />
    <div class="relative flex flex-row gap-x-10 items-center justify-center">
        <div>
            {@render children()}
        </div>
    </div>
    <Footer />
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>