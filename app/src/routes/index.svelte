<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '../lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	import { db } from '$lib/firebaseSetup';
	import { latlng } from '../stores/stores';
	import { collection, getDocs } from 'firebase/firestore';

	let container;
	let map;
	let zoom = 12;
	let center = { lat: 22.3193, lng: 114.1694 };
	let latlngV;

	latlng.subscribe((value) => {
		latlngV = value;
	});

	latlngV = '(22.27498754156152, 114.21214368286131)';


	onMount(async () => {
		async 	function addRider() {
		alert('hello');
	}
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

		const querySnapshot = await getDocs(collection(db, 'vehicles'));
		querySnapshot.forEach((doc) => {
			// map data out 
			let data = doc.data();
			let lat = data.lat;
			let lng = data.lng;
			let latlng = new google.maps.LatLng(lat, lng);
			let marker = new google.maps.Marker({
				position: latlng,
				map,
				title: 'Vehicle'
			});
			marker.addListener('click', () => {
				infoWindow.setContent(`
					<div>
						<h3><strong>Model: </strong>${data.model}</h3>
						<p><strong>Capacity: </strong>${data.capacity}</p>
						<p><strong>Leave Time: </strong>${data.leaveTime}</p>
						<button class="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="addRider()">Join</button>
					</div>
				`);
				infoWindow.open(map, marker);
				console.log("made")
			});
			console.log(doc.id, ' => ', doc.data());
		});
		
		map.addListener('click', (mapsMouseEvent) => {
			// Close the current InfoWindow.
			infoWindow.close();
			// Create a new InfoWindow.
			infoWindow = new google.maps.InfoWindow({
				position: mapsMouseEvent.latLng
			});
			latlngV == mapsMouseEvent.latLng;
			infoWindow.setContent(
				'<div class="bg-green-400 rounded m-auto p-4 text-center"><a href="/vehicle"a>Add Vehicle</a></div>' +
					'location: ' +
					latlngV +
					'<br/>' +	
					'<strong><h1 class="text-center">Please Copy this Value</h1></strong>'
			);
			infoWindow.open(map);
		});
	});
</script>

<div class="map full-screen" bind:this={container} />

<svelte:head>
	<script
		async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkBseRRKs9JoEiQ82Ep87QeMT2kWKcoCc&callback=initMap">
	</script>
	<title>Home</title>
</svelte:head>

<style>
	:global(body) {
		padding: 0;
	}
	.full-screen {
		width: 100vw;
		height: 100vh;
	}
</style>
