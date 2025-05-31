<script>  
    let { children } = $props();  
    import "../app.css";
	import ToolBar from "../components/ToolBar.svelte";
    import NavigationBar from "../components/NavigationBar.svelte";
    import { getDarkMode, getStrokeColor } from "../shared.svelte.js";

    function setBgColor() {
        return getDarkMode()? "#1e1e1e" : "#F9F6E7";
    }
</script>

<div style="background-color: {setBgColor()}; color: {getStrokeColor()};" 
    class="min-h-screen">
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