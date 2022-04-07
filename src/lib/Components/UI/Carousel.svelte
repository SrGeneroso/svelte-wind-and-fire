<script>
	export let itemImages = [];
	export let itemDesc = 'Item image';
	// export let autoSlide = false;
	export let tabSelected = 0;
</script>

<div class="carousel flex flex-col-reverse">
	<!-- Image selector -->
	<div class=" thumbnails mt-6 w-full max-w-2xl mx-auto  lg:max-w-none">
		<div class="flex  justify-evenly gap-1.5 sm:gap-6 " aria-orientation="horizontal" role="tablist">
			{#each itemImages as imgSrc, i}
				<button
					id="tabs-1-tab-{i}"
					class=" relative w-full h-full sm:w-24 h-10 sm:h-24 bg-white rounded-md flex  items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
					aria-controls="tabs-panel"
					role="tab"
					type="button"
					on:click={() => (tabSelected = i)}
				>
					<span class="sr-only"> Product Image </span>
					<span class="absolute inset-0.5 rounded-md overflow-hidden object-cover">
						<img
							src={'/img/products/' + imgSrc}
							alt="Product thumbnail"
							class="w-full h-full object-center object-scale-down"
						/>
					</span>

					<span
						class="absolute inset-0 rounded-md ring-1.5 ring-offset-2 pointer-events-none {tabSelected ===
						i
							? 'ring-indigo-500'
							: 'ring-transparent'}"
						aria-hidden="true"
					/>
				</button>
			{/each}
		</div>
	</div>

	<div class="fullImage w-full aspect-w-1 aspect-h-1">
		<div id="productMainImage" aria-labelledby="tabs-panel" role="tabpanel" tabindex="0">
			<img
				src={'/img/products/' + itemImages[tabSelected]}
				alt={itemDesc}
				class="w-full h-full object-center object-cover rounded-lg"
			/>
		</div>
	</div>
</div>

<style>
</style>
