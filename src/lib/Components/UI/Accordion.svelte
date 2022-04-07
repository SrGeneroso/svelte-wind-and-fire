<script>
import { slide } from "svelte/transition"

export let show = false

</script>

<!-- Additional Details -->
<section aria-labelledby="details-heading" class="mt-12">
	<h2 id="details-heading" class="sr-only">Additional details</h2>

	<div class="border-t divide-y divide-gray-200">
		<div>
			<h3>
				<!-- Expand/collapse question button -->
				<button
					type="button"
					class="group relative w-full py-6 flex justify-between items-center text-left outline-none"
					aria-controls="disclosure-1"
					aria-expanded="false"
					on:click={() => (show = !show)}
				>
					<span class={`${show ? 'text-gray-900' : 'text-indigo-600'} text-sm font-medium`}>
						Cuidado de la madera
					</span>
					<span class="ml-6 flex items-center">
						<svg
							class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden={show}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={show ? 'M18 12H6': 'M12 6v6m0 0v6m0-6h6m-6 0H6'}
							/>
						</svg>
					</span>
				</button>
			</h3>
			{#if show}
				<div class="pb-6 prose prose-sm" id="disclosure-1" transition:slide >
					<h3>Jabonera de madera de pino.</h3>
					<ul>
						<li>
							La madera es un material poroso que permite que el producto cosmético respire y se
							seque, permitiendo así alargar su vida útil al mantenerlo en perfecto estado, sin
							deformaciones ni ablandamientos.
						</li>

						<li>
							Las jaboneras no necesitan cuidados especiales porque se curan con el uso ya que la
							cosmética natural va depositando restos de aceites que ayudan a cuidar la madera.
						</li>

						<li>No obstante , si se desea, pueden tratarse con unos sencillos pasos:</li>
					</ul>
					<ol class="pl-5">
						<li>Limpiar con agua y jabón. Dejar secar.</li>

						<li>Impregnar con cualquier aceite u oleato.</li>

						<li>
							Puede añadirse unas gotas de aceite esencial para aumentar las características
							fungicidas y antibacterianas del aceite elegido.
						</li>
					</ol>
				</div>
			{/if}
		</div>
	</div>
</section>
