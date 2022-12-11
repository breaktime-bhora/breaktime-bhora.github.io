<script>
	import Header from '$lib/header/Header.svelte';
	import Select from 'svelte-select';
	import '../app.css';
	import { page } from '$app/stores';
	import { season } from '$lib/shared/stores/season.js';

	let pages = {
		"/results": "Results",
		"/goals": "Goals",
		"/assists": "Assists",
		"/": "Tables"
	}

	function handleChange(event) {
		season.set(event.detail.value);
	}
</script>

<Header />

<main>
	<div class="main">
		<h1>{pages[$page.url.pathname]}</h1>
		
		<Select
			value = { {value: "1", label: "Additional Term 2022"} }
			items = {[
				{ value: "all", label: "All Time" },
				{ value: "1", label: "Additional Term 2022" },
				{ value: "0", label: "3rd Term 2022" },
			]}
			on:select={handleChange}
		/>
		<div class="slot">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1800px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.slot {
		margin-top: 10px;
	}
</style>
