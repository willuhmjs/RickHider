<script lang="ts">
	import { metaStore, placeholders } from '$lib/meta';
</script>

<div class="twitter-card">
    <div>
        <img
            src={($metaStore.t || $metaStore.d || $metaStore.i) ? ($metaStore.i || "https://via.placeholder.com/129x129.png?text=129x129") : placeholders.i}
            alt="Selected img preview"
            on:load={(e) => (e.target.style.display = 'block')}
            on:error={(e) => (e.target.src = 'https://via.placeholder.com/129x129.png?text=129x129')}
        />
        <!--
    <img src={$metaStore.i ? $metaStore.i : `https://via.placeholder.com/341x177.png?text=${$metaStore.t || "341x177"}`} alt="OpenGraph"/>
    --->
    </div>
	<div class="twitter-textarea">
		<p class="twitter-title">{($metaStore.t || $metaStore.d) ? ($metaStore.t || "") : placeholders.t}</p>
		<p class="twitter-description">{($metaStore.t || $metaStore.d) ? ($metaStore.d || "") : placeholders.d}</p>
	</div>
</div>

<style>
	.twitter-card {
		display: flex;
		flex-direction: row;
		max-width: 27.63rem;
		width: 100%;
		border-radius: 0.69rem;
		border: 1px solid #cfd9de;
		height: 8.5rem;
		overflow: hidden;
	}

	.twitter-textarea {
		max-width: 100%;
		width: 100%;
		padding: 0.5rem;
		overflow: hidden;
		margin: auto 0;
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
		max-width: 8.06rem;
		height: 100%;
        border-radius: 11px 0 0 11px;
	}
</style>
