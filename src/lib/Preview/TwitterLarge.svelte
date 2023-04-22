<script lang="ts">
	import { metaStore, placeholders } from '$lib/meta';
</script>

<div class="twitter-card">
	{#if $metaStore.i}
		<div class="twitter-img-div">
			<img
				src={$metaStore.i || placeholders.i}
				alt="Selected img preview"
				on:load={(e) => (e.target.style.display = 'block')}
				on:error={(e) => (e.target.style.display = 'none')}
			/>
			<!--
        <img src={$metaStore.i ? $metaStore.i : `https://via.placeholder.com/341x177.png?text=${$metaStore.t || "341x177"}`} alt="OpenGraph"/>
        --->
		</div>
	{/if}
	<div class="twitter-textarea">
		<p class="twitter-title">{($metaStore.t || $metaStore.d) ? ($metaStore.t || "") : placeholders.t}</p>
		<p class="twitter-description">{($metaStore.t || $metaStore.d) ? ($metaStore.d || "") : placeholders.d}</p>
	</div>
</div>

<style>
	.twitter-card {
		display: flex;
		flex-direction: column;
		max-width: 442px;
		width: 100%;
		border-radius: 11px;
		border: 1px solid #cfd9de;
		margin: 0 auto;
	}

	.twitter-textarea {
		max-width: 100%;
		min-height: 76px;
		width: 100%;
		max-height: 155px;
		padding: 0.5rem;
		overflow: hidden;
		word-wrap: break-word;
	}

	.twitter-title,
	.twitter-description {
		font-size: 15px;
		margin: 5px 0;
	}

	.twitter-description {
		color: #536471;
	}

	img {
		width: 100%;
		height: 277px;
		border-radius: 11px 11px 0 0;
		display: none;
		object-fit: cover;
	}
</style>
