import { current_data } from "$lib/shared/stores/season.js";
import { writable, get } from 'svelte/store';

function player(name, position, club) {
    let goals = 0;
    let assists = 0;
    let motm = 0;
    let cs = 0;
    let ps = 0;

    get(current_data).stats.forEach(matchday => {
        if (matchday.motm == name) {
            motm += 1;
        }

        matchday.goals.forEach(stat => {
            if (stat == name) {
                goals += 1;
            }
        });

        matchday.assists.forEach(stat => {
            if (stat == name) {
                assists += 1;
            }
        });

        matchday.clean_sheets.forEach(stat => {
            if (stat == name) {
                cs += 1;
            }
        });

        matchday.penalties_saved.forEach(stat => {
            if (stat == name) {
                ps += 1;
            }
        });
    });

    return {
        "name": name,
        "position": position,
        "club": club,
        "goals": goals,
        "assists": assists,
        "motm": motm,
        "involvements": goals + assists,
        "clean_sheets": cs,
        "penalties_saved": ps
    }
}

export const players = writable();

current_data.subscribe((value) => {
    players.set([
        player("S. Kundra", ["GK"], "Plasil"),
        player("M. Ohizu", ["GK", "FWD"], "Plasil"),
        player("D. Economou", ["DEF"], "Plasil"),
        player("K. Shearing", ["DEF"], "Plasil"),
        player("T. Chasi", ["MID"], "Plasil"),
        player("T. Guviriro", ["MID"], "Plasil"),
        player("S. Magodora", ["MID"], "Plasil"),
        player("A. Marini", ["MID"], "Plasil"),
        player("J. Mupawose", ["MID"], "Plasil"),
        player("A. Sibanda", ["MID", "FWD"], "Grehn (On Loan)"),
        player("U. Chimombe", ["MID", "FWD"], "Plasil"),
        player("K. Mbendela", ["FWD"], "Plasil"),
        player("P. Mudondo", ["FWD"], "Plasil"),
        player("V. Sherekete", ["FWD"], "Plasil"),
        player("Z. Carnegie", ["GK", "MID"], "Grehn"),
        player("B. Passaportis", ["GK", "MID", "FWD"], "Grehn"),
        player("H. Chikwava", ["GK", "DEF"], "Grehn"),
        player("A. Muirimi", ["GK", "DEF"], "Grehn"),
        player("K. Nagar", ["DEF"], "Grehn"),
        player("A. Machanzi", ["DEF"], "Grehn"),
        player("R. Hove", ["MID"], "Grehn"),
        player("M. Kashaya", ["MID"], "Grehn"),
        player("P. Nebarwe", ["MID"], "Grehn"),
        player("P. Chimedza", ["MID", "FWD"], "Plasil (On Loan)"),
        player("A. Ncube", ["MID"], "Grehn"),
        player("J. Rocha", ["MID"], "Grehn"),
        player("T. Owen", ["MID"], "Grehn"),
        player("B. Geti", ["FWD"], "Grehn"),
        player("M. Mkanganwi", ["FWD"], "Grehn"),
        player("B. Hansen", ["FWD"], "Grehn"),
        player("K. Gurupira", ["FWD"], "Grehn")
    ]);
});