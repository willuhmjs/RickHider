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
	<meta name="twitter:image" content="https://rickhider.vercel.app/favicon.png" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>
<h1>rickhider</h1>

<main>
	<section>
		<div>
			<h2>Card Settings</h2>
			<Inputs />
			<button class="shortenButton" on:click={() => console.log('hi')}>Shorten Link</button>
		</div>
	</section>
	<section>
		<div>
			<h2>Card Preview</h2>
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
	}

	section {
		flex: 1;
		display: flex;
	}

	section > div {
		flex: 1;
		margin: 0 5rem;
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
		font-size: 3rem;
		margin: 0 auto;
		padding: 1rem 0;
}

	h1, h2 {
		color: #843c33;
	}
</style>
