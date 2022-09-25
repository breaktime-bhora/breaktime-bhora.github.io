<script>
    export let plasil;
    export let grehn;
    export let team;

    let symbol;
    let background = "#dddddd";

    if (plasil > grehn) {
        if (team == "P&B") {
            symbol = "W";
            background = "#01dfb6";
        } else {
            symbol = "L";
            background = "#ff6b80";
        }
        
    } else if (plasil == grehn) {
        symbol = "D";
    } else {
        if (team == "P&B") {
            symbol = "L";
            background = "#ff6b80";
        } else {
            symbol = "W";
            background = "#01dfb6";
        }
    }
</script>

<div class="formButton" style="background-color: {background}">
    <p>{symbol}</p>
</div>

<style>
    .formButton {
        padding: 0;
        margin: 0;
        margin-right: 5px;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    p {
        padding: 0;
        margin: 0;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>
