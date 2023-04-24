<script lang="ts">
	import './style.scss';
	import Inputs from '$lib/Inputs.svelte';
	import PreviewMenu from '$lib/Preview/PreviewMenu.svelte';
	import Output from '$lib/Output.svelte';
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
	<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
</svelte:head>
<h1>rickhider</h1>

<main>
	<section>
		<div>
			<h2>Card Settings</h2>
			<Inputs />
		</div>
	</section>
	<section>
		<div>
			<h2>Card Preview</h2>
			<PreviewMenu />
			<h2>Generated Link</h2>
			<Output />
		</div>
	</section>
</main>

<style lang="scss">
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

	h1 {
		text-align: center;
		font-size: 3rem;
		margin: 0 auto;
		padding: 1rem 0;
}

	h1, h2 {
		color: #843c33;
	}

	h2 {
		margin-bottom: 0.7rem;
	}
</style>
