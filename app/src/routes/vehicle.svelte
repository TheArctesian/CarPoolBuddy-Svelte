<script lang="ts">
	import type { vehicle } from '../types/vehicle';
	import { auth } from '$lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	import { addVehicleDB } from '$lib/db';
	import type { User } from 'firebase/auth';
	import { latlng } from '../stores/stores'
import { goto } from '$app/navigation';
import { onMount } from 'svelte';


	let vehicleData: vehicle;
	let owner: User = $auth.user;
	let model: string = '';
	let capacity: number = 0;
	let isElectric: boolean = false;
	let leaveTime: string = '';
	let riders: User[] = [];
	let latlngVal: string;

	latlng.subscribe(value => {
		latlngVal = value;
	})

	function addToDB(){
		vehicleData.capacity = capacity;
		vehicleData.model = model;
		vehicleData.isElectric = isElectric;
		vehicleData.leaveTime = leaveTime;
		vehicleData.riders = riders;
		vehicleData.owner = owner;
		vehicleData.latlng = latlngVal;
		addVehicleDB(vehicleData);
		console.log(vehicleData);
		goto('/');
	}
    onMount(() => {
		console.log(latlngVal);
	})
</script>

<svelte:head>
	<title>vehicle</title>
</svelte:head>

<section class="grid place-items-center h-screen m-auto">
	{#if $auth.user}
		<div class="flex justify-center">
			<div class="w-full max-w-sm">
				<form class="bg-gray-100 shadow-md rounded-xl px-12 pt-6 pb-8 mb-4" onsubmit={(e) => {}}>
					<div class=" ">
						<img
							alt="userPhoto"
							class="rounded-full place-content-center drop-shadow m-auto border-2 border-green-500 hover:p-3  duration-300 ease-in"
							src={$auth.user.photoURL}
						/>
						<div class="justify-center">
							<h1 class="flex">Name: {$auth.user.displayName}</h1>
							<p class="flex">Email: {$auth.user.email}</p>
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="model"> Model </label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="model"
								type="text"
								value={model}
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
								value={capacity}
								placeholder="Capacity"
								required
							/>
						</div>
						<div class="mb-4">
							<input
								class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
								type="checkbox"
								value={isElectric}
								id="flexCheckIndeterminate"
							/>
							<label
								class="form-check-label inline-block text-gray-800"
								for="flexCheckIndeterminate"
							>
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
								type="time"
								min="05:30"
								max="17:30"
								value={leaveTime}
								placeholder="Leave Time"
								required
							/>
						</div>
						<div class="flex justify-center">
							<button on:click={addToDB}
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	{:else}
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
	{/if}
</section>
