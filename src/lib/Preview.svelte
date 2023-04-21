<script lang="ts">
	import params from '$lib/params';
</script>

<div class="twitter-card">
	{#if $params.i}
		<div class="twitter-img-div">
			<img
				src={$params.i}
				alt="Selected img preview"
				on:load={(e) => (e.target.style.display = 'block')}
				on:error={(e) => (e.target.style.display = 'none')}
			/>
			<!--
        <img src={$params.i ? $params.i : `https://via.placeholder.com/341x177.png?text=${$params.t || "341x177"}`} alt="OpenGraph"/>
        --->
		</div>
	{/if}
	<div class="twitter-textarea">
		<p class="twitter-title">{$params.t}</p>
		<p class="twitter-description">{$params.d}</p>
	</div>
</div>

<style>
	.twitter-card {
		display: flex;
		flex-direction: column;
		max-width: 342px;
		width: 100%;
		border-radius: 11px;
		border: 1px solid #cfd9de;
	}

	.twitter-textarea {
		max-width: 341px;
		min-height: 76px;
		width: 100%;
		max-height: 155px;
		padding: 0.5rem;
		overflow: hidden;
		word-wrap: break-all;
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
		width: 341px;
		height: 177px;
		border-radius: 11px 11px 0 0;
		display: none;
		object-fit: cover;
	}
</style>
