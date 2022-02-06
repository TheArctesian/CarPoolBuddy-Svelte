<script lang="ts">
	import { page } from '$app/stores';
</script>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		position: absolute;
	}

	ul {
		position: relative;
		height: 3em;
		display: flex;
		list-style: none;
		background-color: rgba(1, 1, 1, 0.342);
		border-radius: 0.5rem;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #46ad02;
	}
</style>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Maps</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Account</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>
