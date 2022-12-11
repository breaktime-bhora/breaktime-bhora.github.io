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
		<li class:active={$page.url.pathname === '/goals'}><a on:click={reset} href="/goals" preload="true">Goals</a></li>
		<li class:active={$page.url.pathname === '/assists' || $page.url.pathname === '/clean-sheets' || $page.url.pathname === '/motm' || $page.url.pathname === '/results'} class="mobile more" on:click={handleMore}>More</li>
		<div class:visible={visible} class="desktop collapse">
			<li class:active={$page.url.pathname === '/assists'}><a on:click={reset} href="/assists" preload="true">Assists</a></li>
			<li class:active={$page.url.pathname === '/clean-sheets'}><a on:click={reset} href="/clean-sheets" preload="true">Clean Sheets</a></li>
			<li class:active={$page.url.pathname === '/motm'}><a on:click={reset} href="/motm" preload="true">MOTM</a></li>
			<li class:active={$page.url.pathname === '/results'}><a on:click={reset} href="/results" preload="true">Results</a></li>
		</div>
	</ul>
</div>

<style>
	.more {
		cursor: pointer;
	}

	.header {
		padding: 16px;
		margin: 0;
		width: 100%;
		background-color: #0C073F;
		color: #ffffff;
		font-size: 1.1em;
	}
	
	.collapse {
		display: inline;
		background-color: #0C073F;
		color: #ffffff;
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

		.visible {
			display: block;
		}

		.mobile {
			display: inline;
		}

		.collapse {
			position: absolute;
			top: 50px;
			right: 0;
			z-index: 1000;
		}

		.collapse li {
			display: block;
			width: 100vw;
			padding: 10px 20px;
		}
	}
</style>