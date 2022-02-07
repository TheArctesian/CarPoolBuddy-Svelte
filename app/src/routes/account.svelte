<script lang="ts">
	import { auth } from '../lib/auth';
	import { RingLoader } from 'svelte-loading-spinners';
	import { addUserDB } from '$lib/db';
	import { onMount } from 'svelte';
	onMount(async () => {
		addUserDB($auth.user);
	});
</script>

<svelte:head>
	<title>account</title>
</svelte:head>

<main>
	<div class="grid place-items-center h-screen ">
		{#if $auth.known}
			{#if $auth.user}
				<div
					class="flex m-3 flex bg-gray-300 p-2 rounded-2xl text-center drop-shadow justify-center
					relative items-center">
					<img
						alt="userPhoto"
						class="rounded-full drop-shadow m-3 flex border-solid border-2 border-green-500"
						src={$auth.user.photoURL} />
					<div class="flex flex-col justify-center">
						<h1 class="flex">Name: {$auth.user.displayName}</h1>
						<p class="flex">Email: {$auth.user.email}</p>
						<p class="flex">UID: {$auth.user.uid}</p>
					</div>
				</div>
				<div class="flex bg-gray-100 p-3 rounded-2xl">
					<button on:click={() => auth.signOut()}>
						<img
							alt="sign out button"
							src="https://img.icons8.com/color/48/000000/google-logo.png"
							width="50" />
						Sign Out
					</button>
				</div>
			{:else}
				<div
					class="flex content-center bg-gray-300 p-2 rounded-2xl text-center drop-shadow
					justify-center relative items-center ">
					<button on:click={() => auth.signInWith('google')}>
						<h1 class="flex">Sign In with Google</h1>
						<br />
						<img
							alt="sign in button"
							class="rounded-full flex m-auto bg-gray-100 hover:bg-green-400"
							src="https://img.icons8.com/color/48/000000/google-logo.png" />
					</button>
				</div>
			{/if}
		{:else}
			<RingLoader />
		{/if}
	</div>
</main>
