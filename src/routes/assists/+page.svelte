<script>
	import { assistants } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Assists</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Assists</th></tr>
	{#each $assistants as player}
		<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>
