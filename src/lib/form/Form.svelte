<script>
    export let data;
    export let team;

    function background(plasil, grehn, team) {
        if (plasil > grehn) {
            if (team == "Plasil") {
                return "#01dfb6";
                
            } else {
                return "#ff6b80";
            }
            
        } else if (plasil == grehn) {
            return "#dddddd";
            
        } else {
            if (team == "Plasil") {
                return "#ff6b80";
                
            } else {
                return "#01dfb6";     
            }
        }
    }
    
    function symbol(plasil, grehn, team) {
        if (plasil > grehn) {
            if (team == "Plasil") {
                return "W";
                
            } else {
                return "L";
            }
            
        } else if (plasil == grehn) {
            return "D";
            
        } else {
            if (team == "Plasil") {
                return "L";
                
            } else {
                return "W";     
            }
        }
    }
</script>

<div class="form">
    {#each data as match}
        <div class="formButton" style="background-color: {background(match.score_plasil, match.score_grehn, team)}">
            <p>{symbol(match.score_plasil, match.score_grehn, team)}</p>
        </div>
    {/each}
</div>



<style>
    .formButton {
        padding: 0;
        margin: 0;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }

    p {
        padding: 0;
        margin: 0;
        font-size: 0.8em;
        font-weight: bold;
    }

    .form .formButton:last-child {
        margin-right: 0;
    }
</style>
