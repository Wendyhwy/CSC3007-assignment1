fetch('https://api.data.gov.sg/v1/environment/psi')
	.then((response) => response.json())

	// define innerHTML for HTML table
	.then(function(data) {
		console.log(data.items[0]);
		metrics = data["items"][0]["readings"]
		let tableData =
		`<tr>
		<th>Metric</th>
		<th>National</th>
		<th>Central</th>
		<th>West</th>
		<th>East</th>
		<th>North</th>
		<th>South</th>
		</tr>`;

		// loop to access all rows
		for ([metric, r] of Object.entries(metrics)) {
			tableData += `<tr><td>${metric}</td>
			<td>${r.national}</td>
			<td>${r.central}</td> 
			<td>${r.west}</td> 
			<td>${r.east}</td>
			<td>${r.north}</td> 
			<td>${r.south}</td>
			</tr>`;
	
		}
			updateTimestamp = data.items[0].update_timestamp;
			updateTimestamp = moment(updateTimestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");
			console.log(updateTimestamp);

			// Setting innerHTML as tab variable
			document.getElementById("tableData").innerHTML = tableData;
			document.getElementById("time").innerHTML = "Last Updated: " + updateTimestamp;
	});
