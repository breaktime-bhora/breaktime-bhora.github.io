<script>
	import data from "$lib/data/data.json";
	import Form from "$lib/form/Form.svelte";

	let form = [... data[0].stats].slice(-5);

	function generateTeam(name) {
		return {
			position: "",
			name: name,
			played: data[0].stats.length,
			won: 0,
			drawn: 0,
			lost: 0,
			g: [0, 0]
		}
	}

	let teams = [ new generateTeam("P&B"), new generateTeam("G&J")]

	data[0].stats.forEach((node) => {
		// Wins/Draws/Losses
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

	if (teams[0].won < teams[1].won || (teams[0].won == teams[1].won && teams[0].g[0] < teams[1].g[0])) {
		teams[1].position = "1";
		teams[0].position = "2";
		teams.reverse();
	} else if (teams[0].won == teams[1].won) {
		teams[1].position = "=1";
		teams[0].position = "=1";
	} else {
		teams[1].position = "2";
		teams[0].position = "1";
	}
</script>

<svelte:head>
	<title>Breaktime Bhora | Tables</title>
</svelte:head>

<table>
	<tr><th width="20px"></th><th style="text-align: left">Club</th><th width="20px">P</th><th width="20px">W</th><th width="20px">D</th><th width="20px">L</th><th width="20px">+/-</th><th width="20px">Pts</th><th width="240px" class="collapse">Recent Form</th></tr>
	{#each teams as team}
		<tr><td>{team.position}</td><td style="text-align: left">{team.name}</td><td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td><td>{new Intl.NumberFormat("en-US", { signDisplay: "exceptZero"}).format(team.g[0] - team.g[1])}</td><td>{team.won * 3 + team.drawn}</td><td class="collapse">
			{#each form as match}
				<Form plasil={match.score_plasil} grehn={match.score_grehn} team={team.name} />
			{/each}
		</td></tr>
	{/each}
</table>

<style>
	th, tr {
		text-align: center;
	}
	@media screen and (max-width: 750px) {
		.collapse {
			display: none;
		}
	}
</style>