<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import ScrollToTop from '$lib/utils/ScrollToTop.svelte';
	import { browser } from '$app/environment';
	import { isAtTop } from '$lib/stores/scrollStore';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition'; // <-- NUEVO

	onMount(() => {
		if (browser) {
			const handleScroll = () => {
				isAtTop.set(window.scrollY < 50); // Lo consideramos "top" si hemos bajado menos de 50px
			};
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<svelte:head>
	<title>Brian Benegas - Portfolio IT</title>

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
	<main
		class={`${$isAtTop ? '' : 'mt-9 animate-fadeIn'} flex min-h-screen flex-col items-center transition-all duration-500`}
	>
		<slot />
	</main>
</div>

{#if $isAtTop}
	<div
		transition:fade={{ duration: 300 }}
		class="fixed scroll-none bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-shadow-secondary text-shadow-2xs"
	>
		<svg
			class="size-6 animate-bounce"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
			/>
		</svg>
	</div>
{/if}

<ScrollToTop />
