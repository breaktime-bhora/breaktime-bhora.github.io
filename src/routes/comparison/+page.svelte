<script>
	import { stats, goalscorers, assistants, motm, goalkeepers, penalties, involvements } from "$lib/shared/stores/season.js";
	import { players } from "$lib/shared/stores/players.js";
	import Select from 'svelte-select';

	const groupBy = (item) => item.group;

	console.log($players);

	let choices = [];

	let player1 = "Kieran Mbendela";
	let player2 = "Mudiwa Mkanganwi"

	$players.forEach(player => {
		choices.push({
			value: player.name,
			label: player.name,
			group: player.club
		})
	});

	function update1(event) {
		player1 = event.detail.value;
	}

	function update2(event) {
		player2 = event.detail.value;
	}
</script>

<svelte:head>
	<title>Breaktime Bhora | Comparison</title>
</svelte:head>

<div class="header">
	<Select
		searchable={false}
		--listMaxHeight="400px"
		value = { player1 }
		items = {choices}
		on:select = { update1 }
		{groupBy}
	/>	
	<Select
		searchable={false}
		--listMaxHeight="400px"
		value = { player2 }
		items = {choices}
		on:select = { update2 }
		{groupBy}
	/>	
</div>

<div class="body">
	<div class="card">
		<h2>{ player1 }</h2>
		<table>
			<tr><th width="50%">Stats</th><th>Values</th></tr>
			<tr><td>Club</td><td class="flex1"><img class="img1" height="34px" src="./{$players.find(o => o.name === player1).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player1).club}">{ $players.find(o => o.name === player1).club }</td></tr>
			<tr><td>Positions</td><td>{ $players.find(o => o.name === player1).position.toString().split(",").join(", ") }</td></tr>
			<tr><td>Man of the Match</td><td>{ $players.find(o => o.name === player1).motm }</td></tr>
			<tr><td>Goals</td><td>{ $players.find(o => o.name === player1).goals }</td></tr>
			<tr><td>Assists</td><td>{ $players.find(o => o.name === player1).assists }</td></tr>
			<tr><td>Goal Involvements</td><td>{ $players.find(o => o.name === player1).involvements }</td></tr>
			<tr><td>Clean Sheets</td><td>{ $players.find(o => o.name === player1).clean_sheets }</td></tr>
			<tr><td>Penalties Saved</td><td>{ $players.find(o => o.name === player1).penalties_saved }</td></tr>
		</table>
	</div>
	<div class="card right">
		<h2>{ player2 }</h2>
		<table>
			<tr><th width="50%">Stats</th><th>Values</th></tr>
			<tr><td>Club</td><td class="flex2">{ $players.find(o => o.name === player2).club }<img class="img2" height="34px" src="./{$players.find(o => o.name === player2).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player2).club}"></td></tr>
			<tr><td>Positions</td><td>{ $players.find(o => o.name === player2).position.toString().split(",").join(", ") }</td></tr>
			<tr><td>Man of the Match</td><td>{ $players.find(o => o.name === player2).motm }</td></tr>
			<tr><td>Goals</td><td>{ $players.find(o => o.name === player2).goals }</td></tr>
			<tr><td>Assists</td><td>{ $players.find(o => o.name === player2).assists }</td></tr>
			<tr><td>Goal Involvements</td><td>{ $players.find(o => o.name === player2).involvements }</td></tr>
			<tr><td>Clean Sheets</td><td>{ $players.find(o => o.name === player2).clean_sheets }</td></tr>
			<tr><td>Penalties Saved</td><td>{ $players.find(o => o.name === player2).penalties_saved }</td></tr>
		</table>
	</div>
</div>

<style>
	.flex1 {
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.flex2 {
		display: flex;
		align-items: center;
		justify-content: right;
	}
	
	.img1 {
		margin-right: 0.8em;
	}

	.img2 {
		margin-left: 0.8em;
	}

	.header, .body {
		display: grid;
		width: 100%;
		grid-template-columns: 50% auto;
		grid-template-rows: 100%;
		gap: 5px;
		padding: 1em 0;
	}

	table {
		margin-bottom: 1em;
	}

	h2 {
		padding-top: 0;
		margin-top: 0;
	}

	.card {
		padding: 0;
		margin: 0;
	}

	.right {
		direction: rtl;
	}

	.right td, .right th {
		text-align: right;
		direction: ltr;
	}

	@media screen and (max-width: 420px) {
		.header, .body {
			display: grid;
			width: 100%;
			grid-template-columns: 100%;
			grid-template-rows: 50% auto;
			gap: 5px;
			padding: 1em 0;
		}

		.right {
			direction: ltr;
		}

		.right td, .right th {
			text-align: left;
		}
	}
</style>