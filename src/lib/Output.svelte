<script lang="ts">
    import { metaStore } from '$lib/meta';
    $: url = globalThis.window ? `${globalThis.window.location.protocol}//${globalThis.window.location.host}/${globalThis.window.btoa(
		new URLSearchParams(
			Object.fromEntries(Object.entries($metaStore).filter(([_, v]) => v !== ''))
		).toString()
	)}` : null;
    $: shortUrl = url || "";
</script>
<div>
    {#if url}
    <div class="inputGroup">
        <div class="addonBox">
            <button on:click={async () => {
                // NOTE: is.gd also works, but it's not as popular as tinyurl
                // globalThis.window.open(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`, '_blank');
                globalThis.window.open(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`, '_blank');
            }}><i class="fa-solid fa-down-left-and-up-right-to-center"></i></button>
            <button on:click={() => {
                navigator.clipboard.writeText(shortUrl);
            }}><i class="fa-solid fa-files"></i></button>
            <input type="text" disabled bind:value={shortUrl}/>
        </div>
    </div>
    {/if}
</div>

<style>
    .addonBox {
        display: flex;
    }

    .addonBox input {
        border-radius: 0 5px 5px 0;
    }

    .addonBox button {
        flex: 1;
        background-color: #e0dede;    
        color: #252525; 
    }

    .addonBox button:first-child {
        border-radius: 5px 0 0 5px;
        border-right: 1px solid #c0bebe;
    }


    .addonBox button:hover {
        background-color: #d0cece;
    }

    .addonBox button:active {
        background-color: #c0bebe;
    }
</style>
