<script lang="ts">
	// Imports de componentes (sin cambios)
	import ThemeController from '$lib/components/navbar/ThemeController.svelte';
	import LangController from '$lib/components/navbar/LangController.svelte';
	import Logo from '$lib/components/navbar/Logo.svelte';
	import RedesSociales from '$lib/components/navbar/RedesSociales.svelte';
	import ThemeControllerMobile from './ThemeControllerMobile.svelte';
	import LangControllerMobile from './LangControllerMobile.svelte';

	// Stores y datos (sin cambios)
	import { lang, showNavbar } from '$lib/stores/index';
	import { page } from '$app/stores';
	import menuItemsData from '$lib/components/navbar/data/menuItems.json';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition'; // Importamos la transición de Svelte
	import RedesSocialesMobile from './RedesSocialesMobile.svelte';

	const items = menuItemsData.menuItems;

	// La única lógica que necesitamos: una variable para saber si el drawer está abierto.
	let isDrawerOpen = false;
	// --- OPTIMIZACIÓN DE SCROLL CON DEBOUNCE ---

	/**
	 * Función Debounce: Retrasa la ejecución de una función hasta que haya pasado
	 * un tiempo (delay) sin que se la llame. Esto evita ejecuciones excesivas.
	 */
	function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
		let timeout: ReturnType<typeof setTimeout>;
		return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(this, args), delay);
		};
	}

	// La lógica del scroll, ahora en su propia función.
	const handleScroll = () => {
		const threshold = document.body.scrollHeight * 0.08;
		showNavbar.set(window.scrollY < threshold);
	};

	// Creamos una versión "debounced" de nuestra función.
	// Solo se ejecutará 100ms después de que el usuario deje de hacer scroll.
	const debouncedScrollHandler = debounce(handleScroll, 100);

	onMount(() => {
		if (browser) {
			// Usamos el listener optimizado.
			window.addEventListener('scroll', debouncedScrollHandler);
		}
	});

	// Es CRUCIAL eliminar el listener cuando el componente se destruye para evitar fugas de memoria.
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', debouncedScrollHandler);
		}
	});
</script>

<!-- Navbar  -->
<navbar
	class="navbar font-[sans-serif] px-4 md:px-10 py-4 fixed top-0 bg-base-100/80 backdrop-blur-xs shadow-sm transition-transform duration-300 ease-in-out z-40"
	class:translate-y-0={$showNavbar}
	class:-translate-y-full={!$showNavbar}
>
	<!-- Menú Desktop -->
	<div class="navbar-start hidden lg:flex items-center gap-4">
		<ul class="menu menu-horizontal font-[sans-serif] px-1 text-md">
			{#each items as item}
				{#if item[$lang] || item['ES']}
					<li>
						<a
							href={item[$lang] ? item[$lang].url : item['ES'].url}
							class="text-base-content hover:text-primary transition-colors duration-200 hover:bg-transparent"
							aria-label={item[$lang] ? item[$lang].title : item['ES'].title}
							class:text-primary={$page.url.pathname ===
								(item[$lang] ? item[$lang].url : item['ES'].url)}
							class:font-bold={$page.url.pathname ===
								(item[$lang] ? item[$lang].url : item['ES'].url)}
						>
							{item[$lang] ? item[$lang].title : item['ES'].title}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div class="navbar-center lg:flex hidden"><Logo /></div>
	<!--  Controles y redes sociales Desktop -->
	<div class="navbar-end lg:flex hidden items-center gap-4">
		<RedesSociales />
		<div class="divider divider-horizontal"></div>
		<div class="dropdown dropdown-end"><ThemeController /></div>
		<div class="dropdown dropdown-end"><LangController /></div>
	</div>

	<!-- Logo Móvil -->
	<div class="navbar-start lg:hidden flex"><Logo /></div>

	<!-- Botón para abrir nuestro drawer personalizado -->
	<div class="navbar-end lg:hidden flex">
		<button
			on:click={() => (isDrawerOpen = true)}
			class="btn btn-ghost btn-circle"
			aria-label="Abrir menú"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</navbar>

<!-- NUESTRO DRAWER PERSONALIZADO -->
{#if isDrawerOpen}
	<!-- 1. El overlay oscuro que cubre la página -->
	<button
		type="button"
		class="custom-drawer-overlay"
		aria-label="Cerrar menú"
		on:click={() => (isDrawerOpen = false)}
		transition:fly={{ duration: 300, y: 0, opacity: 1 }}
		tabindex="0"
	></button>

	<!-- 2. El panel del menú que se desliza -->
	<aside class="custom-drawer-panel" transition:fly={{ duration: 300, x: -320 }}>
		<!-- Reutilizamos las clases de DaisyUI para el menú para mantener el estilo -->
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col">
			<!-- Items del menú -->
			<div class="flex-grow">
				{#each items as item}
					{#if item[$lang] || item['ES']}
						<li>
							<!-- Al hacer clic en un enlace, también cerramos el drawer -->
							<a
								href={item[$lang] ? item[$lang].url : item['ES'].url}
								on:click={() => (isDrawerOpen = false)}
								class="text-base-content hover:text-primary transition-colors duration-200 block w-full py-3 px-3"
								aria-label={item[$lang] ? item[$lang].title : item['ES'].title}
								class:text-primary={$page.url.pathname ===
									(item[$lang] ? item[$lang].url : item['ES'].url)}
								class:font-bold={$page.url.pathname ===
									(item[$lang] ? item[$lang].url : item['ES'].url)}
							>
								{item[$lang] ? item[$lang].title : item['ES'].title}
							</a>
						</li>
					{/if}
				{/each}
			</div>

			<!-- Controles y redes -->
			<div class="mt-auto pt-4 flex flex-col justify-around items-center gap-2">
				<RedesSocialesMobile />
				<ThemeControllerMobile />
				<LangControllerMobile />
			</div>
		</ul>
	</aside>
{/if}

<style>
	.custom-drawer-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 49; /* Justo debajo del panel */
	}

	.custom-drawer-panel {
		position: fixed;
		top: 0;
		left: 0; /* Se pega a la izquierda */
		bottom: 0;
		width: 80%; /* Ocupa el 80% del ancho */
		max-width: 320px; /* Pero no más de 320px */
		z-index: 50; /* Por encima de todo */
	}
</style>
