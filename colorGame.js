var numSquares = 6 ;
var colors = generateRandomColors(numSquares);
var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click" , function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3 ;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]
		}else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click" , function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6 ;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ;i++){
		
			squares[i].style.backgroundColor = colors[i]
			squares[i].style.display = "block";
		
	}
})
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click" , function(){
	//generate akll new Colors
	colors =  generateRandomColors(numSquares);
	//pick a new Random color from array
	pickedColor = pickColor();
	//change colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor; 
	//change colors of squares
	for(var i = 0 ; i<squares.length ; i++){
		squares[i].	style.backgroundColor = colors[i];
	}
	h1.backgroundColor = "steelblue";
});

colorDisplay.textContent  = pickedColor;


for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
	//attaching event listener
	squares[i].addEventListener("click" , function() {
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare color of square with given color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT !!!"
			resetButton.textContent = "Play again ?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor ;
		}else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "TRY AGAIN !!!"
		}
	})
}
function changeColors(color) {
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = color ;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0 ; i < num ; i++ ){
		//get random color an push into arr
		arr.push(randomColor());
	}
	//return that array 
	return arr;
}
function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256)
	//pick a green 
	var g = Math.floor(Math.random() * 256)
	//pick a blue
	var b = Math.floor(Math.random() * 256)
	return  "rgb(" + r + ", " + g + ", " + b + ")";
}