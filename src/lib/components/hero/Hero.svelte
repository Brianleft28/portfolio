<script lang="ts">
    import SvgBackground from '$lib/components/hero/SvgBackground.svelte';
    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import { lang } from '$lib/stores';
    import heroData from './data/hero.json';
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    const content = heroData.heroContent;
    let mounted = false; 
    let isInView = false; // 1. Variable para controlar si ya se ha visto

    onMount(() => {
        mounted = true;
    });

    function viewport(node: HTMLElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Actualiza la variable con el estado actual de intersección
                isInView = entry.isIntersecting;
                console.log('Hero is in view:', isInView);
            });
        });

        observer.observe(node);

        return {
            destroy() {
                observer.unobserve(node);
            }
        };
    }

    function draw(node: HTMLElement, { delay = 0, duration = 400 }) {
        return {
            delay,
            duration,
            css: (t: number) => `transform: scaleX(${quintOut(t)});`
        };
    }

</script>

<div class="bg-base-100 relative overflow-hidden w-full min-h-[100vh]">
    <SvgBackground />
    <div class="mx-auto grid place-items-center h-screen text-start">
        <div class="space-y-6 z-10" use:viewport>
            {#if isInView}
                <h1
                    class="text-6xl text-shadow-secondary text-shadow-2xs font-sans"
                    in:fly={{ y: 20, duration: 500, delay: 100, easing: quintOut }}
					out:fade={{ duration: 50 }}
					>
                    {content[$lang] ? content[$lang].title : content['ES'].title}
                </h1>
                <div
                    class="text-2xl text-start font-semibold h-8 text-primary"
                    in:fly={{ y: 20, duration: 500, delay: 200, easing: quintOut }}
					out:fade={{ duration: 200 }}
				>
                    {#if mounted}
                        {#key $lang}
                            <Typewriter
                                mode="loopRandom"
                                cursor={true}
                                interval={100}
                                unwriteInterval={125}
                                wordInterval={1500}
                                class="typewriter"
                            >
                                {#each content[$lang] ? content[$lang].typewriter : content['ES'].typewriter as text}
                                    <span class="text-start w-100">{text}</span>
                                {/each}
                            </Typewriter>
                        {/key}
                    {/if}
                </div>
                <hr
                    class="my-6 divider-secondary border-e-primary border-e-[56px] text-shadow-2xs text-secondary w-75 text-start border-t-2 origin-left"
                    in:draw={{ duration: 700, delay: 300 }}
					out:fade={{ duration: 200 }}
                />
            {/if}
        </div>
    </div>
</div>

<style>
    :global(.typewriter-container) {
        --cursor-color: currentColor;
        --cursor-width: 0.12em;
        width: 45ch;
        text-align: left;
    }
    :global(.typewriter-container .typing::after) {
        margin-left: 0.2em;
    }
</style>