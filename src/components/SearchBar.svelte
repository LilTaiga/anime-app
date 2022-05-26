<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let searchText: string = "";
</script>

<p>Digite o nome do coiso:</p>
<input bind:value={searchText}/>