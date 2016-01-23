## Styles

### Colors
Colors is generated from a map in `_variables.scss`.

Syntax: `color(color, tone[optional])`

Example:
`color: color(primary)` or
`color: color(gray, light)`

	@example
	<div class="sg-color">
		<div class="sg-color__swatch color-primary"></div>
		<div class="sg-color__swatch color-secondary"></div>
		<div class="sg-color__swatch color-third"></div>
		<div class="sg-color__swatch color-black"></div>
		<div class="sg-color__swatch color-white"></div>
		<div class="sg-color__swatch color-gray"></div>
		<div class="sg-color__swatch color-darkGray"></div>
		<div class="sg-color__swatch color-lightGray"></div>
	</div>

### Fonts

`$font-sans--light` `$font-sans--book` `$font-sans--medium` `$font-sans--bold`

	@example
	<div class="sg-typo sg-typo--sans">ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ<br />
		abcdefghijklmnopqrsyuvwxyzæøå<br />
		123456789!"#$%&/()
	</div>
	<div class="sg-typo sg-typo--serif">ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ<br />
		abcdefghijklmnopqrsyuvwxyzæøå<br />
		123456789!"#$%&/()
	</div>
