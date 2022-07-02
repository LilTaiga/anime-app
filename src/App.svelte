<script lang="ts">
	import Textfield from "@smui/textfield";
	import HelperText from "@smui/textfield/helper-text";

	import Select, { Option } from "@smui/select";

	import Chip, {Set, Text} from "@smui/chips";
import { time_ranges_to_array } from "svelte/internal";

	const genres = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Ecchi",
        "Fantasy",
        "Horror",
        "Mahou Shoujo",
        "Mecha",
        "Music",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller",
    ];

    const seasons = [
        { value: "WINTER", text: "Winter" },
        { value: "SPRING", text: "Spring" },
        { value: "SUMMER", text: "Summer" },
        { value: "FALL", text: "Fall" },
    ];

	const formats = [
        { value: "TV", text: "TV" },
        { value: "TV_SHORT", text: "TV Short" },
        { value: "MOVIE", text: "Movie" },
        { value: "SPECIAL", text: "Special" },
        { value: "OVA", text: "OVA" },
        { value: "ONA", text: "ONA" },
    ];

	const statuses = [
        { value: "FINISHED", text: "Finished" },
        { value: "RELEASING", text: "Releasing" },
        { value: "NOT_YET_RELEASED", text: "Not yet released" },
        { value: "CANCELLED", text: "Cancelled" },
    ];

	let title = '';
	let genre = '';
	let season = '';
	let year = '';
	let format = '';
	let status = '';
</script>

<main>
	<div>
		<Textfield
			bind:value={title}
			label="Title">
			<HelperText slot="helper">Search Title</HelperText>
		</Textfield>

		<pre>Value: {title}</pre>
	</div>

	<div>
		<Select
			bind:value={genre}
			label="Genre">
			<Option value=""/>
			{#each genres as genre}
				<Option value={genre}>{genre}</Option>
			{/each}
		</Select>

		<pre class="status">Value: {genre}</pre>
	</div>

	<div>
		<p
			class="mdc-typography--subtitle2">Season:</p>
		<Set 
			chips={seasons} choice
			let:chip
			bind:selected={season}>
			<Chip {chip}>
				<Text>{chip.text}</Text>
			</Chip>
		</Set>

		<pre class="status">Value: {season.value}</pre>
	</div>

	<div>
		<Textfield
			bind:value={year}
			label="Year"
			type="number"
			input$min="1940"
			input$max="2100"/>

		<pre class="status">Value: {year}</pre>
	</div>

	<div>
		<Select
			bind:value={format}
			label="Format">
			<Option value=""></Option>
			{#each formats as format}
				<Option value={format.value}>{format.text}</Option>
			{/each}
		</Select>

		<pre class="status">Value: {format}</pre>
	</div>

	<div>
		<Select
			bind:value={status}
			label="Status">
			<Option value=""></Option>
			{#each statuses as status}
				<Option value={status.value}>{status.text}</Option>
			{/each}
		</Select>

		<pre class="status">Value: {status}</pre>
	</div>

</main>

<style>
	div {
		border-bottom: 1px white solid;
	}
</style>