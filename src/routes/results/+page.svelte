<script>
	import { matches } from "$lib/shared/stores/season.js";
</script>


<svelte:head>
	<title>Breaktime Bhora | Results</title>
</svelte:head>


<table>
	<tr><th>Date</th><th>P&B</th><th>G&J</th></tr>
	{#each $matches as match}
		<tr><td>{match.date}</td><td>{match.score_plasil}</td><td>{match.score_grehn}</td></tr>
	{/each}
</table>
