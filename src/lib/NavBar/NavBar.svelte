<script>
	import { fly , slide } from 'svelte/transition';

	//ENUM bloqueado https://youtu.be/nPrHbLsqb54
	export const MENU_STATE = Object.freeze({
		NONE: 'none',
		PROFILE: ' Profile',
		MENU: 'Menu'
	});

	export var menuState = MENU_STATE.NONE;

	export const mainMenuItems = [
		{ ref: '/', label: 'Tienda' },
		{ ref: '/', label: 'Blog' },
        { ref: '/', label: 'Contacto' },
	];

	export const profileMenuItems = [
		{ ref: '/', label: 'Perfil' },
		{ ref: '/', label: 'Opciones' },
		{ ref: '/', label: 'SignOut' }
	];
</script>

<!-- Navigation Component -->
<nav class="white shadow">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<!-- Full Width Bar -->
		<div class="relative flex justify-between h-16">
			<!-- Menu button -->
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					type="button"
					on:click={() =>
						menuState === MENU_STATE.MENU
							? (menuState = MENU_STATE.NONE)
							: (menuState = MENU_STATE.MENU)}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded={menuState === MENU_STATE.MENU ? true : false}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d={menuState === MENU_STATE.MENU ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
						/>
					</svg>
				</button>
			</div>
			<!-- END Menu button -->

			<!-- Menu FullView -->
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<!-- Logo -->
				<div class="flex-shrink-0 flex items-center">
					<img class="block h-8 w-auto" src="avra.svg" alt="Workflow" />
				</div>
				<!-- END Logo -->

				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					<!-- TODO - Get current session and assign as current with above instructions -->
					{#each mainMenuItems as menuItem}
						<a
							href={menuItem.ref}
							class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
						>
							{menuItem.label}
						</a>
					{/each}
				</div>
			</div>
			<!-- END Menu FullView -->

			<!-- Profile Area -->
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<div class="ml-3 relative">
					<!-- Profile Icon-->
					<div>
						<button
							id="user-menu-button"
							type="button"
							on:click={() =>
								menuState === MENU_STATE.PROFILE
									? (menuState = MENU_STATE.NONE)
									: (menuState = MENU_STATE.PROFILE)}
							class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							aria-expanded={menuState === MENU_STATE.PROFILE ? true : false}
							aria-haspopup="true"
						>
							<span class="sr-only">Open user menu</span>
							<img class="h-8 w-8 rounded-full" src="defaultUser.svg" alt="User" />
						</button>
					</div>
					<!-- END Profile Icon-->

					<!-- Profile Menu-->
					{#if menuState === MENU_STATE.PROFILE}
						<div
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
							transition:fly={{ x: 300, duration: 500 }}
						>
							{#each profileMenuItems as menuItem, index}
								<a
									id="user-menu-item-{index}"
									role="menuitem"
									href={menuItem.ref}
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									tabindex="-1"
								>
									{menuItem.label}
								</a>
							{/each}
						</div>
					{/if}
					<!-- END Profile Menu--><!-- content here -->
				</div>
			</div>
			<!-- END Profile Area -->
		</div>
		<!-- END Full Width Bar -->
	</div>

	<!-- Mobile menu -->
	{#if menuState === MENU_STATE.MENU}
		<!-- content here -->
		<div class="sm:hidden" id="mobile-menu">
			<div class="pt-2 pb-4 space-y-1">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
				<!-- TODO - Get current session and assign as current with above instructions -->
				{#each mainMenuItems as menuItem, index}
					<a
						href={menuItem.ref}
						class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        transition:slide|local}
					>
						{menuItem.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
	<!-- END Mobile menu -->
</nav>
<!-- END Navigation Component -->
