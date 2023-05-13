<script>
	import { matches } from "$lib/shared/stores/season.js";
</script>


<svelte:head>
	<title>Breaktime Bhora | Results</title>
</svelte:head>


<table>
	<tr><th>Date</th><th>Plasil</th><th>Grehn</th><th>MOTM</th></tr>
	{#each $matches as match}
		<tr><td>{new Date(match.date.split("/").reverse().join("-")).toLocaleDateString(undefined, {month: 'short', day: 'numeric' })}</td><td>{match.score_plasil}</td><td>{match.score_grehn}</td><td>{match.motm || "N/A"}</td></tr>
	{/each}
</table>
