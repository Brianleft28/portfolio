<script lang="ts">
	import { theme, lightThemes, darkThemes } from '$lib/stores/themeStore';
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';
	import controllerLabels from './data/controllerLabels.json';

	const labels = controllerLabels.controllerLabels;

	let currentTheme = 'abyss';
	let lightThemesList: string[] = [];
	let darkThemesList: string[] = [];

	$: currentTheme = $theme;

	$: {
		lightThemes.subscribe((themes) => (lightThemesList = themes));
		darkThemes.subscribe((themes) => (darkThemesList = themes));
	}

	function setTheme(newTheme: string) {
		currentTheme = newTheme;
		document.documentElement.setAttribute('data-theme', newTheme);
		if (browser) {
			localStorage.setItem('theme', newTheme);
		}
		theme.set(newTheme);
	}
</script>

<!-- El botón ahora es un <button> que activa el modal -->
<button
	type="button"
	class="btn btn-lg btn-ghost gap-2 px-3 text-base w-full justify-start"
	aria-label={labels.themeController[$lang]
		? labels.themeController[$lang].ariaLabel
		: labels.themeController['ES'].ariaLabel}
	title={labels.themeController[$lang]
		? labels.themeController[$lang].title
		: labels.themeController['ES'].title}
	on:click={() => {
		const modalCheckbox = document.getElementById('theme_mobile_modal') as HTMLInputElement;
		if (modalCheckbox) modalCheckbox.checked = true;
	}}
>
	<div class="bg-base-100 grid shrink-0 grid-cols-2 gap-1 rounded-md p-2 transition-colors">
		<div class="bg-base-content size-2 rounded-full"></div>
		<div class="bg-primary size-2 rounded-full"></div>
		<div class="bg-secondary size-2 rounded-full"></div>
		<div class="bg-accent size-2 rounded-full"></div>
	</div>
	<span
		>{labels.themeController[$lang]
			? labels.themeController[$lang].title
			: labels.themeController['ES'].title}</span
	>
</button>

<!-- Estructura del Modal -->
<input type="checkbox" id="theme_mobile_modal" class="modal-toggle" />
<div class="modal" role="dialog">
	<div
		class="modal-box max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-base-content scrollbar-track-base-100"
	>
		<!-- Contenido adaptado para el modal -->
		<div class="flex flex-col gap-4">
			<!-- Temas claros -->
			<div class="flex flex-col items-center">
				<h3 class="text-lg font-bold mx-auto mb-2 text-center">
					{labels.themeController[$lang]
						? labels.themeController[$lang].lightThemesTitle
						: labels.themeController['ES'].lightThemesTitle}
				</h3>
				<ul class="grid grid-cols-2 gap-3 w-full">
					{#each lightThemesList as theme}
						<li>
							<button
								class="btn btn-sm btn-ghost hover:bg-base-100/20 w-full"
								on:click={() => setTheme(theme)}
							>
								<span class="font-[sans-serif] text-base-content">{theme}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<div class="divider"></div>

			<!-- Temas oscuros -->
			<div class="flex flex-col items-center">
				<h3 class="text-lg font-bold mx-auto mb-2 text-center">
					{labels.themeController[$lang]
						? labels.themeController[$lang].darkThemesTitle
						: labels.themeController['ES'].darkThemesTitle}
				</h3>
				<ul class="grid grid-cols-2 gap-3 w-full">
					{#each darkThemesList as theme}
						<li>
							<button
								class="btn btn-sm btn-ghost hover:bg-base-100/20 w-full"
								on:click={() => setTheme(theme)}
							>
								<span class="font-[sans-serif] text-base-content">{theme}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Botón para cerrar el modal -->
		<div class="modal-action mt-6">
			<label for="theme_mobile_modal" class="btn btn-error"
				>{labels.themeController[$lang]
					? labels.themeController[$lang].modalClose
					: labels.themeController['ES'].modalClose}</label
			>
		</div>
	</div>
	<!-- Permite cerrar el modal al hacer clic fuera -->
	<label class="modal-backdrop" for="theme_mobile_modal"
		>{labels.themeController[$lang]
			? labels.themeController[$lang].modalClose
			: labels.themeController['ES'].modalClose}</label
	>
</div>
