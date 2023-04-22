<script lang="ts">
	import Inputs from '$lib/Inputs.svelte';
	import PreviewMenu from '$lib/Preview/PreviewMenu.svelte';
	import { metaStore } from '$lib/meta';
	$: url = `${window.location.protocol}//${window.location.host}/${window.btoa(
		new URLSearchParams(
			Object.fromEntries(Object.entries($metaStore).filter(([_, v]) => v !== ''))
		).toString()
	)}`;
</script>

<main>
	<section>
		<div>
			<h1>rickhider</h1>
			<Inputs />
			<button class="shortenButton" on:click={() => console.log('hi')}>Shorten Link</button>
		</div>
	</section>
	<section>
		<div>
			<PreviewMenu />
			<div>
				{#if url}
					<a href={url}>{url}</a>
				{/if}
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	a {
		word-break: break-word;
	}

	main {
		display: flex;
		justify-content: space-around;
		height: 100%;
	}

	section {
		flex: 1;
		height: 100%;
		display: flex;
	}

	section > div {
		flex: 1;
		margin: 1rem 5rem;
	}

	@media (max-width: 600px) {
		main {
			flex-direction: column;
			margin: 1rem;
		}

    section > div {
      margin: 0;
    }
	}

  .shortenButton {
    background-color: #843c33;
	  color: #f2f2f2;
  }

	.shortenButton:hover,
	.shortenButton:focus {
		background-color: #6e3028;
		cursor: pointer;
	}

	.shortenButton:active {
		background-color: #632e26;
	}

	h1 {
		text-align: center;
		color: #843c33;
		font-size: 3rem;
		margin-bottom: 1rem;
	}
</style>
