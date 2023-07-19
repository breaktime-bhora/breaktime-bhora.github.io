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
        player("Sparsh Kundra", ["GK"], "Plasil"),
        player("Majesty Ohizu", ["GK", "FWD"], "Plasil"),
        player("Daniel Economou", ["DEF"], "Plasil"),
        player("Kyle Shearing", ["DEF"], "Plasil"),
        player("Tyrone Chasi", ["MID"], "Plasil"),
        player("Tawananyasha Guviriro", ["MID"], "Plasil"),
        player("Shanna Magodora", ["MID"], "Plasil"),
        player("Jabulani Mupawose", ["MID"], "Plasil"),
        player("Albert Sibanda", ["MID", "FWD"], "Plasil"),
        player("Unashe Chimombe", ["GK", "MID", "FWD"], "Plasil"),
        player("Kieran Mbendela", ["FWD"], "Plasil"),
        player("Panashe Mudondo", ["FWD"], "Plasil"),
        player("Julie Tungamirai", ["FWD"], "Plasil"),
        player("Liam Taravinga", ["FWD"], "Plasil"),
        player("Valentine Sherekete", ["FWD"], "Plasil"),
        player("Benjamin Passaportis", ["GK", "MID", "FWD"], "Grehn"),
        player("Honoured Chikwava", ["GK", "DEF"], "Grehn"),
        player("Antony Muirimi", ["GK", "DEF"], "Grehn"),
        player("Kishan Nagar", ["DEF"], "Grehn"),
        player("Andrew Machanzi", ["DEF"], "Grehn"),
        player("Rufaro Hove", ["MID"], "Grehn"),
        player("Munashe Kashaya", ["MID"], "Grehn"),
        player("Prosper Nebarwe", ["MID"], "Grehn"),
        player("Paul Chimedza", ["MID", "FWD"], "Grehn"),
        player("Alexander Ncube", ["MID"], "Grehn"),
        player("Troy Owen", ["MID"], "Grehn"),
        player("Benedict Geti", ["FWD"], "Grehn"),
        player("Mudiwa Mkanganwi", ["FWD"], "Grehn"),
        player("Karl Gurupira", ["FWD"], "Grehn"),
        player("Benedict Hansen", ["FWD"], "Grehn"),
        player("Zachary Carnegie", ["GK", "FWD"], "Grehn"),
        player("Matipa Mawere", ["FWD"], "Plasil"),
        player("David Mliswa", ["GK"], "Grehn")
    ]);
});