<script context="module">
	// todo need to add more mesagges and descriptions
    export function resolveErrorMessage(errorMessage) {
		const errorList = {
			404: 'The requested resource could not be found but may be available in the future.',
			500: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable'
		};

		return errorList[errorMessage] ?? 'Error is not recognize';
	}
	export function load({ error, status }) {
		return {
			props: {
				statusCode: status,
				title: error.message,
				desc: resolveErrorMessage(status)
			}
		};
	}
</script>

<script>
	export let statusCode;
	export let title;
	export let desc;
</script>

<svelte:head>
	<title>Error {statusCode}</title>
</svelte:head>
<div class="errorContainer bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="errorBlock bg-transparentmax-w-max mx-auto">
		<main class="errorFlex sm:flex">
			<p class="errorCode text-4xl font-extrabold text-indigo-600 sm:text-5xl">{statusCode}</p>
			<div class="errorInfo sm:ml-6">
				<div class="errorDescriptionBox sm:border-l sm:border-gray-200 sm:pl-6">
					<h1 class="errorTitle text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{title}</h1>
					<p class="erroDescription mt-1 text-base text-gray-500">
						{desc}
					</p>
				</div>
				<div class="errorSolutions mt-10 flex space-x-3 space-y-2 justify-center sm:border-l sm:border-transparent sm:pl-6 <md:flex-wrap">
					<a
						href="/"
						class="errorGoHome inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Go back home
					</a>
					<!-- todo make the address, subject and error dinamicly-->
					<a
						href="mailto:sr.generoso@gmail.com?subject=Error in webpage
                        &body=This is the error and this is the webpage"
						class="errorSendReport inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Contact support
					</a>
				</div>
			</div>
		</main>
	</div>
</div>


