## Images

### Default images
Images have `max-width: 100%`

Remeber to use the `alt` attribute for accessibility.

	@example
	<img src="../images/large.jpg" alt="Moonlanding">

### Responsive images
Use responsive images for larges images.

	@example
	<picture>
		<img src="../images/medium.jpg"
				srcset="../images/small.jpg 640w,
						../images/medium.jpg 1024w,
						../images/large.jpg 2000w"
				alt="Moonlanding." />
	</picture>
