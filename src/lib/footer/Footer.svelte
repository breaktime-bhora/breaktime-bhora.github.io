<script>
	import data from "$lib/data/data.json";

	let matches = [... data[0].stats];

	let date = matches.reverse()[0].date;
</script>

<div class="footer">
	<p>Last updated: {date}</p>
</div>

<style>
	.footer {
		position: fixed;
		bottom: 0;
		padding: 16px;
		margin: 0;
		width: 100%;
		background-color: #ffffff;
		color: #747474;
		font-size: 1.1em;
		text-align: center;
	}

	p {
		padding: 0;
		margin: 0;
	}
</style>