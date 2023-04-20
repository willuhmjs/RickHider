<script>
	import { onMount } from 'svelte';

    export let data;
    onMount(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    })
</script>

<!-- og meta tags -->
<svelte:head>
    {#if data.t}
        <title>{data.t}</title>
    {/if}
    <meta property="og:type" content={data.ty || "summary"} />
    <meta name="theme-color" content={data.th} />
    <meta name="description" content={data.d}/>
    <meta property="og:title" content={data.t} />
    <meta property="og:description" content={data.d} />
    <meta property="og:url" content={data.u} />
    <meta property="og:image" content={data.i} />

	<meta name="twitter:card" content={data.ty || "summary"} />
	<meta name="twitter:title" content={data.t} />
	<meta name="twitter:description" content={data.d} />
	<meta name="twitter:url" content={data.u} />
	<meta name="twitter:image" content={data.i} />
</svelte:head>