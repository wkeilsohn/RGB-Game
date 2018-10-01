var numSquares = 6;
var colors = generateRandomColors(numSquares);  
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message"); // Note the # symbol!
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var HardBtn = document.querySelector("#HardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
	HardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

HardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	HardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	// alert("Test")
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick and new color
	pickedcolor = pickColor();
	//change color display to match
	colorDisplay.textContent = pickedcolor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]; // i != 1 
	};
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add event listener to the squares.
	squares[i].addEventListener("click", function(){
		// Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// Compare to pickedcolor
		if(clickedColor === pickedcolor){
			messageDisplay.textContent = "Correct"; // Informs you that you got the answer right.
			resetButton.textContent = "Play Again?";
			//Call the function to change colors
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323"; //Doent delete the square, just fades it out.
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	// loop through all squares
	for (var i =0;  i < squares.length; i++) { // There is a template for a decending for loop in sublime.
		// change the colors
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length) // picks a number between 0 and 1, excluding 1
	return colors[random];
}

function generateRandomColors(num){
	//make and array
	var arr =[];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green in the same range
	var g = Math.floor(Math.random() * 256);
	// pick a blue in the same range
	var b = Math.floor(Math.random() * 256);
	return "rgb(" +  r + ", " + g + ", " + b + ")"; //It should go without saying, but don't forget all the + signs
} //Also spaces matter... for the umpteenth time.