<script>
    export let data;
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
    <meta property="og:image" content={data.i} />

	<meta name="twitter:card" content={data.ty || "summary"} />
	<meta name="twitter:title" content={data.t} />
	<meta name="twitter:description" content={data.d} />
	<meta name="twitter:image" content={data.i} />
</svelte:head>
<meta http-equiv="refresh" content="0; URL=gotcha.mp4" />