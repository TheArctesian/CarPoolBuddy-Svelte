<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '../lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	let container;
	let map;
	let zoom = 12;
	let center = { lat: 22.3193, lng: 114.1694 };
	onMount(async () => {
		map = new google.maps.Map(container, {
			zoom,
			center
		});
		// if ($auth.known == true) {
		console.log('kown');
		let infoWindow = new google.maps.InfoWindow({
			content: 'Welcome! click on the map to add a ride',
			position: center
		});

		infoWindow.open(map);

		// Configure the click listener.
		map.addListener('click', (mapsMouseEvent) => {
			// Close the current InfoWindow.
			infoWindow.close();
			// Create a new InfoWindow.
			infoWindow = new google.maps.InfoWindow({
				position: mapsMouseEvent.latLng
			});
			infoWindow.setContent(
				JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2) +
					'<div><button onclick="addMarker(infoWindow)">Add Marker</button></div>'
			);
			infoWindow.open(map);
		});
		// } else {
		// 	window.location.href = '/account';
		// }
	});
</script>

<style>
	:global(body) {
		padding: 0;
	}
	.full-screen {
		width: 100vw;
		height: 100vh;
	}
</style>

<div class="map full-screen" bind:this={container} />

<svelte:head>
	<script
		async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkBseRRKs9JoEiQ82Ep87QeMT2kWKcoCc&callback=initMap">

	</script>
	<title>Home</title>
</svelte:head>
