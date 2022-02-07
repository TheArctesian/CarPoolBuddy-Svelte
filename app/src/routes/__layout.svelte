<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
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
	}

	footer {
		position: absolute;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2vw;
		bottom: 0;
	}

	footer a {
		font-weight: bold;
	}
	ul {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 3em;
		display: flex;
		list-style: none;
		border-radius: 0.5rem;
		padding: 3vw;
	}

	.link {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	a:hover {
		color: rgb(118, 219, 71);
	}
</style>

<main>
	<slot />
</main>

<footer>
	<a href="https://github.com/TheArctesian/CarPoolBuddy-Svelte.git" target="_blank">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
			alt="github"
			width="50"
			height="50" />
	</a>
</footer>
<ul>
	<li class:active={$page.url.pathname === '/App'}>
		<a class="link" sveltekit:prefetch href="/App">Maps</a>
	</li>
	<li class:active={$page.url.pathname === '/account'}>
		<a class="link" sveltekit:prefetch href="/account">Account</a>
	</li>
</ul>
