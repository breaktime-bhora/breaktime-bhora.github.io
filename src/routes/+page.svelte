<script>
	import Form from "$lib/form/Form.svelte";
	import { teams, form } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Tables</title>
</svelte:head>

<table>
	<tr><th width="20px"></th><th style="text-align: left">Club</th><th width="20px">P</th><th width="20px">W</th><th width="20px">D</th><th width="20px">L</th><th width="20px">+/-</th><th width="20px">Pts</th><th width="240px" class="collapse">Recent Form</th></tr>
	{#each $teams as team}
		<tr><td>{team.position}</td><td style="text-align: left">{team.name}</td><td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td><td>{new Intl.NumberFormat("en-US", { signDisplay: "exceptZero"}).format(team.g[0] - team.g[1])}</td><td>{team.won * 3 + team.drawn}</td><td class="collapse">
			{#each $form as match}
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