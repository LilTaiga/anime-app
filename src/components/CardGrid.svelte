<script lang="ts">
    import Card from "./Card.svelte";

    import type { Media } from "src/modules/anilistInterface";

    export let animes: Media[] = [];
</script>

<div class="grid-container">
    {#each animes as anime}
        <Card titles={anime.title}
              cover={anime.coverImage}/>
    {/each}
</div>

<style>
    .grid-container
    {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-evenly;
        width: 100%;
        gap: 4px;

    }
</style>