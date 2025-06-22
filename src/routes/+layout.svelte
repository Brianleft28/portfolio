<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import ScrollToTop from '$lib/utils/ScrollToTop.svelte';
</script>

<svelte:head>
	<title>Brian Benegas - Desarrollador de Software y Portfolio</title>
	<meta
		name="description"
		content="
		Bienvenido a mi portfolio, mi nombre es Brian Benegas, un desarrollador de software con experiencia en tecnologías web. Aquí encontrarás información sobre mis proyectos, habilidades y cómo contactarme. Explora mi trabajo y descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel.
		"
	/>
	<meta />
	<title>Brian Benegas - Desarrollador de Software y Portfolio</title>
	<meta
		name="description"
		content="Bienvenido a mi portfolio, soy Brian Benegas. Un desarrollador de software con experiencia en tecnologías web y programación. Aquí encontrarás información sobre mis proyectos, habilidades y cómo contactarme. Explora mi trabajo y descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel."
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
		content="Explora los proyectos y la experiencia de Brian Benegas, desarrollador de software."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://brianleft.com" />
	<meta property="og:image" content="https://brianleft.com/social-preview.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<!-- Twitter Card (para Twitter) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Brian Benegas - Portfolio" />
	<meta
		name="twitter:description"
		content="Explora los proyectos y la experiencia de Brian Benegas, desarrollador de software especializado en tecnologías web."
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
