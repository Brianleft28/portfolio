<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import ScrollToTop from '$lib/utils/ScrollToTop.svelte';
</script>

<div class="flex flex-col">
	<Navbar />
	<!-- El padding superior es necesario porque la Navbar es fija -->
	<main class="flex-grow pt-24 px-4 md:px-8">
		<slot />
	</main>
</div>

<ScrollToTop />
