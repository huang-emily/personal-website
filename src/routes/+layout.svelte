<script>  
    let { children } = $props();  
    import "../app.css";
	import ToolBar from "../components/ToolBar.svelte";
    import NavigationBar from "../components/NavigationBar.svelte";
    import { getDarkMode } from "../shared.svelte.js";

    function setBgColor() {
        return !getDarkMode()? "[#1e1e1e]" : "[#fdffe0]";
    }
</script>

<div class="min-h-screen bg-{setBgColor()}">
    <ToolBar />
    <div class="flex flex-row gap-x-10 items-center justify-center content-center">
        <div>
            {@render children()}
        </div>
        <NavigationBar />
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>