<script lang="ts">
	import { placeholders, labels, metaStore } from '$lib/meta';

</script>

{#each Object.keys($metaStore) as key}
	{#if key === 'ty'}
		<div class="inputGroup">
			<label for={key}>{labels[key]}</label>
			<br />
			<select bind:value={$metaStore[key]}>
				<option value="summary">summary</option>
				<option value="summary_large_image">summary_large_image</option>
			</select>
		</div>
	{:else}
		<div class="inputGroup">
			<label for={key}>{labels[key]}</label>
			<br />
			<input bind:value={$metaStore[key]} placeholder={placeholders[key]} />
		</div>
	{/if}
{/each}

<style lang="scss">
	.inputGroup {
		margin: 0.5rem 0;
	}

	input,
	select {
		width: 100%;
		padding: 0.8rem;
		margin-top: 4px;
		border-radius: 4px;
		border: 0;
		background-color: #f5f5f5;
	}

	label {
		/* smaller and gray */
		font-size: 0.8rem;
		color: #666;
	}
</style>
