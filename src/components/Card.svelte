<script lang="ts">
    import type { Media } from "src/modules/anilistInterface"

    export let media: Media;

    function onClick()
    {
        alert(`You clicked ${media.title.romaji}`)
    }
</script>

<div class="anime-card" on:click={onClick}
     style="--color:{media.coverImage.color}">
    <img class="anime-cover"
         src={media.coverImage.extraLarge ? media.coverImage.extraLarge : media.coverImage.large}
         alt="Anime Cover"/> <br>
    
    <p class="anime-title">{media.title.romaji ? media.title.romaji : media.title.native}</p>
</div>

<style>
    .anime-card
    {
        /* background-color: lightslategray; */
        border-radius: 8px;

        width: 180px;

        padding: 8px;
    }

    .anime-card:hover > .anime-title
    {
        color: var(--color);
    }

    .anime-cover
    {
        border-radius: 8px;
        margin: 0px;
        width: 100%;
        height: 264px;
    }

    .anime-title
    {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 600;
        margin: 0px;
        margin-left: 4px;
        color: aliceblue;
        transition: color .125s;
    }

</style>