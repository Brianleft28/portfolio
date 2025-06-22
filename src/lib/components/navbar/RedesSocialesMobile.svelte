<script lang="ts">
	// Importamos el store de idioma para que el componente sea reactivo
	import { lang } from '$lib/stores';
	import socialLInk from './data/socialLinks.json';

	const socialLinks = socialLInk.socialLinks;
</script>

<!-- Este contenedor crea una lista vertical que ocupa todo el ancho -->
<div class="flex w-full flex-col items-start justify-center gap-y-1">
	{#each socialLinks as link}
		<a
			href={link.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={link.ariaLabel[$lang]}
			class="flex w-full items-center gap-x-4 rounded-lg px-3 py-2 text-base-content transition-colors duration-200 hover:bg-base-300 hover:text-primary"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path d={link.iconPath} />
			</svg>
			<span>{link.label}</span>
		</a>
	{/each}
</div>
