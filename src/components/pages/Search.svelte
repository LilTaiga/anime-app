<script lang="ts">
    import CardGrid from "../CardGrid.svelte";


    import { searchMedia } from "../../modules/anilist";
    import type { AnilistData, MediaQuery } from "src/modules/anilistInterface";

    let searchVariables: MediaQuery = {
        title: undefined,
        genres: [undefined],
        season: undefined,
        year: undefined,
        format: [undefined],
        status: [undefined]
    };


    let genres = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Ecchi",
        "Fantasy",
        "Horror",
        "Mahou Shoujo",
        "Mecha",
        "Music",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller",
    ];

    let seasons = [
        { value: "WINTER", text: "Winter" },
        { value: "SPRING", text: "Spring" },
        { value: "SUMMER", text: "Summer" },
        { value: "FALL", text: "Fall" },
    ];

    let formats = [
        { value: "TV", text: "TV" },
        { value: "TV_SHORT", text: "TV Short" },
        { value: "MOVIE", text: "Movie" },
        { value: "SPECIAL", text: "Special" },
        { value: "OVA", text: "OVA" },
        { value: "ONA", text: "ONA" },
    ];

    let statuses = [
        { value: "FINISHED", text: "Finished" },
        { value: "RELEASING", text: "Releasing" },
        { value: "NOT_YET_RELEASED", text: "Not yet released" },
        { value: "CANCELLED", text: "Cancelled" },
    ];
    
</script>

<style>
    .flex-horizontal
    {
        display: grid;
        grid-template-columns: 8px 3fr 8px 1fr 8px 1fr 8px 75px 8px 1fr 8px;


        width: 100%;
        height: max-content;
    }

    .flex-vertical
    {
        display: flex;
        flex-flow: column nowrap;

        height: fit-content;
    }

    .search1
    {
        grid-column: 2;
    }
    .search2
    {
        grid-column: 4;
    }
    .search3
    {
        grid-column: 6;
    }
    .search4
    {
        grid-column: 8;
    }
    .search5
    {
        grid-column: 10;
    }
    .search6
    {
        grid-column: 12;
    }

    #titleSearch
    {
        position: relative;
        top: 2px;

        width: 100%;
        height: 30px;
    }

    #genreSearch
    {
        width: 100%;
    }

    #seasonSearch
    {
        width: 100%;
    }

    #yearSearch
    {
        position: relative;
        top: 1px;

        width: 100%;
        height: 27px;
    }

    #formatSearch
    {
        width: 100%;
    }

    #statusSearch
    {
        width: 100%;
    }

</style>

<div>
    <div class="flex-horizontal"
         name="searchParameters">
        <div class="flex-vertical search1">
            <label for="titleSearch">Title:</label>
            <input id="titleSearch" type="search"
                   bind:value={searchVariables.title}/>
        </div>

        <div class="flex-vertical search2">
            <label for="genreSearch">Genre:</label>
            <select id="genreSearch"
                    bind:value={searchVariables.genres[0]}>
                <option value="" selected>Any</option>

                {#each genres as genre}
                    <option>{genre}</option>
                {/each}
            </select>
        </div>

        <div class="flex-vertical search3">
            <label for="seasonSearch">Season:</label>
            <select id="seasonSearch"
                    bind:value={searchVariables.season}>
                <option value="" selected>Any</option>

                {#each seasons as season}
                    <option value={season.value}>{season.text}</option>
                {/each}
            </select>
        </div>

        <div class="flex-vertical search4">
            <label for="yearSearch">Year:</label>
            <input id="yearSearch"
                   type="number" min="1940" max="2100"
                   bind:value="{searchVariables.year}"/>
        </div>

        <div class="flex-vertical search5">
            <label for="formatSearch">Format:</label>
            <select id="formatSearch"
                    bind:value={searchVariables.format[0]}>
                <option value="" selected>Any</option>

                {#each formats as format}
                    <option value={format.value}>{format.text}</option>
                {/each}
            </select>
        </div>

        <div class="flex-vertical search6">
            <label for="statusSearch">Status:</label>
            <select id="statusSearch"
                    bind:value={searchVariables.status[0]}>
                <option value="" selected>Any</option>

                {#each statuses as status}
                    <option value={status.value}>{status.text}</option>
                {/each}
            </select>
        </div>
    </div>

    <div>
        <p>Title: {searchVariables.title}</p>
        <p>Genre: {searchVariables.genres}</p>
        <p>Season: {searchVariables.season}</p>
        <p>Year: {searchVariables.year}</p>
        <p>Format: {searchVariables.format}</p>
        <p>Status: {searchVariables.status}</p>

        <pre style="color: white;">{JSON.stringify(searchVariables, (key, value) => value == false || value == null ? undefined : value, 2)}</pre>
    </div>
</div>