<script lang="ts">
    import Inputs from "$lib/Inputs.svelte";
    import params from "$lib/params";
    $: url = `${window.location.protocol}//${window.location.host}/${window.btoa(new URLSearchParams(Object.fromEntries(Object.entries($params).filter(([_, v]) => v !== ''))).toString())}`
</script>
<main>

<section>
  <div class="header"><h1>rickhider</h1></div>
  <Inputs/>
  <button on:click={() => alert("hi")}>Shorten Link</button>

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

button {
  padding: 0.8rem;
  border: 0;
  font-weight: bold;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  background-image: url("https://cdn.vox-cdn.com/thumbor/Si2spWe-6jYnWh8roDPVRV7izC4=/0x0:1192x795/1400x788/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  margin: 1rem 0;
}

h1 {
  text-align: center;
  font-size: 40px;
}

.header {
  background-clip: text;
  background-image: url("https://cdn.vox-cdn.com/thumbor/Si2spWe-6jYnWh8roDPVRV7izC4=/0x0:1192x795/1400x788/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg");
  -webkit-background-clip: text;
  color: transparent;
  background-position-x: center;
  background-position-y: top;

}
</style>