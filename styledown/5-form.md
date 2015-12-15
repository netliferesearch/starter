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
Select fields without classes.

	@example
	<label>
		Without classes
		<select>
			<option>One</option>
			<option>Two</option>
		</select>
	</label>

	<label>
		With classes
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
