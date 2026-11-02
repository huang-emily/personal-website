<script lang="ts">
    import NavigationBar from "./NavigationBar.svelte";
    import Links from "./Links.svelte";

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
<div class="fixed z-10 flex flex-col lg:flex-row pl-2 py-3 h-full justify-between lg:px-4 lg:h-auto lg:w-full lg:max-w-7xl lg:self-center" id="toolbar">
    <NavigationBar />

    <Links />
</div>