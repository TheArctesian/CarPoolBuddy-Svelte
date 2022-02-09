<script lang="ts">
	import type { vehicle } from '../types/vehicle';
	import { auth } from '$lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	import { addVehicleFormDB } from '$lib/db';
	import type { User } from 'firebase/auth';
	import { latlng } from '../stores/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
import { select_option } from 'svelte/internal';

	let vehicleData: vehicle;
	let owner: string = '';
	let model: string = '';
	let capacity: number = 0;
	let isElectric: boolean = false;
	let leaveTime: string = '';
	let riders: string[] = [];
	let lat: string;
	let lng: string;

	function addToDB() {
		riders = [$auth.user.email];
		console.log(owner, model, capacity, isElectric, leaveTime, riders, lat, lng);
		addVehicleFormDB($auth.user.email, model, riders, capacity, isElectric, lat, lng, leaveTime);
		// window.location.href='/';
	}
</script>

<svelte:head>
	<title>vehicle</title>
</svelte:head>

<section class="grid place-items-center h-screen m-auto">
	<!-- {#if $auth.user} -->
	<div class="flex justify-center">
		<div class="w-full max-w-sm">
			<form class="bg-gray-100 shadow-md rounded-xl px-12 pt-6 pb-8 mb-4" onsubmit={(e) => {}}>
				<div class=" ">
					<div class="justify-center">
						<h1 class="text-center text-2xl font-bold text-gray-800">Add Vehicle</h1>
					</div>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="model"> Model </label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="model"
							type="text"
							bind:value={model}
							placeholder="Model"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="capacity">
							Capacity
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
							id="capacity"
							type="number"
							bind:value={capacity}
							placeholder="Capacity"
							required
						/>
					</div>
					<div class="mb-4">
						<input
							class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="checkbox"
							bind:value={isElectric}
							id="flexCheckIndeterminate"
						/>
						<label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">
							Is Electric
						</label>
					</div>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="leaveTime">
							Leave Time
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
							id="leaveTime"
							type="text"
							bind:value={leaveTime}
							placeholder="Leave Time"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="leaveTime">
							Location
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
							id="lat"
							type="text"
							bind:value={lat}
							placeholder="Latitude"
							required
						/>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
							id="lng"
							type="text"
							bind:value={lng}
							placeholder="Longitude"
							required
						/>
					</div>
					<div class="flex justify-center">
						<button
							on:click={addToDB}
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- {:else }
		<div class="flex justify-center">
			<div class="w-full max-w-sm">
				<div class="bg-gray-100 shadow-md rounded-xl px-12 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<h1 class="text-center text-gray-700 text-sm font-bold mb-2">You are not logged in</h1>
					</div>
					<div class="mb-4">
						<h1 class="text-center text-gray-700 text-sm font-bold mb-2">
							Please login to add a vehicle
						</h1>
					</div>
				</div>
			</div>
		</div>
	{/if} -->
</section>
