<script>
	import { page } from '$app/stores';

	let visible = false;

	function handleMore() {
		visible = !visible;
	}

	function reset() {
		visible = false;
	}
</script>

<div class="header">
	<ul>
		<li class="branding desktop"><b>BREAKTIME</b> BHORA</li>
		<li class="branding mobile"><b>B</b>B</li>
		<li class:active={$page.url.pathname === '/'}><a on:click={reset} href="/" preload="true">Tables</a></li>
		<li class:active={$page.url.pathname === '/stats'}><a on:click={reset} href="/stats" preload="true">Stats</a></li>
		<li class:active={$page.url.pathname === '/comparison'}><a on:click={reset} href="/comparison" preload="true">Comparison</a></li>
		<li class:active={$page.url.pathname === '/results'}><a on:click={reset} href="/results" preload="true">Results</a></li>
	</ul>
</div>

<style>
	.header {
		padding: 16px;
		margin: 0;
		width: 100%;
		background-color: #0C073F;
		color: #ffffff;
		font-size: 1.1em;
	}

	.mobile {
		display: none;
	}

	.active {
		color: #00ffc8;
	}

	b {
		color: #00ffc8;
		font-size: 1em;
	}

	.branding {
		font-weight: 400;
		font-size: 1.1em;
		text-align: left;
		float: left;
		font-family: "Barlow", sans-serif;
	}

	ul {
		width: 100%;
		max-width: 1800px;
		padding: 0;
		margin: 0 auto;
		list-style-type: none;
		text-align: right;
	}

	li {
		display: inline;
		padding: 0 6px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media screen and (max-width: 625px) {
		.desktop {
			display: none;
		}

		.mobile {
			display: inline;
		}
	}
</style>