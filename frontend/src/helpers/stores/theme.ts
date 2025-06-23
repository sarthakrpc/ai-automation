import { writable } from 'svelte/store';

const defaultTheme = localStorage.getItem('theme') || 'light';
export const theme = writable(defaultTheme);

theme.subscribe((value) => {
	document.documentElement.classList.toggle('dark', value === 'dark');

	if (document.documentElement.getAttribute('data-theme') !== value) {
		document.documentElement.setAttribute('data-theme', value);
	}

	localStorage.setItem('theme', value);
});
