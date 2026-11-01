<script lang="ts">
    import About from "../lib/sections/About.svelte"
    import Home from "../lib/sections/Home.svelte"
    import Projects from '../lib/sections/Projects.svelte';
</script>

<!-- lg:flex-row items-center gap-x-6 gap-y-4 -->
<Home />
<About />
<Projects />


<style lang="postcss">
    @reference "tailwindcss";
</style>
