<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import ScrollToTop from '$lib/utils/ScrollToTop.svelte';
</script>

<svelte:head>
	<title>Brian Benegas - Portfolio de Desarrollo de Software</title>

	<meta
		name="description"
		content="Explora el portfolio de Brian Benegas, un desarrollador de software especializado en la creación de aplicaciones web robustas y escalables con tecnologías como SvelteKit, Nest.js y Docker."
	/>
	<meta name="author" content="Brian Benegas" />

	<meta property="og:title" content="Brian Benegas - Portfolio de Desarrollo de Software" />
	<meta
		property="og:description"
		content="Un vistazo a los proyectos, habilidades y experiencia de Brian Benegas."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://brianleft.com" />
	<meta property="og:image" content="https://brianleft.com/social-preview.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Brian Benegas - Portfolio de Desarrollo de Software" />
	<meta
		name="twitter:description"
		content="Explora los proyectos y la experiencia de Brian Benegas."
	/>
	<meta name="twitter:image" content="https://brianleft.com/social-preview.png" />
</svelte:head>
<div class="flex flex-col">
	<Navbar />
	<!-- El padding superior es necesario porque la Navbar es fija -->
	<main class="flex-grow pt-24 px-4 md:px-8">
		<slot />
	</main>
</div>

<ScrollToTop />
