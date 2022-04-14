<script>
	import {tabStatus, TABS} from '$lib/store/authStore'
	
</script>

<div id="containerAuth" class="min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
	<!-- TABS -->
	<nav class="relative z-0 flex justify-evenly " aria-label="Tabs">
		{#each Object.keys(TABS) as tab}
			<div
				class={`${
					tabStatus === TABS[tab] ? 'text-gray-900 shadow-lg' : 'text-gray-500 hover:text-gray-700 shadow-sm'
				} text-gray-900 b" rounded-lg group relative min-w-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 cursor-pointer `}
				on:click={() => ($tabStatus = TABS[tab])}
			>
				<span>{TABS[tab].title}</span>
				<span
					aria-hidden="true"
					class={`${
						$tabStatus === TABS[tab] ? 'bg-indigo-500' : 'bg-transparent'
					} absolute inset-x-0 bottom-0 h-0.5`}
				/>
			</div>
		{/each}
	</nav>

	<!-- Header -->
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			{$tabStatus.header}
		</h2>
	</div>

	<!-- FORM -->
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="/" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>

				{#if $tabStatus.showActions}
					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label for="remember-me" class="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<div class="text-sm">
							<a href="/" class="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div>
					</div>
				{/if}

				<div>
					<button
						type="submit"
						class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>{$tabStatus.title}</button
					>
				</div>
			</form>

			<div class="mt-6">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-300" />
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="px-2 bg-white text-gray-500"> Or continue with </span>
					</div>
				</div>

				<div class="mt-6 grid justify-center gap-3">
					<div>
						<a
							href="/"
							class="w-full inline-flex justify-center py-2 px-10 border border-gray-300 shadow-xl rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
						>
							<span class="sr-only">Sign in with Google</span>

							<img class="w-7 h-7" src="google.svg" alt="Google Icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
