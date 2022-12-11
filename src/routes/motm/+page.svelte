<script>
	import { motm } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Man Of The Match</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Man Of The Match</th></tr>
	{#each $motm as player}
		<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>
