<script>
    const assets = [
        {
            name: "Allison Gomez", 
            link:"https://www.instagram.com/itsteddi_/",
            use: "Character Art by&nbsp;"
        },
        {
            name: "SVG Repo", 
            link:"https://www.svgrepo.com",
            use: "Vectors and Icons by&nbsp;"
        },
        {
            name: "PM Music", 
            link:"https://pmmusic.pro/",
            use: "Background Music by&nbsp;"
        },
    ]

    const inspos = [
        {
            name: "Joshua Torres", 
            link:"https://www.instagram.com/itsteddi_/",
            use: "Website Structure from&nbsp;"
        },
        {
            name: "Sharlene Yap", 
            link:"https://www.instagram.com/itsteddi_/",
            use: "Website Structure from&nbsp;"
        },
        {
            name: "Lynn Fisher", 
            link:"https://www.instagram.com/itsteddi_/",
            use: "Website Structure from&nbsp;"
        },
    ]

</script>

<!-- credits page -->
<div class="flex flex-col text-center sm:max-w-[52rem] xl:max-w-5xl">
    <!-- credits text -->
     <div class="flex flex-col items-center mx-auto mb-3">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold"><span class="text-sky-400">✱</span> Credits <span class="text-sky-400">✱</span></h1>
        <p class="text-[.5rem] sm:text-sm md:text-sm">This website would not be possible without the following!</p>
     </div>
    <div class="grid grid-cols-1">
        <div class="m-1">
            <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl mb-1">Assets</h1>
            {#each assets as asset}
            <div class="mx-auto w-fit text-center flex flex-row text-[.625rem] sm:text-sm sm:text-md md:text-lg lg:text-xl">
                <p>{@html asset.use}</p>
                <a class="" href="{asset.link}">
                    <p class="transition-transform duration-300 hover:scale-107 underline decoration-2 decoration-sky-400 font-semibold">{asset.name}</p>
                </a>
            </div>
            {/each}
        </div>
 
        <div class="m-1">
            <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl mb-1">Inspiration</h1>
            {#each inspos as inspo}
            <div class="mx-auto w-fit text-center flex flex-row text-[.625rem] sm:text-sm sm:text-md md:text-lg lg:text-xl">
                <p>{@html inspo.use}</p>
                <a class="" href="{inspo.link}">
                    <p class="transition-transform duration-300 hover:scale-107 underline decoration-2 decoration-sky-400 font-semibold">{inspo.name}</p>
                </a>
            </div>
            {/each} 
        </div>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>