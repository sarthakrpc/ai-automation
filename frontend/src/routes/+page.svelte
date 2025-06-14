<script lang="ts">
	import { OpenBrowser } from '../lib/wailsjs/go/main/App';

	function openLink() {
		OpenBrowser('https://example.com');
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button class="btn" onclick={openLink}>Click</button>