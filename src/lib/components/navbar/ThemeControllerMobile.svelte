<script lang="ts">
	import { theme, lightThemes, darkThemes } from '$lib/stores/themeStore';
	import { browser } from '$app/environment';

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
		// Opcional: Cierra el modal programáticamente si es necesario, aunque el label lo hará.
		// const modalCheckbox = document.getElementById('theme_mobile_modal') as HTMLInputElement;
		// if (modalCheckbox) modalCheckbox.checked = false;
	}
</script>

<!-- El botón ahora es un <label> que activa el modal -->
<button
	type="button"
	class="btn btn-lg btn-ghost gap-2 px-3 text-base w-full justify-start"
	aria-label="Change Theme"
	title="Change Theme"
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
	<span>Cambiar Tema</span>
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
				<h3 class="text-lg font-bold mx-auto mb-2 text-center">Temas claros</h3>
				<!-- Usamos grid-cols-2 para mejor visualización en móviles -->
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
				<h3 class="text-lg font-bold mx-auto mb-2 text-center">Temas oscuros</h3>
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
			<label for="theme_mobile_modal" class="btn btn-error">Cerrar</label>
		</div>
	</div>
	<!-- Permite cerrar el modal al hacer clic fuera -->
	<label class="modal-backdrop" for="theme_mobile_modal">Cerrar</label>
</div>
