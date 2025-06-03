<script>  
    let { children } = $props();  
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import ToolBar from "../components/ToolBar.svelte";
    import { websiteBgColor, strokeColor } from "../shared.svelte.js";
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