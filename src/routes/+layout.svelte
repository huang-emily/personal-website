<script>  
    let { children } = $props();  
    import "../app.css";
	import ToolBar from "../components/ToolBar.svelte";
    import { getWebsiteBgColor, getStrokeColor } from "../shared.svelte.js";

</script>

<ToolBar />
<div style="background-color: {getWebsiteBgColor()}; color: {getStrokeColor()};"
    class="min-h-screen flex flex-col content-center justify-center">
    <div class="relative flex flex-row gap-x-10 items-center justify-center">
        <div>
            {@render children()}
        </div>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>