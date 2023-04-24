<script lang="ts">
	import './style.scss';
	import Inputs from '$lib/Inputs.svelte';
	import PreviewMenu from '$lib/Preview/PreviewMenu.svelte';
	import { metaStore } from '$lib/meta';
	$: url = globalThis.window ? `${globalThis.window.location.protocol}//${globalThis.window.location.host}/${globalThis.window.btoa(
		new URLSearchParams(
			Object.fromEntries(Object.entries($metaStore).filter(([_, v]) => v !== ''))
		).toString()
	)}` : null;
</script>

<svelte:head>
	<title>Rickhider - Custom Rickroll Generator</title>
	<meta
		name="description"
		content="Rickroll your friends by decieving them with custom metadata."
	/>
	<meta property="og:type" content="website" />
	<meta property="theme-color" content="#843c33" />
	<meta name="og:title" content="Rickhider - Custom Rickroll Generator" />
	<meta
		name="og:description"
		content="Rickroll your friends by decieving them with custom metadata."
	/>
	<meta name="og:image" content="https://rickhider.vercel.app/favicon.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Rickhider - Custom Rickroll Generator" />
	<meta
		name="twitter:description"
		content="Rickroll your friends by decieving them with custom metadata."
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

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
		margin-top: 0;
	}
</style>
