<script lang="ts">
    import { getWebsiteBgColor } from "../shared.svelte";
</script>

<div style="background-color: {getWebsiteBgColor()};" 
    class="sticky z-10 bottom-0 w-full text-center p-2">
    <p class="opacity-50 text-xs font-medium">made with Svelte, TailwindCSS, and <a class="font-extrabold hover:underline" href="/credit">lots of awesome resources</a>!</p>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>