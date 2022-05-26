<script lang="ts">
    import CardGrid from "../CardGrid.svelte";
    import SearchBar from "../SearchBar.svelte";

    import { searchQuery } from "../../modules/anilist";
    import type { AnilistData, MediaQuery } from "src/modules/anilistInterface";

    let query = `
	query($title: String, $genres: [String], $season: MediaSeason, $year: FuzzyDateInt, $format: [MediaFormat], $status: [MediaStatus])
    {
        Page(page: 1, perPage: 50)
        {
            media(search: $title, genre_in: $genres, startDate_greater: $year, format_in: $format, status_in: $status, season: $season, sort: [POPULARITY_DESC], isAdult: false, type: ANIME)
            {
            title 
            {
                romaji
                english
                native
            }
            
            format
            status
            description(asHtml: true)
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            season
            seasonInt
            seasonYear
            episodes
            duration
            coverImage
            {
                large
                medium
                color
            }
            bannerImage
            genres
            synonyms
            }
        }
    }`;

    let variables: MediaQuery = {};
	let animes: Promise<AnilistData> = null;
    let animeTimeout = setTimeout(delayedSearch, 1000);
    $:
    {
        variables = variables;
        clearTimeout(animeTimeout);
        animeTimeout = setTimeout(delayedSearch, 1000);
    }

    function delayedSearch()
    {
        animes = searchQuery(query, variables);
    }
</script>

<div>
    <div>
        <SearchBar bind:searchText={variables.title}/>
    </div>
    <div>
        {#if animes}
            {#await animes}
                <p>Waiting for data...</p>
            {:then result} 
                {#if result.data.Page}
                    <CardGrid animes={result.data.Page.media}/>
                {:else}
                    <p>Error!</p>
                {/if}
            {:catch error}
                <p>{error}</p>
            {/await}
        {:else}
            <p>Sem query!</p>
        {/if}
    </div>
</div>

