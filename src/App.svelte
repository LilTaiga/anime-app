<script lang="ts">
	import Textfield from "@smui/textfield";
	import HelperText from "@smui/textfield/helper-text";

	import Select, { Option } from "@smui/select";

	import Chip, {Set, Text} from "@smui/chips";

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

	let valueA = '';
	let valueB = '';
	let valueC = '';
	let valueD = '';
</script>

<main>
	<div>
		<Textfield
			bind:value={valueA}
			label="Title">
			<HelperText slot="helper">Search Title</HelperText>
		</Textfield>

		<pre>Value: {valueA}</pre>
	</div>

	<div>
		<Select
			bind:value={valueB}
			label="Genre">
			<Option value=""/>
			{#each genres as genre}
				<Option value={genre}>{genre}</Option>
			{/each}
		</Select>

		<pre class="status">Value: {valueB}</pre>
	</div>

	<div>
		<Set 
			chips={seasons} 
			let:chip season={(chip) => chip.value} 
			bind:value={valueC}>
			<Chip {chip}>
				<Text>{chip.text}</Text>
			</Chip>
		</Set>

		<pre class="status">Value: {valueC}</pre>
	</div>

</main>

