<script lang="ts">
    import NavigationBar from "../components/NavigationBar.svelte";
    import UtilityBar from "./UtilityBar.svelte";
    import { getWebsiteBgColor } from "../shared.svelte";

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

<div style="background-color: {getWebsiteBgColor()};" 
    class="fixed z-10 top-0 w-full max-w-7xl px-4 pt-6 md:px-8 flex flex-row items-center self-center justify-between" id="toolbar">
    <NavigationBar />
    <!-- <p style="color: {getStrokeColor()}">{hour - 12 <= 0? hour : hour - 12}:{min.toString().padStart(2,"0")} {dayOrNight}</p> -->
    <UtilityBar />
</div>


<style lang="postcss">
    @reference "tailwindcss";
</style>