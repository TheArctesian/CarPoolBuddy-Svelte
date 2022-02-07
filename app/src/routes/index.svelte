<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '../lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	import { db } from '$lib/firebaseSetup';
	import { latlng } from '../stores/stores'

	let container;
	let map;
	let zoom = 12;
	let center = { lat: 22.3193, lng: 114.1694 };
	let latlngVal;
	latlng.subscribe(value => {
		latlngVal = value;
	})
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
				'<div class="bg-green-400 rounded m-auto p-4 text-center"><a href="/vehicle"a>Add Vehicle</a></div>'
			);
			infoWindow.open(map);
			latlngVal = mapsMouseEvent.latLng;
			console.log(mapsMouseEvent.latLng + "lat lng")
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
