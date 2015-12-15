## Form

### Input fields
Wrap input fields in labels. The label provides margin.

	@example
	<label>
		Label
		<input type="text" placeholder="Placeholder"/>
	</label>

	<label>
		Disabled
		<input type="text" disabled/>
	</label>

### Textarea fields
Wrap textarea fields in labels. The label provides margin.

	@example
	<label>
		Label
		<textarea></textarea>
	</label>

	<label>
		Disabled
		<textarea disabled></textarea>
	</label>

### Buttons
Form button without classes.

	@example
	<button type="button">Button</button>
	<button type="button" disabled>Disabled</button>

### Select fields
Select fields with and without custom styling with a `div.select` container.

	@example
	<label>
		Without custom styling
		<select>
			<option>One</option>
			<option>Two</option>
		</select>
	</label>

	<label>
		With custom styling
		<div class="select">
			<select>
				<option>One</option>
				<option>Two</option>
			</select>
		</div>
	</label>

### Fieldset and legends
Used to group form elements. Always use legends together with fieldsets.

	@example
	<fieldset>
		<legend>Legend</legend>
		Fields here
	</fieldset>

### Checkboxes
Checkboxes without classes.

	@example
	<label><input type="checkbox"/> Label</label>
	<label><input type="checkbox" checked/> Checked</label>
	<label><input type="checkbox" disabled/> Disabled</label>
	<label><input type="checkbox" disabled checked/> Disabled and checked</label>

### Radioboxes
Radioboxes without classes.

	@example
	<label><input type="radio"/> Label</label>
	<label><input type="radio" checked/> Checked</label>
	<label><input type="radio" disabled/> Disabled</label>
	<label><input type="radio" disabled checked/> Disabled and checked</label>
