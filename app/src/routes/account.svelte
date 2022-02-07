<script lang="ts">
	import { auth } from '../lib/auth';
</script>

<svelte:head>
	<title>account</title>
</svelte:head>

<main>
	<div
		class="flex bg-gray-300 p-2 rounded-2xl text-center drop-shadow justify-center relative
		items-center">
		{#if $auth.known}
			{#if $auth.user}
				<div class="flex m-3">
					<img
						alt="userPhoto"
						class="rounded-full drop-shadow border-solid border-2 border-green-500"
						src={$auth.user.photoURL} />
					<h1>Name: {$auth.user.displayName}</h1>
					<p>Email {$auth.user.email}</p>
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
				<div class="flex content-center">
					<button on:click={() => auth.signInWith('google')}>
						<img
							alt="sign in button"
							class="rounded-full"
							src="https://img.icons8.com/color/48/000000/google-logo.png" />
					</button>
					Sign In with Google
				</div>
			{/if}
		{:else}Checking auth status &hellip;{/if}
	</div>
</main>
