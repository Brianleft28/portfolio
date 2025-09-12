<svg
	class="hero-deco-circle top-0 right-0"
	width="180"
	height="180"
	viewBox="0 0 180 180"
	fill="none"
>
	<circle cx="90" cy="90" r="90" fill="url(#grad1)" opacity="0.12" />
	<defs>
		<linearGradient id="grad1" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
			<stop stop-color="var(--p)" />
			<stop offset="1" stop-color="var(--s)" />
		</linearGradient>
	</defs>
</svg>
<svg
	class="hero-deco-circle bottom-0 left-0"
	width="120"
	height="120"
	viewBox="0 0 120 120"
	fill="none"
>
	<circle cx="60" cy="60" r="60" fill="url(#grad2)" opacity="0.10" />
	<defs>
		<linearGradient id="grad2" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
			<stop stop-color="var(--s)" />
			<stop offset="1" stop-color="var(--p)" />
		</linearGradient>
	</defs>
</svg>

<style>
	.hero-deco-circle {
		position: absolute;
		pointer-events: none;
		z-index: 0;
	}
	.hero-deco-circle.top-0.right-0 {
		top: -40px;
		right: -40px;
	}
	.hero-deco-circle.bottom-0.left-0 {
		bottom: -40px;
		left: -40px;
	}
	.hero-deco-lines {
		position: absolute;
		pointer-events: none;
		z-index: 0;
	}
	.hero-deco-lines.top-0.left-0 {
		top: 0;
		left: 0;
		transform: translate(-10px, -10px);
	}
	.hero-deco-lines.bottom-0.right-0 {
		bottom: 0;
		right: 0;
		transform: translate(10px, 10px);
	}
</style>
