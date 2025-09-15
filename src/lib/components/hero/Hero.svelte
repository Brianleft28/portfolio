<script lang="ts">
	import SvgBackground from '$lib/components/hero/SvgBackground.svelte';
	import { onMount } from 'svelte';
	import { isAtTop } from '$lib/stores/scrollStore';
	import ScrollAdvice from './ScrollAdvice.svelte';
	import HeroContent from './HeroContent.svelte';

	let mounted = false;
	let isInView = true; //  Variable para controlar si ya se ha visto

	onMount(() => {
        setTimeout(() => {
			mounted = true;
		}, 100); // Retraso para asegurar que las animaciones se disparen correctamente
		});

	// Acción para detectar si el elemento está en el viewport
	function viewport(node: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Actualiza la variable con el estado actual de intersección
				isInView = entry.isIntersecting;
			});
		});

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

<div class="bg-base-100 relative overflow-hidden w-full min-h-[100vh]">
	<SvgBackground />
	<div class="mx-auto grid place-items-center relative h-screen text-start">
		<div class="space-y-6 z-10" use:viewport>
			{#if isInView || mounted}
				<HeroContent {isInView} {mounted} />
			{/if}
		</div>
	</div>
	{#if $isAtTop}
		<ScrollAdvice />
	{/if}
</div>

<style>
	/* Asegurar que el contenedor tenga altura completa */
	:global(.tech-icons-container) {
		height: 100vh !important;
		width: 100% !important;
		position: absolute !important;
		top: 0 !important;
		left: 0 !important;
	}
</style>
