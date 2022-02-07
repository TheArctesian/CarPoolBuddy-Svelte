<script>
	import { RingLoader } from 'svelte-loading-spinners';
	//import map.svelte
	import Map from '../components/map.svelte';
	export let ready;
</script>

<style>
	:global(body) {
		padding: 0;
	}
</style>

<svelte:head>
	<script
		defer
		async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkBseRRKs9JoEiQ82Ep87QeMT2kWKcoCc&callback=initMap">

	</script>
	<title>App</title>
</svelte:head>
{#if ready}
	<Map />
{/if}
{#if !ready}
	<div class="grid place-items-center h-screen">
		<RingLoader />

	</div>
{/if}
