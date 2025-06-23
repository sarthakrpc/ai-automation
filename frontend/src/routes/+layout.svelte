<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen min-h-96 w-full flex-col items-center justify-center gap-3">
	<div>
		{@render children()}
	</div>

	<a href="/main" class="link link-info">Use in Offline Mode</a>
</div>
