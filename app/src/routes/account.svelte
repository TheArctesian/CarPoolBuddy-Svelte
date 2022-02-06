<script lang="ts">
	import { auth } from '../lib/auth';
</script>

<svelte:head>
	<title>account</title>
</svelte:head>

<main>
	<div class="flex">
		{#if $auth.known}
			{#if $auth.user}
				<button on:click={() => auth.signOut()}>Sign Out</button>
				{$auth.user.displayName} ({$auth.user.email})
			{:else}
				<div class="flex content-center">
					<button on:click={() => auth.signInWith('google')}>Sign In with Google</button>
					(visitor)
				</div>
			{/if}
		{:else}Checking auth status &hellip;{/if}
	</div>
</main>
