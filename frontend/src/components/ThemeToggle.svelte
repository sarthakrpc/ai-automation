<script>
	import { get } from 'svelte/store';
	import { theme } from '../helpers/stores/theme';
	import { Lightbulb, LightbulbOff, MoonStar, Sun, SunDim, SunMoon } from '@lucide/svelte';

	export let className = ''; // <- receive class from parent

	function toggleTheme() {
		const current = get(theme);
		theme.set(current === 'dark' ? 'light' : 'dark');
	}
</script>

<button on:click={toggleTheme} class={`cursor-pointer ${className}`} type="button">
	{#if $theme === 'dark'}
		<Sun />
	{:else}
		<MoonStar />
	{/if}
</button>
