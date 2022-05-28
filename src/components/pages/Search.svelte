<script lang="ts">
    import CardGrid from "../CardGrid.svelte";
    import SearchBar from "../SearchBar.svelte";


    import { searchMedia } from "../../modules/anilist";
    import type { AnilistData, MediaQuery } from "src/modules/anilistInterface";


    let searchVariables: MediaQuery = {};
	let animeList: Promise<AnilistData> = null;
    let searchTimeout: NodeJS.Timeout = setTimeout(delayedSearch, 500);

    $:
    {
        searchVariables = searchVariables;
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(delayedSearch, 500);
    }

    function delayedSearch()
    {
        animeList = null;
        animeList = searchMedia(searchVariables);
    }
    
</script>

<div>
    <div>
        <div>
            <p>Digite o nome do coiso:</p>
            <input bind:value={searchVariables.title}/>
        </div>
    </div>
    <div>
        {#if animeList}
            {#await animeList}
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