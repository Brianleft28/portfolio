// store para el scroll
import { writable } from 'svelte/store';
export const isScrolling = writable(false);
export const isAtTop = writable(true);
