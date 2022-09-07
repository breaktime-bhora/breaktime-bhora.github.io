<script>
	import { page } from '$app/stores';
</script>

<div class="header">
	<ul>
		<li class="branding desktop"><b>BREAKTIME</b> BHORA</li>
		<li class="branding mobile"><b>B</b>B</li>
		<li class:active={$page.url.pathname === '/'}><a href="/" preload="true">Tables</a></li>
		<li class:active={$page.url.pathname === '/stats'}><a href="/stats" preload="true">Stats</a></li>
		<li class:active={$page.url.pathname === '/about'}><a href="/about" preload="true">About</a></li>
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
	}

	.branding {
		border-right: none;
		font-weight: 400;
		font-size: 1.1em;
		text-align: left;
		float: left;
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
		border-right: 1px solid #ffffff66;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	li:last-child {
		border-right: none;
	}

	@media screen and (max-width: 425px) {
		.desktop {
			display: none;
		}

		.mobile {
			display: inline;
		}
	}
</style>