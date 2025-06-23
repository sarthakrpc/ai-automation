<script lang="ts">
	import { AlertTriangle, Eye, EyeOff, Key, Mail } from '@lucide/svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	// import { OpenBrowser } from '../lib/wailsjs/go/main/App';

	// function openLink() {
	// 	OpenBrowser('https://example.com');
	// }

	let formData = $state({
		email: '',
		password: ''
	});

	let showPassword = $state(false);

	async function login(event: SubmitEvent) {
		event.preventDefault();
		console.log($state.snapshot(formData)); // logs the actual values
	}

	function togglePassword() {
		showPassword = !showPassword;
	}
</script>

<form
	onsubmit={login}
	class="fieldset bg-base-200 border-base-300 rounded-box w-xs relative border p-4"
>
	<ThemeToggle className="absolute right-2 top-2" />
	<div class="text-center text-lg font-bold">Login</div>

	<label class="label" for="email" aria-required="true">Email</label>
	<div class="input">
		<Mail class="h-5 w-5" />
		<input
			oninput={(event) => {
				const target = event.target as HTMLInputElement | null;
				if (target) {
					formData.email = target.value;
				}
			}}
			value={formData.email}
			id="email"
			type="email"
			class="input"
			placeholder="example@email.com"
			autocomplete="off"
			required
		/>
	</div>
	<p class="label text-error"><AlertTriangle class="h-4 w-4" />Error</p>

	<label class="label" for="password">Password</label>
	<div class="input">
		<Key class="h-5 w-5" />
		<input
			oninput={(event) => {
				const target = event.target as HTMLInputElement | null;
				if (target) {
					formData.password = target.value;
				}
			}}
			value={formData.password}
			id="password"
			type={showPassword ? 'text' : 'password'}
			class="input"
			placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
			required
		/>
		<button onclick={togglePassword} class="cursor-pointer" type="button">
			{#if showPassword}
				<EyeOff class="w-4" />
			{:else}
				<Eye class="w-4" />
			{/if}
		</button>
	</div>
	<p class="label text-error"><AlertTriangle class="h-4 w-4" />Error</p>

	<button class="btn btn-neutral mt-2">Login</button>
</form>
