<script lang="ts">
    import type { AvailableMeta } from "$lib/types";
    let names = {
      t: 'GitHub: Let’s build from here',
      d: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea...',
      th: '#1e2327',
      ty: 'Type',
      i: 'https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png',
      u: 'https://github.com',
    };
    let params: AvailableMeta = {
        t: '',
        d: '',
        th: '',
        ty: 'summary_large_image',
        i: '',
        u: '',
    }
    $: url = `${window.location.protocol}//${window.location.host}/${window.btoa(new URLSearchParams(Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== ''))).toString())}`
</script>
<!-- for each item in the AvaialbleMeta type, bind that value to the associated key in AVaiilableMeta -->
{#each Object.keys(params) as key}
  {#if key === 'ty'}
    <select bind:value={params[key]}>
      <option value="summary_large_image">summary_large_image</option>
      <option value="summary">summary</option>
      <option value="app">app</option>
      <option value="player">player</option>
    </select>
  {:else}
    <input bind:value={params[key]} placeholder={names[key]}/>
  {/if}
{/each}
{#if url}
    <a href={url}>{url}</a>
{/if}