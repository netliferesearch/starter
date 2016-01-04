## Images

### Default image
Images have `max-width: 100%`

Remeber to use the `alt` attribute for accessibility.

	@example
	<img src="../images/large.jpg" alt="Moonlanding">

### Responsive image
Use responsive images for larges images.

	@example
	<picture>
		<img src="../images/medium.jpg"
				srcset="../images/small.jpg 640w,
						../images/medium.jpg 1024w,
						../images/large.jpg 2000w"
				alt="Moonlanding." />
	</picture>

### Round image
Add the class `round-image`

	@example
	<picture>
		<div class="round-image">
			<img src="../images/large-square.jpg" class="round-image__image" alt="Moonlanding">
		</div>
	</picture>
