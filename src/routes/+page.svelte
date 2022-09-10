<script>
	import data from "$lib/data/data.json";

	function generateTeam(name) {
		return {
			name: name,
			played: data[0].stats.length,
			won: 0,
			drawn: 0,
			lost: 0,
			g: [0, 0]
		}
	}

	let teams = [ new generateTeam("PLA"), new generateTeam("GRH")]

	data[0].stats.forEach((node) => {
		// WIns/Draws/Losses
		if (node.score_plasil > node.score_grehn) {
			teams[0].won += 1;
			teams[1].lost += 1;
		} else if (node.score_grehn > node.score_plasil) {
			teams[1].won += 1;
			teams[0].lost += 1;
		} else {
			teams[1].drawn += 1;
			teams[0].drawn += 1;
		}

		// Goal Difference
		teams[0].g[0] += node.score_plasil;
		teams[0].g[1] += node.score_grehn;
		teams[1].g[0] += node.score_grehn;
		teams[1].g[1] += node.score_plasil;
	});

	if (teams[0].points < teams[1].points || teams[0].points === teams[1].points && teams[0].g[0] < teams[1].g[0]) {
		teams.reverse();
	}
</script>

<svelte:head>
	<title>Breaktime Bhora | Tables</title>
	
</svelte:head>

<div class="main">
	<h1>Tables</h1>
	<table>
		<tr><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>G</th><th><b>Pts</b></th></tr>
		{#each teams as team}
		<tr><td>{team.name}</td><td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td><td>{team.g.toString().replace(",", ":")}</td><td><b>{team.won * 3 + team.drawn}</b></td></tr>
		{/each}
	</table>
</div>