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
	<meta
		name="keywords"
		content="Brian Benegas, portfolio, desarrollador de software, programador web, ingeniero de software, desarrollador full-stack, desarrollador front-end, desarrollador back-end, freelance, Svelte, SvelteKit, React, Nest.js, Nest, Next.js, Next, Node.js, Node, Express.js, Express, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, API, REST API, Docker, Nginx, CI/CD, Git, GitHub, desarrollo de aplicaciones web, soluciones de software, consultoría tecnológica, optimización web, rendimiento web, diseño responsivo, accesibilidad web"
	/>
	<!-- Open Graph (para Facebook, LinkedIn, etc.) -->
	<meta property="og:title" content="Brian Benegas - Portfolio" />
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
