<script>
	import { stats, goalscorers, assistants, motm, goalkeepers, penalties, involvements } from "$lib/shared/stores/season.js";
	import { players } from "$lib/shared/stores/players.js";
	import Select from 'svelte-select';

	const groupBy = (item) => item.group;

	function handleChange(event) {
		stats.set(event.detail.value);
	}
</script>

<svelte:head>
	<title>Breaktime Bhora | Stats</title>
</svelte:head>

<div class="header">
	<div class="label">
		<h2>Display: </h2>
	</div>
	<Select
		searchable={false}
		--listMaxHeight="400px"
		value = { {value: "goals"} }
		items = {[
			{ value: "motm", label: "Man Of the Match", group: "General" },
			{ value: "goals", label: "Goals", group: "Attack" },
			{ value: "assists", label: "Assists", group: "Attack" },
			{ value: "goal-involvements", label: "Goal Involvements", group: "Attack" },
			{ value: "clean-sheets", label: "Clean Sheets", group: "Defence" },
			{ value: "penalties-saved", label: "Penalties Saved", group: "Defence" },
		]}
		on:select={handleChange}
		{groupBy}
	/>	
</div>

{#if $stats == "goals"}
	<table>
		<tr><th>Player</th><th>Goals</th></tr>
		{#each $goalscorers as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "assists"} 
	<table>
		<tr><th>Player</th><th>Assists</th></tr>
		{#each $assistants as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "goal-involvements"} 
	<table>
		<tr><th>Player</th><th>Goal Involvements</th></tr>
		{#each $involvements as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "motm"} 
	<table>
		<tr><th>Player</th><th>Man Of The Match</th></tr>
		{#each $motm as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "clean-sheets"}
	<table>
		<tr><th>Player</th><th>Clean Sheets</th></tr>
		{#each $goalkeepers as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "penalties-saved"}
	<table>
		<tr><th>Player</th><th>Penalties Saved</th></tr>
		{#each $penalties as player}
			<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{/if}

<style>
	.flex {
		display: flex;
		align-items: center;
	}
	.flex > img {
		margin-right: 0.8em;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 0;
		font-weight: 400;
	}
	.header {
		display: grid;
		width: 100%;
		grid-template-columns: 80px auto;
		grid-template-rows: 100%;
		padding: 1em 0;
	}
	.label {
		display: flex;
		align-items: center;
	}
</style>