<script lang="ts">
	import Search from "./components/pages/Search.svelte";
</script>

<main>
	<Search />
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

	:global(p)
	{
		color: white;
	}

	:global(::-webkit-scrollbar)
	{
		width: 4px;
	}

	:global(::-webkit-scrollbar-track)
	{
		background: transparent;
	}

	:global(::-webkit-scrollbar-thumb)
	{
		background: rgb(136, 136, 136);
		border-radius: 10px;
	}

	:global(::-webkit-scrollbar-thumb:hover)
	{
		background: rgb(100, 100, 100);
		border-radius: 10px;
	}

	:global(::-webkit-scrollbar-thumb:active)
	{
		background: rgb(100, 100, 100);
		border-radius: 10px;
	}
</style>