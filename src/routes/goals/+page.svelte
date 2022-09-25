<script>
	import data from "$lib/data/data.json";

	function sortObject(obj) {
    	return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let goalscorers = {}

	data[0].stats.forEach((node) => {
		node.scorers_plasil.forEach((scorer) => {
			if (scorer in goalscorers) {
				goalscorers[scorer] += 1
			} else {
				goalscorers[scorer] = 1
			}
		});

		node.scorers_grehn.forEach((scorer) => {
			if (scorer in goalscorers) {
				goalscorers[scorer] += 1
			} else {
				goalscorers[scorer] = 1
			}
		});
	});

	goalscorers = sortObject(goalscorers);
</script>

<svelte:head>
	<title>Breaktime Bhora | Goals</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Goals</th></tr>
	{#each goalscorers as player}
		<tr><td>{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>
