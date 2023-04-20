<script lang="ts">
    import type { AvailableMeta } from "$lib/types";

    let params: AvailableMeta = {
        title: '',
        description: '',
        themeColor: '',
        type: 'summary',
        imageUrl: '',
        url: '',
        siteName: '',
    }
    $: url = `${window.location.protocol}//${window.location.host}/${window.btoa(new URLSearchParams(Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== ''))).toString())}`
</script>
<!-- for each item in the AvaialbleMeta type, bind that value to the associated key in AVaiilableMeta -->
{#each Object.keys(params) as key}
  {#if key === 'type'}
    <select bind:value={params[key]}>
      <option value="summary">summary</option>
      <option value="summary_large_image">summary_large_image</option>
      <option value="app">app</option>
      <option value="player">player</option>
    </select>
  {:else}
    <input bind:value={params[key]} placeholder={key}/>
  {/if}
{/each}
{#if url}
    <a href={url}>{url}</a>
{/if}