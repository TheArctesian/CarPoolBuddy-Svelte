//import App/svelte
import App from './App.svelte';
import '@types/google.maps';

const app = new App({
	target: document.body,
	props: {
		ready: false
	}
});

let map: google.maps.Map;

function initMap(): void {
	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8
	});
	console.log('map init');
}

export default app;
