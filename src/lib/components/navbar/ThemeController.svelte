<script lang="ts">
	import { theme, lightThemes, darkThemes } from '$lib/stores/themeStore';
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';
	import controllerLabels from '../data/controllerLabels.json';

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

<div class="dropdown">
	<div
		tabindex="0"
		role="button"
		class="btn btn-lg btn-ghost gap-2 px-3 text-base"
		aria-label={labels.themeController[$lang]
			? labels.themeController[$lang].ariaLabel
			: labels.themeController['ES'].ariaLabel}
		title={labels.themeController[$lang]
			? labels.themeController[$lang].title
			: labels.themeController['ES'].title}
	>
		<div class="bg-base-100 grid shrink-0 grid-cols-2 gap-1 rounded-md p-2 transition-colors">
			<div class="bg-base-content size-2 rounded-full"></div>
			<div class="bg-primary size-2 rounded-full"></div>
			<div class="bg-secondary size-2 rounded-full"></div>
			<div class="bg-accent size-2 rounded-full"></div>
		</div>
		<svg
			width="20px"
			height="20px"
			class="mt-px hidden size-3 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
	</div>
	<!-- Contenido del dropdown -->
	<div
		class="dropdown-content bg-base-200 rounded-box w-[40rem] p-4 shadow-lg flex flex-row justify-center"
	>
		<!-- Temas claros -->
		<div class="flex-1 flex flex-col items-center">
			<h3 class="text-lg font-bold mx-auto mb-2 text-center">
				{labels.themeController[$lang]
					? labels.themeController[$lang].lightThemesTitle
					: labels.themeController['ES'].lightThemesTitle}
			</h3>
			<ul class="grid grid-cols-3 gap-3">
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
		<div class="divider divider-horizontal"></div>
		<!-- Temas oscuros -->
		<div class="flex-1 flex flex-col items-center">
			<h3 class="text-lg font-bold mx-auto mb-2 text-center">
				{labels.themeController[$lang]
					? labels.themeController[$lang].darkThemesTitle
					: labels.themeController['ES'].darkThemesTitle}
			</h3>
			<ul class="grid grid-cols-3 gap-3">
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
</div>
