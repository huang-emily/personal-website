<script lang="ts">
    import { toggleDarkMode, getStrokeColor, getDarkMode, getNavBarSize, getSunIconSize } from "../shared.svelte.js";

    let isMusicOff = $state(true);
    let backgroundAudio: HTMLAudioElement;

    function getMusicMode() {
        return isMusicOff;
    }
    function toggleMusic() {
        isMusicOff = !isMusicOff;

        isMusicOff? backgroundAudio.pause() : backgroundAudio.play();
    }

    $effect(() => {
        backgroundAudio = new Audio("/financial-obligations-pm-music.wav");
        backgroundAudio.volume = 0.1;
        backgroundAudio.loop = true;
    })

</script>

<div class="flex flex-col lg:flex-row items-center gap-x-1 gap-y-1">
    <button class="hover:cursor-pointer" onclick={toggleDarkMode}>
        {#if !getDarkMode()}
            <svg class="duration-300 hover:scale-125" width="{getSunIconSize()}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Toggle on Dark Mode</title>
                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="{getStrokeColor()}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {:else}
            <svg class="duration-300 hover:scale-125" width="{getNavBarSize()}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Toggle off Dark Mode</title>
                <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="{getStrokeColor()}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {/if}
    </button>
    <button class="hover:cursor-pointer" onclick={toggleMusic}>
        {#if getMusicMode()}
            <svg class="duration-300 hover:scale-125" width="{getNavBarSize()}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Play Background Music</title>
                <path d="M12.5 6.8935V5.57661C12.5 5.36926 12.5 5.26559 12.5347 5.17738C12.5653 5.09948 12.615 5.03052 12.6792 4.97682C12.752 4.91601 12.8503 4.88323 13.047 4.81766L17.447 3.35099C17.8025 3.23249 17.9803 3.17324 18.1218 3.20877C18.2456 3.23987 18.3529 3.31718 18.4216 3.42484C18.5 3.54783 18.5 3.7352 18.5 4.10994V7.42339C18.5 7.63074 18.5 7.73441 18.4653 7.82262C18.4347 7.90052 18.385 7.96948 18.3208 8.02318C18.248 8.08399 18.1497 8.11677 17.953 8.18234L14.8192 9.22692M12.5 12.5V18.5M12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1193 7.067 16 9 16C10.933 16 12.5 17.1193 12.5 18.5ZM3 3L21 21" stroke="{getStrokeColor()}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {:else}
            <svg class="duration-300 hover:scale-125" width="{getNavBarSize()}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Pause Background Music</title>
                <path d="M12.5 8.89001V18.5M12.5 8.89001V5.57656C12.5 5.36922 12.5 5.26554 12.5347 5.17733C12.5653 5.09943 12.615 5.03047 12.6792 4.97678C12.752 4.91597 12.8503 4.88318 13.047 4.81761L17.447 3.35095C17.8025 3.23245 17.9803 3.17319 18.1218 3.20872C18.2456 3.23982 18.3529 3.31713 18.4216 3.42479C18.5 3.54779 18.5 3.73516 18.5 4.10989V7.42335C18.5 7.63069 18.5 7.73436 18.4653 7.82258C18.4347 7.90048 18.385 7.96943 18.3208 8.02313C18.248 8.08394 18.1497 8.11672 17.953 8.18229L13.553 9.64896C13.1975 9.76746 13.0197 9.82671 12.8782 9.79119C12.7544 9.76009 12.6471 9.68278 12.5784 9.57512C12.5 9.45212 12.5 9.26475 12.5 8.89001ZM12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1192 7.067 16 9 16C10.933 16 12.5 17.1192 12.5 18.5Z" stroke="{getStrokeColor()}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {/if}
    </button>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>