<script lang="ts">
	import UserMockup from './components/UserMockup.svelte';

	import { searchForUser } from './modules/anilist';
	import type { User } from './modules/anilistInterface';

	let username: string;

	let request = undefined;
	let userInfo: User = null;

	function getData()
	{
		request = searchForUser(username)
			.then(
				(result) =>
				{
					userInfo = result.data.User;
				},
				(error) => 
				{
					userInfo = null;
				}
			)
	}
</script>

<main>
	<div class="split left">
		<p>Type the name of an user:</p>
		<input type="text" bind:value={username}/>
		<br>
		<button on:click={getData}>Search</button>
	</div>
	
	<div class="split right">
		{#if userInfo}
			<p>Result:</p>
			<UserMockup username={userInfo.name} userId={userInfo.id} userAvatar={userInfo.avatar.large}/>	
		{:else if request}
			<p>Fetching data...</p>
		{/if}
	</div>
</main>

<style>
	:root 
	{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.split {
		height: 100%;
		width: 50%;
		position: fixed;
		top: 0;
		padding: 20px;
	}

	.left {
		left: 0;
		background-color: rgb(200, 200, 200);
	}

	.right {
		right: 0;
		background-color: rgb(180, 180, 180);
	}
</style>