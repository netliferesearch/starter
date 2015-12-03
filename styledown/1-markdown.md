# Styleguide

Style and components library.
* Content: <a href="#styles">Styles</a>, <a href="#buttons">Buttons</a>, <a href="#styles">Styles</a>, <a href="#table">Table</a>

## Styles

### Colors 
Colors are used for functions.

<code>$color-primary: #67898</code>

<code>$color-secondary: #67898</code>

	@example
	<div class="sg-color">
		<div class="sg-color__swatch color-info"></div>
        <div class="sg-color__swatch color-success"></div>
		<div class="sg-color__swatch color-warning"></div>
		<div class="sg-color__swatch color-danger"></div>
	</div>

### Typography
Font is Gotham. 

<code>$font-sans--light</code>

<code>$font-sans--book</code>

<code>$font-sans--medium</code>

<code>$font-sans--bold</code>


    @example
    <div class="sg-typo gotham-book">ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ<br />
    abcdefghijklmnopqrsyuvwxyzæøå<br />
    123456789!"#$%&/()</div>
    <div class="sg-typo gotham-bold">ABCDEFGHIJKLMOPQRSTUVWXYZÆØÅ<br />
    abcdefghijklmnopqrsyuvwxyzæøå<br />
    123456789!"#$%&/()</div>	

## Buttons

### Large buttons
Create your buttons with a `.button` class.

    @example
    <a class="button">Button</a>
    <a class="button button--success">Success button</a>
    <a class="button button--warning">Warning button</a>
    <a class="button button--danger">Danger button</a>

### Small buttons
Create your buttons with a `.button` class.

    @example
    <a class="button">Button</a>
    <a class="button button--small button--success">Success button</a>
    <a class="button button--small button--warning">Warning button</a>
    <a class="button button--small button--danger">Danger button</a>


## Table

### Module
`.table` - tables are styled nicely for you. Just add the class `.table`.

    @example
    <table>asdf</table>