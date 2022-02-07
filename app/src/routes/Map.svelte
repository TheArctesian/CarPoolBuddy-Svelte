<script>
	let container;
	let map;
	let zoom = 8;
	let center = { lat: 22.3193, lng: 114.1694 };

	import { onMount } from 'svelte';
	onMount(async () => {
		map = new google.maps.Map(container, {
			zoom,
			center
		});
	});
</script>

<style>
	.full-screen {
		width: 100vw;
		height: 100vh;
	}
</style>

<div class="full-screen" bind:this={container} />
