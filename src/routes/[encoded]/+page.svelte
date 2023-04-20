<script>
	import { onMount } from 'svelte';

    export let data;
    onMount(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    })
</script>

<!-- og meta tags -->
<svelte:head>
    {#if data.title}
        <title>{data.title}</title>
    {/if}
    <meta property="og:type" content={data.type || "summary"} />
    <meta name="theme-color" content={data.themeColor} />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:url" content={data.url} />
    <meta property="og:image" content={data.imageUrl} />
    <meta property="og:site-name" content={data.siteName} />

	<meta name="twitter:card" content={data.type || "summary"} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:url" content={data.url} />
	<meta name="twitter:image" content={data.imageUrl} />
</svelte:head>