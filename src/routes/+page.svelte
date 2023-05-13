<script>
	import Form from "$lib/form/Form.svelte";
	import Recent from "$lib/recent/Recent.svelte";
	import { teams, form, recent } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Breaktime Bhora | Tables</title>
</svelte:head>

<Recent plasil={$recent[0].score_plasil} grehn={$recent[0].score_grehn} motm={$recent[0].motm} date={$recent[0].date}/>

<table>
	<tr><th width="20px"></th><th style="text-align: left">Club</th><th width="20px">P</th><th width="20px">W</th><th width="20px">D</th><th width="20px">L</th><th width="20px">+/-</th><th width="20px">Pts</th><th width="210px" class="collapse">Recent Form</th></tr>
	{#each $teams as team}
		<tr><td>{team.position}</td><td class="flex" style="text-align: left"><img height="34px" src="./{team.name.toLowerCase()}.png" alt="{team.name}"><p>{team.name}</p></td><td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td><td>{new Intl.NumberFormat("en-US", { signDisplay: "exceptZero"}).format(team.g[0] - team.g[1])}</td><td>{team.won * 3 + team.drawn}</td><td class="collapse">
			<Form data={$form} team={team.name} />
		</td></tr>
	{/each}
</table>

<style>
	.flex {
		display: flex;
		align-items: center;
	}
	p {
		margin: 0;
		margin-left: 0.6em;
	}
	th, tr {
		text-align: center;
	}
	@media screen and (max-width: 750px) {
		.collapse {
			display: none;
		}
	}
</style>