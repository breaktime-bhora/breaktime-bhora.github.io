<script>
	import data from "$lib/data/data.json";

	let season = "3rd Term 2022"

	let plasil = {
		name: "C.F. Plasil",
		played: data[0].stats.length,
		won: 0,
		drawn: 0,
		lost: 0,
		gf: 0,
		ga: 0
	}

	let grehn = {
		name: "Grehn F.C.",
		played: data[0].stats.length,
		won: 0,
		drawn: 0,
		lost: 0,
		gf: 0,
		ga: 0
	}

	data[0].stats.forEach((node) => {
		if (node.score_plasil > node.score_grehn) {
			plasil.won += 1;
			grehn.lost += 1;
		} else if (node.score_grehn > node.score_plasil) {
			grehn.won += 1;
			plasil.lost += 1;
		} else {
			grehn.drawn += 1;
			plasil.drawn += 1;
		}
	});

</script>

<svelte:head>
	<title>Breaktime Bhora | Tables</title>
	
</svelte:head>

<div class="main">
	<table>
		<tr><th>Position</th><th>Team</th><th>Played</th><th>Won</th><th>Drawn</th><th>Lost</th><th>GF</th><th>GA</th><th>GD</th><th>Points</th></tr>
		<tr><td>1</td><td>{plasil.name}</td><td>{plasil.played}</td><td>{plasil.won}</td><td>{plasil.drawn}</td><td>{plasil.lost}</td><td>{plasil.gf}</td><td>{plasil.ga}</td><td>{plasil.gf - plasil.ga}</td><td>{plasil.won * 3 + plasil.drawn}</td></tr>
		<tr><td>2</td><td>{grehn.name}</td><td>{grehn.played}</td><td>{grehn.won}</td><td>{grehn.drawn}</td><td>{grehn.lost}</td><td>{grehn.gf}</td><td>{grehn.ga}</td><td>{grehn.gf - grehn.ga}</td><td>{grehn.won * 3 + grehn.drawn}</td></tr>
	</table>
</div>

<style>
	.main {
		overflow-x: scroll;
	}
</style>