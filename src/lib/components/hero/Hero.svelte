<script lang="ts">
    import SvgBackground from '$lib/components/hero/SvgBackground.svelte';
    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import { lang } from '$lib/stores';
    import heroData from './data/hero.json';
    import { fade, fly } from 'svelte/transition';
    import { isAtTop } from '$lib/stores/scrollStore';
    import { quintOut } from 'svelte/easing';

    const content = heroData.heroContent;
    let mounted = false; 
    let isInView = false; //  Variable para controlar si ya se ha visto

    onMount(() => {
        mounted = true;
    });

    // Acción para detectar si el elemento está en el viewport
    function viewport(node: HTMLElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Actualiza la variable con el estado actual de intersección
                isInView = entry.isIntersecting;
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

    // Ritmo aleatorio
    const randomInterval = () => Math.random() * (120 - 50) + 50;
    const randomUnwriteInterval = () => Math.random() * (80 - 30) + 30;

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
                    class="text-2xl text-start font-semibold h-8"
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
                    class="my-6  border-e-secondary border-e-[56px] text-shadow-2xs text-primary w-75 text-start border-t-2 origin-left"
                    in:draw={{ duration: 700, delay: 300 }}
					out:fade={{ duration: 200 }}
                />
            {/if}
        </div>
    </div>
    {#if $isAtTop}
        <div
            class="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
            transition:fade={{ duration: 300 }}
        >
            <span class="text-base text-primary/80 font-medium tracking-wide animate-pulse">
                {content[$lang] ? content[$lang].indicator : content['ES'].indicator}
            </span>
            <svg
                class="size-6 animate-bounce mt-2 text-primary/80"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
            </svg>
        </div>
    {/if}
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
    /* Glow animado y gradiente en la palabra activa */
    :global(.typewriter-container .typing) {
        background: linear-gradient(90deg, #7f5af0, #00cfff, #ff6ac1, #7f5af0);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-move 2s linear infinite;
        text-shadow:
            0 0 8px #7f5af0cc,
            0 0 16px #00cfff99,
            0 0 24px #ff6ac188;
        font-weight: bold;
        letter-spacing: 0.5px;
        transition: text-shadow 0.3s;
    }
    @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
</style>