<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: absolute;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		bottom: 0;
	}

	footer a {
		font-weight: bold;
	}
</style>

<Header />

<main>
	<slot />
</main>

<footer>Bottom</footer>
