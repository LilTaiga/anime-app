<script lang="ts">
    import CardGrid from "../CardGrid.svelte";


    import { searchMedia } from "../../modules/anilist";
    import type { AnilistData, Genres, MediaFormat, MediaSeason, MediaStatus } from "src/modules/anilistInterface";


    // Searching stuff

    let title: string;
    let genre: Genres;
    let season: MediaSeason;
    let year: number | null;
    let format: MediaFormat;
    let status: MediaStatus;

    const genres = [
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

    const seasons = [
        { value: "WINTER", text: "Winter" },
        { value: "SPRING", text: "Spring" },
        { value: "SUMMER", text: "Summer" },
        { value: "FALL", text: "Fall" },
    ];

    const formats = [
        { value: "TV", text: "TV" },
        { value: "TV_SHORT", text: "TV Short" },
        { value: "MOVIE", text: "Movie" },
        { value: "SPECIAL", text: "Special" },
        { value: "OVA", text: "OVA" },
        { value: "ONA", text: "ONA" },
    ];

    const statuses = [
        { value: "FINISHED", text: "Finished" },
        { value: "RELEASING", text: "Releasing" },
        { value: "NOT_YET_RELEASED", text: "Not yet released" },
        { value: "CANCELLED", text: "Cancelled" },
    ];

    // Search results
    let searchResult: Promise<AnilistData> = searchMedia({});
    let searchTimeout: NodeJS.Timeout | null = null;

    function delayedSearch()
    {
        if(searchTimeout != null)
        {
            clearTimeout(searchTimeout);
            searchTimeout = null;
        }

        searchTimeout = setTimeout(() => searchResult = searchMedia({
            title: title || "",
            genres: [genre] || undefined,
            season: season || "",
            year: year || undefined,
            format: [format] || undefined,
            status: [status] || undefined,
        }), 500);
    }
    
    
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
    <!-- #region Search -->

    <div class="flex-horizontal"
         name="searchParameters">
        <div class="flex-vertical search1">
            <label for="titleSearch">Title:</label>
            <input id="titleSearch" type="search"
                   bind:value={title} on:input={delayedSearch}/>
        </div>

        <div class="flex-vertical search2">
            <label for="genreSearch">Genre:</label>
            <select id="genreSearch"
                    bind:value={genre} on:input={delayedSearch}>
                <option value="" selected>Any</option>

                {#each genres as genre}
                    <option>{genre}</option>
                {/each}
            </select>
        </div>

        <div class="flex-vertical search3">
            <label for="seasonSearch">Season:</label>
            <select id="seasonSearch"
                    bind:value={season} on:input={delayedSearch}>
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
                   bind:value="{year}" on:input={delayedSearch}/>
        </div>

        <div class="flex-vertical search5">
            <label for="formatSearch">Format:</label>
            <select id="formatSearch"
                    bind:value={format} on:input={delayedSearch}>
                <option value="" selected>Any</option>

                {#each formats as format}
                    <option value={format.value}>{format.text}</option>
                {/each}
            </select>
        </div>

        <div class="flex-vertical search6">
            <label for="statusSearch">Status:</label>
            <select id="statusSearch"
                    bind:value={status} on:input={delayedSearch}>
                <option value="" selected>Any</option>

                {#each statuses as status}
                    <option value={status.value}>{status.text}</option>
                {/each}
            </select>
        </div>
    </div>

    <!-- #endregion -->
    
    <!-- #region Search results-->

    
    <!-- debug 
    <div>
        <p>Title: {title}</p>
        <p>Genre: {genre}</p>
        <p>Season: {season}</p>
        <p>Year: {year}</p>
        <p>Format: {format}</p>
        <p>Status: {status}</p>

        <pre style="color: white;">{JSON.stringify(searchObject, (key, value) => value == false || value == null ? undefined : value, 2)}</pre>
    </div>
    -->

    {#await searchResult}
        <p>Searching...</p>
    {:then data}
        {#if data.data}
            <CardGrid animes={data.data.Page.media}/>
        {:else}
            <p>An error has occurred...</p>
        {/if}
    {/await}

    <!-- #endregion -->
</div>