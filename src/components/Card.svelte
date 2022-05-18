<script>
    export let titles = {
        native: "Lorem Ipsilum",
    };

    export let cover = {
        large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140960-Yl5M3AiLZAMq.png",
        medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png",
        color: "#c9f1f1",
    }
</script>

<div class="anime-card">
    <img class="anime-cover"
         src={cover.extraLarge ? cover.extraLarge : cover.large}
         alt="Anime Cover"/> <br>
    
    <p class="anime-title">{titles.romaji ? titles.romaji : titles.native}</p>
</div>

<style>
    .anime-card
    {
        /* background-color: lightslategray; */
        border-radius: 8px;

        width: 180px;

        padding: 8px;
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
    }

</style>