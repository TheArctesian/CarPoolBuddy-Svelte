<script context="module" lang="ts">
	export const prerender = true;
	import Map from '../lib/map.svelte';
	export let ready;
}
	
</script>

<svelte:head>
	<title>Home</title>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=APIKEY&callback=initMap">
	</script>
</svelte:head>

<section>
	{ #if ready }
<Map></Map>
{ /if }
</section>

<style>
:global(body) {
	padding: 0;
}
</style>
