<script lang="ts">
    import Home from "../lib/sections/Home.svelte"
    import Tools from "../lib/sections/Tools.svelte"
    import Projects from '../lib/sections/Projects.svelte';
    import Footer from "../components/Footer.svelte";
</script>

<!-- lg:flex-row items-center gap-x-6 gap-y-4 -->
<Home />
<Tools />
<Projects />
<Footer />


<style lang="postcss">
    @reference "tailwindcss";
</style>
