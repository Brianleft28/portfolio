<script>
	import { onMount } from 'svelte';

	let showNavbar = true;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const handleScroll = () => {
			showNavbar = window.scrollY < 100;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if !showNavbar}
	<button
		class="fixed bottom-4 right-4 bg-secondary/80 text-white p-8 rounded-mdw shadow-lg hover:bg-secondary transition-colors duration-300 cursor-pointer
    
        "
		onclick={scrollToTop}
	>
		<!-- Texto  -->
		<span class="text-2xl">↑</span>
	</button>
{/if}
