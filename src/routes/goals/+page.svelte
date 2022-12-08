<script>
	import { goalscorers } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Goals</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Goals</th></tr>
	{#each $goalscorers as player}
		<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>
