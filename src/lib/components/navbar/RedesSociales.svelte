<script lang="ts">
	import { lang } from '$lib/stores';
	import socialLinksData from './socialLinks.json';
	const socialLinks = socialLinksData.socialLinks;
</script>

<div class="flex items-center gap-x-8">
	{#each socialLinks as link}
		{#if link.ariaLabel[$lang]}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={link.ariaLabel[$lang] ? link.ariaLabel[$lang] : link.ariaLabel['ES']}
				class="flex items-center gap-2 text-base-content transition-colors duration-200 hover:text-primary"
			>
				<!-- Icono (SVG) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-6 w-6"
				>
					<path d={link.iconPath} />
				</svg>
			</a>
		{/if}
	{/each}
</div>
