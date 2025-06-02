<script lang="ts">
    import NavigationBar from "../components/NavigationBar.svelte";
    import UtilityBar from "./UtilityBar.svelte";
    import { getWebsiteBgColor, getStrokeColor } from "../shared.svelte";

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
<!-- fixed z-10 w-full max-w-7xl px-4 pt-6 md:px-8 flex flex-row items-center justify-between -->
<div class="fixed z-10 flex flex-col pl-4 py-6 h-full justify-between lg:px-4 lg:h-auto lg:w-full lg:max-w-7xl lg:flex-row lg:self-center" id="toolbar">
    <NavigationBar />
    <!-- <p class="text-center mx-auto" style="color: {getStrokeColor()}">{hour - 12 <= 0? hour : hour - 12}:{min.toString().padStart(2,"0")} {dayOrNight}</p> -->
    <UtilityBar />
</div>


<style lang="postcss">
    @reference "tailwindcss";
</style>