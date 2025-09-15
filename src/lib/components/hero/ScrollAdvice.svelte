<script>
	import { fade } from 'svelte/transition';
	import { lang } from '$lib/stores';

	import heroData from './data/hero.json';
	const content = heroData.heroContent;
</script>

<div
	class="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
	transition:fade={{ duration: 300 }}
>
	<span class="text-base text-center text-secondary/80 font-medium tracking-wide animate-pulse">
		{content[$lang] ? content[$lang].indicator : content['ES'].indicator}
	</span>
	<svg
		class="size-6 animate-bounce mt-2 text-secondary/80"
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
