<script lang="ts">
	import { lang, type Lang } from '$lib/stores/index';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import controllerLabels from '../data/controllerLabels.json';

	const labels = controllerLabels.controllerLabels;

	let currentLang: Lang = 'ES'; // Idioma predeterminado

	$: currentLang = $lang;

	function setLang(newLang: Lang) {
		currentLang = newLang;
		if (browser) {
			localStorage.setItem('lang', newLang);
		}
		lang.set(newLang);
	}

	onMount(() => {
		if (browser) {
			const savedLang = localStorage.getItem('lang');
			if (savedLang) {
				currentLang = savedLang as Lang;
				lang.set(currentLang);
			}
		}
	});
</script>

<!-- El botón ahora es un <button> que activa el modal -->
<button
	type="button"
	class="btn btn-lg btn-ghost gap-2 px-3 text-base w-full justify-start"
	aria-label={labels.langController[$lang]
		? labels.langController[$lang].ariaLabel
		: labels.langController['ES'].ariaLabel}
	title={labels.langController[$lang]
		? labels.langController[$lang].title
		: labels.langController['ES'].title}
	on:click={() => {
		const modalCheckbox = document.getElementById('lang_mobile_modal') as HTMLInputElement;
		if (modalCheckbox) modalCheckbox.checked = true;
	}}
>
	<svg class="text-base-content size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-width="1"
			fill="none"
			stroke="currentColor"
			d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
		/>
	</svg>
	<span
		>{labels.langController[$lang]
			? labels.langController[$lang].title
			: labels.langController['ES'].title}</span
	>
</button>

<!-- Estructura del Modal -->
<input type="checkbox" id="lang_mobile_modal" class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box">
		<h3 class="font-bold text-lg mb-4 text-center">
			{labels.langController[$lang]
				? labels.langController[$lang].modalTitle
				: labels.langController['ES'].modalTitle}
		</h3>

		<ul class="menu flex flex-col w-full justify-evenly items-start gap-1">
			{#each ['ES', 'EN', 'FR', 'DE', 'JP'] as langOption}
				<li class="w-full">
					<button
						class="grid grid-cols-2 gap-y-2 py-2 items-center w-full text-left hover:bg-base-100/20 rounded-lg"
						on:click={() => setLang(langOption as Lang)}
					>
						<span
							class="pe-1 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40 text-center"
						>
							{langOption.toUpperCase()}
						</span>
						<span class="font-[sans-serif] text-base-content">
							{langOption === 'ES'
								? 'Español'
								: langOption === 'EN'
									? 'English'
									: langOption === 'FR'
										? 'Français'
										: langOption === 'DE'
											? 'Deutsch'
											: '日本語'}
						</span>
					</button>
				</li>
			{/each}
		</ul>

		<!-- Botón para cerrar el modal -->
		<div class="modal-action mt-6">
			<label for="lang_mobile_modal" class="btn btn-error"
				>{labels.langController[$lang]
					? labels.langController[$lang].modalClose
					: labels.langController['ES'].modalClose}</label
			>
		</div>
	</div>
	<!-- Permite cerrar el modal al hacer clic fuera -->
	<label class="modal-backdrop" for="lang_mobile_modal"
		>{labels.langController[$lang]
			? labels.langController[$lang].modalClose
			: labels.langController['ES'].modalClose}</label
	>
</div>
