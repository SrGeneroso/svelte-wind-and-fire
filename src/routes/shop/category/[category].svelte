<script context="module">
	import { products } from '$lib/temp/db.js';
	export function load({ params }) {
		const slug = params.category;
		const items = products.filter((e) => e.category.toLowerCase().trim() === slug);
		return {
			props: { items }
		};
	}
</script>

<script>
	export let items;
</script>

<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
			{#each items as item}
				<a href={"/shop/category/item/"+ item.reference} class="group text-sm">
					<div
						class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75"
					>
						<img
							src={'/img/products/' + item.imageSrc[0]}
							alt="White fabric pouch with white zipper, black zipper pull, and black elastic loop."
							class="w-full h-full object-center object-cover"
						/>
					</div>
					<h3 class="mt-4 font-medium text-gray-900">{item.id}</h3>
					<p class="text-gray-500 italic">{item.description}</p>
					<p class="mt-2 font-medium text-gray-900">{item.price} €</p>
				</a>
			{/each}
		</div>
	</div>
</div>
