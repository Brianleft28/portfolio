<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { lang } from '$lib/stores';
	import heroData from './data/hero.json';
	import Typewriter from 'svelte-typewriter'; // Import faltante

	// Props que recibe del componente padre
	export let isInView: boolean;
	export let mounted: boolean;

	const content = heroData.heroContent;

	// Funciones para ritmo aleatorio
	const randomInterval = () => Math.random() * (120 - 50) + 50;
	const randomUnwriteInterval = () => Math.random() * (80 - 30) + 30;

	// Función para la transición personalizada del hr
	function draw(node: HTMLElement, { delay = 0, duration = 400 }) {
		return {
			delay,
			duration,
			css: (t: number) => `transform: scaleX(${quintOut(t)});`
		};
	}
</script>

{#if isInView}
	<h1
		class="text-4xl md:text-6xl text-shadow-secondary text-shadow-2xs font-sans text-primary"
		in:fly={{ y: 20, duration: 500, delay: 100, easing: quintOut }}
		out:fade={{ duration: 50 }}
	>
		{content[$lang] ? content[$lang].title : content['ES'].title}
	</h1>
	<div
		class="md:text-1xl lg:text-2xl text-start font-semibold text-secondary min-h-16"
		in:fly={{ y: 20, duration: 500, delay: 200, easing: quintOut }}
		out:fade={{ duration: 200 }}
	>
		{#if mounted}
			{#key $lang}
				<Typewriter
					mode="loopRandom"
					cursor={true}
					interval={randomInterval()}
					unwriteInterval={randomUnwriteInterval()}
					wordInterval={1800}
					class="typewriter"
				>
					{#each content[$lang] ? content[$lang].typewriter : content['ES'].typewriter as text}
						<span class="text-start w-full text-accent">{text}</span>
					{/each}
				</Typewriter>
			{/key}
		{/if}
	</div>
	<hr
		class="my-6 border-e-secondary border-e-[56px] text-shadow-2xs text-primary w-75 text-start border-t-2 origin-left"
		in:draw={{ duration: 700, delay: 300 }}
		out:fade={{ duration: 200 }}
	/>
{/if}

<style>
	:global(.typewriter-container) {
		--cursor-color: currentColor; /* El cursor hereda el color del texto */
		--cursor-width: 0.12em;
		width: 100%;
		max-width: 26ch;
		text-align: left;
		/* Añadido para asegurar el ajuste de texto */
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
	:global(.typewriter-container .typing::after) {
		margin-left: 0.2em;
	}
	/* Glow animado y gradiente en la palabra activa */
	:global(.typewriter-container .typing) {
		/* Gradiente animado usando currentColor para heredar el color del texto */
		background: linear-gradient(
			90deg,
			currentColor,
			/* Hereda el color del span (text-accent) */ currentColor
		);
		background-size: 200% 200%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient-move 2s linear infinite;

		/* Resplandor sutil usando currentColor */
		font-weight: bold;
		letter-spacing: 0.5px;
		transition: text-shadow 0.3s;
	}

	@keyframes gradient-move {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
</style>
