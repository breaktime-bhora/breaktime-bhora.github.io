<script>
	import { goalkeepers } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Clean Sheets</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Clean Sheets</th></tr>
	{#each $goalkeepers as player}
		<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>
