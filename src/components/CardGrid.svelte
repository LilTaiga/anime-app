<script lang="ts">
    import Card from "./Card.svelte";

    import type { Media } from "src/modules/anilistInterface";

    export let animes: Media[] = [];
</script>

<div class="grid-container">
    {#each animes as anime}
        <Card media={anime} />
    {/each}
</div>

<style>
    .grid-container
    {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: space-evenly;
        width: 100%;
        gap: 4px;

    }
</style>