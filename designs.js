// When size is submitted by the user, call makeGrid()
function makeGrid() {
	//setting up VAR used
	var gCanvas = document.getElementById('pixelCanvas');
	var gHeight = document.getElementById('inputHeight').value;
	var gWidth = document.getElementById('inputWidth').value;
	gCanvas.innerHTML = '';

	// Creating a for loop to create rows
	for (var x = 0; x < gWidth; x++) {
		var gRow = document.createElement('tr');
		gCanvas.appendChild(gRow);

		// Creating another for loop to create a column with every row in the loop
		for (var y = 0; y < gHeight; y++) {
			var gColumn = document.createElement('td');
			gRow.appendChild(gColumn);

			// Filling in the colors based off the grid created
			var gColor = document.getElementById('colorPicker');
			gColumn.addEventListener('click', function(e) {
				var gColorValue = gColor.value;
				// targets the cell clicked on and changes the background
				e.target.style.backgroundColor = gColorValue;
			})
		}
	}
};

// Resetting the Grid
var gSize = document.getElementById('sizePicker');
gSize.addEventListener('click', function(e) {
	e.preventDefault();
	makeGrid();
});
