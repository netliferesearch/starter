## Table

### Default table
`<table>` default styling and markup.

	@example
	<table>
		<thead>
			<tr>
				<th>Header</th>
				<th>Header</th>
				<th>Header</th>
				<th>Header</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
			</tr>
			<tr>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
			</tr>
			<tr>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
				<td>Content</td>
			</tr>
		</tbody>
	</table>


### Responsive table
Adding the class `.responsive-table` gives a responsive table.
To add the label for every row add `<td data-header="Header">` on every table line.

	@example
	<table class="responsive-table">
		<thead>
			<tr>
				<th>Header one</th>
				<th>Header two</th>
				<th>Header three</th>
				<th>Header four</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td data-header="Header one">Content</td>
				<td data-header="Header two">Content</td>
				<td data-header="Header three">Content</td>
				<td data-header="Header four">Content</td>
			</tr>
			<tr>
				<td data-header="Header one">Content</td>
				<td data-header="Header two">Content</td>
				<td data-header="Header three">Content</td>
				<td data-header="Header four">Content</td>
			</tr>
			<tr>
				<td data-header="Header one">Content</td>
				<td data-header="Header two">Content</td>
				<td data-header="Header three">Content</td>
				<td data-header="Header four">Content</td>
			</tr>
		</tbody>
	</table>
