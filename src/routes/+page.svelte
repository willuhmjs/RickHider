<script lang="ts">
    import Inputs from "$lib/Inputs.svelte";
    import Preview from "$lib/Preview.svelte";
    import params from "$lib/params";
    $: url = `${window.location.protocol}//${window.location.host}/${window.btoa(new URLSearchParams(Object.fromEntries(Object.entries($params).filter(([_, v]) => v !== ''))).toString())}`
</script>
<main>

<section>
  <div>
  <h1>rickhider</h1>
  <Inputs/>
  <button on:click={() => console.log("hi")}>Shorten Link</button>
</div>
  </section>
  <section>
    <div>
    <Preview />
    <div>
    {#if url}
    <a href={url}>{url}</a>
  {/if}
    </div>
  </div>
  </section>
</main>
<style lang="scss">
  a {
    word-break: break-word;
  }

  main {
    display: flex;
    justify-content: space-around;
    height: 100%;
  }

  section {
    flex: 1;
    height: 100%;
    display: flex;
}

section > div {
  flex: 1;
  margin: 1rem 5rem;
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
  margin: 1rem 0;
  background-color: #843c33;
  color: #f2f2f2;
}

button:hover, button:focus {
  background-color: #7a372e;
  cursor: pointer;
}

button:active {
  background-color: #6f332a;
}

h1 {
  text-align: center;
  color: #843c33;
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>