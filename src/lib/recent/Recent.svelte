<script>
    export let plasil;
    export let grehn;
    export let date;
    export let motm;

    date = date.split("/").reverse().join("-");

    date = new Date(date);

    if (motm == "") {
        motm = "N/A"
    }
</script>

<div class="container">
    <fieldset class="recent">
        <legend>Recent Result -- {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</legend>
        <p class="score"> <img height="34px" src="./plasil.png" alt="Plasil"><b>{plasil} - {grehn}</b><img height="34px" src="./grehn.png" alt="Grehn"></p>
    </fieldset>
    <fieldset class="recent motm">
        <legend>Man Of The Match</legend>
        <p class="score">{motm}</p>
    </fieldset>
</div>


<style>
    img {
        margin: 0.8rem;
    }

    .container {
        white-space: nowrap;
    }

    .recent {
        padding: 1em;
        margin: 0;
        width: 50%;
        height: 5em;
        border-radius: 3px;
        background-color: #fff;
        border: 1px solid #e1e4e7;
        font-weight: 400;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .score {
        font-size: 2em;
        padding-bottom: 10px;
        color: #3a3c3d;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    legend {
        padding: 0;
        margin: 0;
        color: #3a3c3d;
    }

    @media screen and (max-width: 625px) {
        .motm {
            display: none;
        }
        .recent {
            width: 100%;
        }
    }
</style>

