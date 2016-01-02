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
Select fields without custom styling

	@example
	<label>
		Label
		<select>
			<option>One</option>
			<option>Two</option>
		</select>
	</label>

### Custom select fields
Select fields with custom styling with a `div.select` container.

	@example
	<label>
		Label
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

### Custom checkboxes
Checkboxes with custom styling with a `label.checkbox` container and a `i.checkbox__indicator`element. To have disable states styled appropriately a `checkbox--disabled` class needs to be added to the label element. 

	@example
	<label class="checkbox"><input type="checkbox"/><i class="checkbox__indicator"/> Label</label>
	<label class="checkbox"><input type="checkbox" checked/><i class="checkbox__indicator"/> Checked</label>
	<label class="checkbox checkbox--disabled"><input type="checkbox" disabled/><i class="checkbox__indicator"/> Disabled</label>
	<label class="checkbox checkbox--disabled"><input type="checkbox" disabled checked/><i class="checkbox__indicator"/> Disabled and checked</label>
	<label class="checkbox checkbox--inline"><input type="checkbox"/><i class="checkbox__indicator"/> Inline checkbox</label>
	<label class="checkbox checkbox--inline"><input type="checkbox"/><i class="checkbox__indicator"/> Inline checkbox</label>

### Radiobuttons
Radiobuttons without classes.

	@example
	<label><input type="radio"/> Label</label>
	<label><input type="radio" checked/> Checked</label>
	<label><input type="radio" disabled/> Disabled</label>
	<label><input type="radio" disabled checked/> Disabled and checked</label>
