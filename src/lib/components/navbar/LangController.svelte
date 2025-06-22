<script lang="ts">
	import { lang, type Lang } from '$lib/stores/index';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

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

<div class="dropdown">
	<div
		tabindex="0"
		role="button"
		class="btn btn-lg btn-ghost gap-2 px-3 text-base font-bold"
		aria-label="Change Language"
		title="Change Language"
	>
		<svg
			class="text-base-content size-8"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linejoin="round"
				stroke-linecap="round"
				stroke-width="1"
				fill="none"
				stroke="currentColor"
				d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
			/>
		</svg>
		<svg
			width="40px"
			height="40px"
			class="mt-px hidden size-3 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
	</div>
	<div
		class="dropdown-content bg-base-200 rounded-box w-72 p-4 shadow-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-base-content scrollbar-track-base-100"
	>
		<ul class="menu flex flex-col w-full justify-evenly items-start">
			{#each ['ES', 'EN', 'FR', 'DE', 'JP'] as langOption}
				<li class="py-1 cursor-pointer w-full">
					<button
						class="grid grid-cols-2 gap-y-2 py-1 items-center w-full text-center hover:bg-base-100/20"
						on:click={() => setLang(langOption as Lang)}
					>
						<span
							class="pe-1 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40"
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
	</div>
</div>
