<script lang="ts">
	import params from '$lib/params';
	import type { AvailableMeta } from './types';
	let placeholders: AvailableMeta = {
		t: 'GitHub: Let’s build from here',
		d: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea...',
		th: '#1e2327',
		ty: 'Type',
		i: 'https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png'
	};
	let labels: AvailableMeta = {
		t: 'Title',
		d: 'Description',
		th: 'Theme Color',
		ty: 'Type',
		i: 'Image'
	};
</script>

{#each Object.keys($params) as key}
	{#if key === 'ty'}
		<div class="inputGroup">
			<label for={key}>{labels[key]}</label>
			<br />
			<select bind:value={$params[key]}>
				<option value="summary">summary</option>
				<option value="summary_large_image">summary_large_image</option>
			</select>
		</div>
	{:else}
		<div class="inputGroup">
			<label for={key}>{labels[key]}</label>
			<br />
			<input bind:value={$params[key]} placeholder={placeholders[key]} />
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
