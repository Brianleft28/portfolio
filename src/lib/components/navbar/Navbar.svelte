<script lang="ts">
	import ThemeController from '$lib/components/navbar/ThemeController.svelte';
	import LangController from '$lib/components/navbar/LangController.svelte';
	import RedesSociales from '$lib/components/navbar/RedesSociales.svelte';
	import Logo from '$lib/components/navbar/Logo.svelte';
	import menuItems from '$lib/components/navbar/menuItems.json';
	import { lang, showNavbar } from '$lib/stores/index';
	import { page } from '$app/stores'; // Asegúrate que la importación sea correcta para tu versión
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const items = Object.values(menuItems.menuItems);

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', () => {
				const threshold = document.body.scrollHeight * 0.08;
				showNavbar.set(window.scrollY < threshold);
			});
		}
	});
</script>

<!--
  Contenedor principal del Drawer.
  Este componente drawer usualmente se coloca en tu archivo de layout principal (ej. +layout.svelte)
  para que el drawer-side pueda superponerse a todo el contenido de la página.
  Si se coloca aquí, el drawer-content y drawer-side estarán limitados al scope de este componente Navbar.
  Para este ejemplo, lo mantenemos aquí para mostrar la integración directa.
  `drawer-end` hace que se abra desde la derecha.
-->
<div class="drawer drawer-end">
	<input id="mobile-drawer" type="checkbox" class="drawer-toggle" />

	<!-- Contenido de la página (incluyendo la navbar que tiene el botón para abrir el drawer) -->
	<div class="drawer-content flex flex-col">
		<navbar
			class="navbar font-[sans-serif] px-4 md:px-10 py-4 fixed top-0 bg-base-100/80 backdrop-blur-xs shadow-sm transition-transform duration-300 ease-in-out z-40"
			class:translate-y-0={$showNavbar}
			class:-translate-y-full={!$showNavbar}
		>
			<div class="navbar-start hidden lg:flex items-center gap-4">
				<!-- Menú para pantallas grandes -->
				<ul class="menu menu-horizontal font-[sans-serif] px-1 text-md">
					{#each items as item}
						{#if item[$lang] || item['ES']}
							<li>
								<a
									href={item[$lang] ? item[$lang].url : item['ES'].url}
									class="text-base-content hover:text-primary transition-colors duration-200 hover:bg-transparent"
									aria-label={item[$lang] ? item[$lang].title : item['ES'].title}
									class:text-primary={$page?.url.pathname ===
										(item[$lang] ? item[$lang].url : item['ES'].url)}
									class:font-bold={$page?.url.pathname ===
										(item[$lang] ? item[$lang].url : item['ES'].url)}
								>
									{item[$lang] ? item[$lang].title : item['ES'].title}
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
			<div class="navbar-center lg:flex hidden">
				<Logo />
			</div>
			<div class="navbar-end lg:flex hidden items-center gap-4">
				<div class="dropdown dropdown-end">
					<ThemeController />
				</div>
				<div class="dropdown dropdown-end">
					<LangController />
				</div>
				<RedesSociales />
			</div>
			<div class="navbar-start lg:hidden flex">
				<!-- Logo para pantallas pequeñas -->
				<Logo />
			</div>

			<!-- Botón para abrir el drawer en móviles -->
			<div class="navbar-end lg:hidden flex">
				<label
					for="mobile-drawer"
					class="btn btn-ghost btn-circle drawer-button"
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
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
		</navbar>

		<!--
            Si este componente Navbar fuera parte de un +layout.svelte,
            aquí es donde iría el <slot /> para el contenido de la página.
            Como es un componente Navbar independiente, este div es un placeholder
            para simular el espacio que ocuparía el contenido debajo de la navbar fija.
        -->
		<div class="pt-[calc(var(--navbar-height,80px)+1rem)]">
			<!-- El contenido principal de tu aplicación se renderizaría aquí si esto fuera un layout -->
		</div>
	</div>

	<!-- Contenido del Drawer (el menú lateral) -->
	<div class="drawer-side z-50">
		<!-- z-50 para que esté sobre la navbar fija -->
		<label for="mobile-drawer" aria-label="Cerrar menú" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Logo dentro del drawer (opcional) -->
			<li class="mb-4 mt-4">
				<!-- Añadido mt-4 para un poco de espacio superior -->
				<div class="mx-auto flex justify-center">
					<!-- Centrado del logo -->
					<Logo />
				</div>
			</li>
			{#each items as item}
				{#if item[$lang] || item['ES']}
					<li>
						<!-- Label para cerrar el drawer al hacer clic en un ítem del menú -->
						<label for="mobile-drawer" class="block">
							<!-- Ajuste de padding para mejor click target -->
							<a
								href={item[$lang] ? item[$lang].url : item['ES'].url}
								class="text-base-content hover:text-primary transition-colors duration-200 block w-full py-2 px-3"
								aria-label={item[$lang] ? item[$lang].title : item['ES'].title}
								class:text-primary={$page.url.pathname ===
									(item[$lang] ? item[$lang].url : item['ES'].url)}
								class:font-bold={$page.url.pathname ===
									(item[$lang] ? item[$lang].url : item['ES'].url)}
							>
								{item[$lang] ? item[$lang].title : item['ES'].title}
							</a>
						</label>
					</li>
				{/if}
			{/each}
			<!-- Controles de Tema e Idioma en el drawer -->
			<li class="mt-auto pt-4">
				<!-- Empuja al final y añade espacio -->
				<div class="flex justify-around items-center gap-2">
					<ThemeController />
					<LangController />
				</div>
			</li>
			<li class="mt-2 pb-4">
				<!-- Espacio inferior -->
				<RedesSociales />
			</li>
		</ul>
	</div>
</div>
