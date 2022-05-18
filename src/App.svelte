<script lang="ts">
	import CardGrid from "./components/CardGrid.svelte";

	import type { Media } from "./modules/anilistInterface";
	import { searchQuery } from "./modules/anilist";

	let query = `
	query
	{
		Page(page: 1, perPage: 50)
		{
			media(type: ANIME, sort: [TRENDING_DESC])
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
				extraLarge
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

	let animes = searchQuery(query);
</script>

<main>
	{#await animes then result}
		{#if result.data.Page.media}
			<CardGrid animes={result.data.Page.media}/>
		{:else}
			<p>Error!</p>
		{/if}	
	{/await}
</main>

<style>
	:root 
	{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body)
	{
		background-color: rgb(24, 24, 24);
	}
</style>