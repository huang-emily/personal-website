<script lang="ts">
    let sun = "/sun-icon.svg";
    let moon = "/moon-icon.svg";

    let musicOn = "/music-note-icon.svg";
    let musicOnDarkMode =  "/music-note-icon-dark-mode.svg";
    
    let musicOff = "/music-note-slash-icon.svg";
    let musicOffDarkMode =  "/music-note-slash-icon-dark-mode.svg";

    let toggleMusicOff = $state(false);
    let toggleDarkModeOff = $state(true);

    function toggleMusic() {
        toggleMusicOff = !toggleMusicOff;
    }

    function toggleDarkMode() {
        toggleDarkModeOff = !toggleDarkModeOff;
    }

	let date = new Date();
    let hour = $state(date.getHours());
    let min = $state(date.getMinutes());
	let dayOrNight = $state('AM');
	$effect(() => {
        const interval = setInterval(() => {
            date = new Date();
            hour = date.getHours();
            min = date.getMinutes();
            dayOrNight = (hour >= 12) ? "PM" : "AM";
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    })

</script>


<div class="flex flex-row items-center gap-x-24 justify-center" id="toolbar">
    <button onclick={toggleDarkMode}>
        {#if toggleDarkModeOff}
            <img src={sun} alt="dark mode toggle" class="w-6 h-6">
        {:else}
            <img src={moon} alt="dark mode toggle" class="w-6 h-6">
        {/if}
    </button>
    <p>{hour - 12 < 0? hour : hour - 12}:{min.toString().padStart(2,"0")} {dayOrNight}</p>
    <button onclick={toggleMusic}>
        {#if toggleMusicOff}
            {#if toggleDarkModeOff}
                <img src={musicOff} alt="dark mode toggle" class="w-6 h-6">
            {:else}
                <img src={musicOffDarkMode} alt="dark mode toggle" class="w-6 h-6">
            {/if}
        {:else if !toggleMusicOff}
            {#if toggleDarkModeOff}
                <img src={musicOn} alt="dark mode toggle" class="w-6 h-6">
            {:else}
                <img src={musicOnDarkMode} alt="dark mode toggle" class="w-6 h-6">
            {/if}
        {/if}
    </button>
</div>

<style>
#toolbar {
    margin: 2rem 0;
}
</style>