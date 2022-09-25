<script>
	import data from "$lib/data/data.json";

	let matches = [... data[0].stats];

	matches.reverse();
</script>


<svelte:head>
	<title>Breaktime Bhora | Results</title>
</svelte:head>


<table>
	<tr><th>Matchday</th><th>Date</th><th>P&B</th><th>G&J</th></tr>
	{#each matches as match}
		<tr><td>{match.matchday}</td><td>{match.date}</td><td>{match.score_plasil}</td><td>{match.score_grehn}</td></tr>
	{/each}
</table>
