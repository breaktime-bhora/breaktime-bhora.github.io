import data from "$lib/data/data.json";
import { get, writable } from 'svelte/store';

export const season = writable("1");
export const teams = writable();
export const form = writable();
export const goalscorers = writable();
export const matches = writable();

let selected = data;


season.subscribe((value) => {
    let current = value;

    if (isNaN(current)) {
        selected = [{ "season": "All Time", "stats": data.map(({ stats }) => stats).flat() }];
        current = 0;
    } else {
        current = parseInt(value);
        selected = data;
    }

    form.set([... selected[current].stats].slice(-5));

	function generateTeam(name) {
		return {
			position: "",
			name: name,
			played: selected[current].stats.length,
			won: 0,
			drawn: 0,
			lost: 0,
			g: [0, 0]
		}
	}

    let results = [ new generateTeam("P&B"), new generateTeam("G&J")]

	selected[current].stats.forEach((node) => {
		// Wins/Draws/Losses
		if (node.score_plasil > node.score_grehn) {
			results[0].won += 1;
			results[1].lost += 1;
		} else if (node.score_grehn > node.score_plasil) {
			results[1].won += 1;
			results[0].lost += 1;
		} else {
			results[1].drawn += 1;
			results[0].drawn += 1;
		}

		// Goal Difference
		results[0].g[0] += node.score_plasil;
		results[0].g[1] += node.score_grehn;
		results[1].g[0] += node.score_grehn;
		results[1].g[1] += node.score_plasil;
	});

	if (results[0].won < results[1].won || (results[0].won == results[1].won && results[0].g[0] < results[1].g[0])) {
		results[1].position = "1";
		results[0].position = "2";
		teams.reverse();
	} else if (results[0].won == results[1].won) {
		results[1].position = "=1";
		results[0].position = "=1";
	} else {
		results[1].position = "2";
		results[0].position = "1";
	}

    teams.set(results);

    //
    // Goals
    //

    function sortObject(obj) {
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let scorers = {}

	selected[current].stats.forEach((node) => {
		node.scorers_plasil.forEach((scorer) => {
			if (scorer in scorers) {
				scorers[scorer] += 1
			} else {
				scorers[scorer] = 1
			}
		});

		node.scorers_grehn.forEach((scorer) => {
			if (scorer in scorers) {
				scorers[scorer] += 1
			} else {
				scorers[scorer] = 1
			}
		});
	});

	goalscorers.set(sortObject(scorers));

    //
    // Matches
    //

    matches.set([... selected[current].stats].reverse());
});