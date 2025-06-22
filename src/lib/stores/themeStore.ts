import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const lightThemes: Writable<string[]> = writable([
	'light',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'garden',
	'lofi',
	'lemonade',
	'valentine',
	'winter',
	'retro',
	'cyberpunk'
]);

export const darkThemes: Writable<string[]> = writable([
	'dark',
	'synthwave',
	'halloween',
	'forest',
	'black',
	'luxury',
	'dracula',
	'night',
	'coffee',
	'abyss',
	'dim',
	'aqua'
]);

export const theme = writable('abyss'); // Tema predeterminado
