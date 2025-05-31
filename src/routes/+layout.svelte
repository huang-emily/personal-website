<script>  
    let { children } = $props();  
    import "../app.css";
	import ToolBar from "../components/ToolBar.svelte";
    import NavigationBar from "../components/NavigationBar.svelte";
</script>

<div class="h-screen">
    <ToolBar />
    <div class="flex flex-row gap-x-10 items-center justify-center content-center">
        <div>
            {@render children()}
        </div>
        <NavigationBar />
    </div>
</div>