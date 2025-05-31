<script>  
    let { children } = $props();  
    import "../app.css";
	import Toolbar from "../components/Toolbar.svelte";
</script>

<Toolbar />
{@render children()}