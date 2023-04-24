<script lang="ts">
	import { metaStore } from '$lib/meta';
	import TwitterLarge from '$lib/Preview/TwitterLarge.svelte';
	import Twitter from '$lib/Preview/Twitter.svelte';
	import Discord from '$lib/Preview/Discord.svelte';
	import DiscordLarge from '$lib/Preview/DiscordLarge.svelte';
	import Callout from '$lib/Callout.svelte';
	let selectedPreview = 'TwitterFacebook';
</script>

<form>
	<input
		type="radio"
		checked
		bind:group={selectedPreview}
		name="platform"
		value="TwitterFacebook"
		id="TwitterFacebook"
	/>
	<label id="left" for="TwitterFacebook"
		><i class="fa-brands fa-twitter" /> Twitter and <i class="fa-brands fa-facebook" /> Facebook</label
	>

	<input type="radio" name="platform" bind:group={selectedPreview} value="Discord" id="Discord" />
	<label id="right" for="Discord"><i class="fa-brands fa-discord" /> Discord</label>
</form>

{#if selectedPreview === 'TwitterFacebook'}
	{#if $metaStore.ty === 'summary_large_image' && ($metaStore.t || $metaStore.d || $metaStore.i)}
		<TwitterLarge />
	{:else}
		<Twitter />
	{/if}
{:else if $metaStore.ty === 'summary_large_image' && ($metaStore.t || $metaStore.d || $metaStore.i)}
	<DiscordLarge />
{:else}
	<Discord />
{/if}
{#if !($metaStore.t || $metaStore.d || $metaStore.i )}
	<Callout>No card will be generated with the default configuration.</Callout>
{/if}

<style lang="scss">
	form {
		display: flex;
		gap: 2px;
	}

	label {
		flex: 1;
		display: inline-block;
		padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		color: #f2f2f2;
		background-color: #843c33;
		border: 1px solid #843c33;
		cursor: pointer;
	}

	#left {
		border-radius: 5px 0 0 5px;
		background-color: #1da1f2;
		border: 0;
	}

	#right {
		border-radius: 0 5px 5px 0;
		background-color: #5865f2;
		border: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	input[type='radio'] {
		display: none;
	}

	/* Style the label element when its corresponding radio button is checked */
	#TwitterFacebook:checked + label {
		background-color: #188fda;
	}

	#Discord:checked + label {
		background-color: #4b57d3;
	}
</style>
