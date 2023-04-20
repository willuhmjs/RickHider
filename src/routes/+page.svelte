<script lang="ts">
    import type { AvailableMeta } from "$lib/types";
    let placeholders = {
      t: 'GitHub: Let’s build from here',
      d: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and fea...',
      th: '#1e2327',
      ty: 'Type',
      i: 'https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png',
      u: 'https://github.com',
    };
    let labels = {
      t: 'Title',
      d: 'Description',
      th: 'Theme Color',
      ty: 'Type',
      i: 'Image',
      u: 'URL',
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
<main>
<section>
{#each Object.keys(params) as key}
  {#if key === 'ty'}
    <div class="inputGroup">
      <label for={key}>{labels[key]}</label>
      <br>
      <select bind:value={params[key]}>
        <option value="summary_large_image">summary_large_image</option>
        <option value="summary">summary</option>
        <option value="app">app</option>
        <option value="player">player</option>
      </select>
    </div>
  {:else}
    <div class="inputGroup">
      <label for={key}>{labels[key]}</label>
      <br>
      <input bind:value={params[key]} placeholder={placeholders[key]}/>
    </div>
  {/if}
{/each}
  </section>
  <section>
    {#if url}
    <a href={url}>{url}</a>
  {/if}
</section>
</main>
<style lang="scss">
  .inputGroup {
    margin: 0.5rem 0;
  }

  main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  section {
    flex: 1;
    margin: 6rem;
}

input, select {
  width: 100%;
  padding: 0.8rem ;
  margin-top: 4px;
  border-radius: 4px;
  border: 0;
  background-color: #f5f5f5;
}

label {
  /* smaller and gray */
  font-size: 0.8rem;
  color: #666;
}

@media (max-width: 600px) {
  main {
    flex-direction: column;
    margin: 1rem;
  }
}
</style>