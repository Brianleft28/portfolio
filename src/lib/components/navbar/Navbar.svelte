<script lang="ts">
	// Imports de componentes
	import ThemeController from '$lib/components/navbar/ThemeController.svelte';
	import LangController from '$lib/components/navbar/LangController.svelte';
	import Logo from '$lib/components/navbar/Logo.svelte';
	import RedesSociales from '$lib/components/navbar/RedesSociales.svelte';
	import ThemeControllerMobile from './ThemeControllerMobile.svelte';
	import LangControllerMobile from './LangControllerMobile.svelte';
	import RedesSocialesMobile from './RedesSocialesMobile.svelte';

	// Stores y datos
	import { lang } from '$lib/stores/index';
	import { page } from '$app/stores';
	import menuItemsData from '$lib/components/navbar/data/menuItems.json';
	import { fly } from 'svelte/transition';
	import { isAtTop } from '$lib/stores/scrollStore'; // <-- NUEVO: Importamos el nuevo store

	const items = menuItemsData.menuItems;
	let isDrawerOpen = false;
</script>

<!-- Navbar  -->
<navbar
	class="navbar font-[sans-serif] px-4 md:px-10 py-4 fixed top-0 bg-base-100/80 backdrop-blur-xs shadow-sm transition-transform duration-300 ease-in-out z-40"
	class:translate-y-0={!$isAtTop}
	class:-translate-y-full={$isAtTop}
>	
	<!-- Logo Desktop -->
	<div class="navbar-start lg:flex hidden"><Logo /></div>
	<!-- Menú Desktop -->
	<div class="navbar-center hidden lg:flex items-center gap-4">
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

{#if isDrawerOpen}
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
