<script lang="ts">
    import Expertise from "../lib/sections/Expertise.svelte"
    import Home from "../lib/sections/Home.svelte"
    import Projects from '../lib/sections/Projects.svelte';
</script>

<!-- lg:flex-row items-center gap-x-6 gap-y-4 -->
<Home />
<Expertise />
<Projects />


<style lang="postcss">
    @reference "tailwindcss";
</style>
