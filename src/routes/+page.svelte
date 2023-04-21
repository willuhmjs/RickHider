<script lang="ts">
    import Inputs from "$lib/Inputs.svelte";
    import params from "$lib/params";
    $: url = `${window.location.protocol}//${window.location.host}/${window.btoa(new URLSearchParams(Object.fromEntries(Object.entries($params).filter(([_, v]) => v !== ''))).toString())}`
</script>
<main>
<section>
  <Inputs/>
  </section>
  <section>
    <!-- preview of meta tag => embedded rickroll URL -->
    {#if url}
    <a href={url}>{url}</a>
  {/if}
</section>
</main>
<style lang="scss">
  a {
    word-break: break-word;
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

@media (max-width: 600px) {
  main {
    flex-direction: column;
    margin: 1rem;
  }
}
</style>