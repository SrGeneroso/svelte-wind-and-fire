<script context="module">
	import { products } from '$lib/db.js'
	export  function load({ params }) {
    const slug = params.item
	const item = products.filter((e) => e.reference === slug)[0]
    return {
      props: { item }
    };
  }
</script>

<script>
	import Carousel from '$lib/Components/UI/Carousel.svelte';
	import Accordion from '$lib/Components/UI/Accordion.svelte';
	export let liked = false;
	export let item
</script>

<svelte:head>
	<title>Articulo {item.reference}- Avra Shop</title>
	<meta name="description" content="Avra Shop Item  - {item.reference}" />
</svelte:head>

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-1 px-4  lg:max-w-7xl lg:px-8">
		<h1 class=" mb-2 text-3xl font-extrabold tracking-tight text-gray-900">{item.id}</h1>
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
			<!-- Image gallery -->
			<Carousel itemImages={item.imageSrc} itemDesc={item.description} />

			<!-- Product info -->
			<div class="mt-4 px-4 sm:px-0 sm:mt-4 lg:mt-0">
				<!-- Product Tags -->
				<div class="tags py-3  flex flex-wrap gap-2 ">
					{#each item.tags as tag}
						<span
							class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize"
							>{tag}</span
						>
					{/each}
				</div>
				<!-- Product Price -->
				<div class="mt-3 ">
					<h2 class="sr-only">Product information</h2>
					<p class="text-3xl text-gray-900 ">Precio unidad: {item.price} €</p>
				</div>

				<!-- Product Description -->
				<div class="mt-6">
					<h3 class="sr-only">Description</h3>
					<div class="text-base text-gray-700 ">
						<p>{item.description}</p>
					</div>
				</div>

				<form class="mt-6">
					<div class="mt-10 flex sm:flex-col1">
						<!-- Shopping -->
						<button
							type="submit"
							class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
							>Añadir a la cesta</button
						>
						<!-- Like -->
						<button
							type="button"
							class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-red-600 {liked
								? 'text-red-500'
								: 'text-gray-400'}"
							on:click={() => (liked = !liked)}
						>
							<!-- Heroicon name: outline/heart -->
							<svg
								class="h-6 w-6 flex-shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
							<span class="sr-only">Add to favorites</span>
						</button>
					</div>
				</form>

				<Accordion />
			</div>
		</div>
	</div>
</div>