<script>
	import { stats, goalscorers, assistants, motm, goalkeepers, penalties, involvements } from "$lib/shared/stores/season.js";
	import Select from 'svelte-select';

	const groupBy = (item) => item.group;

	function handleChange(event) {
		stats.set(event.detail.value);
	}

	let format = {
		"motm": "Man Of The Match",
		"goals": "Goals",
		"assists": "Assists",
		"goal-involvements": "Goal Involvements",
		"clean-sheets": "Clean Sheets",
		"penalties-saved": "Penalties Saved"
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
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "assists"} 
	<table>
		<tr><th>Player</th><th>Assists</th></tr>
		{#each $assistants as player}
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "involvements"} 
	<table>
		<tr><th>Player</th><th>Goal Involvements</th></tr>
		{#each $involvements as player}
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "motm"} 
	<table>
		<tr><th>Player</th><th>Man Of The Match</th></tr>
		{#each $motm as player}
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "clean-sheets"}
	<table>
		<tr><th>Player</th><th>Clean Sheets</th></tr>
		{#each $goalkeepers as player}
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{:else if $stats == "penalties-saved"}
	<table>
		<tr><th>Player</th><th>Penalties Saved</th></tr>
		{#each $penalties as player}
			<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
		{/each}
	</table>
{/if}

<style>
	h2 {
		margin-top: 0;
		margin-bottom: 0;
	}
	.header {
		display: grid;
		width: 100%;
		grid-template-columns: 90px auto;
		grid-template-rows: 100%;
		padding: 1em 0;
	}
	.label {
		display: flex;
		align-items: center;
	}
</style>