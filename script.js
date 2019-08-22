var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");

function setGradient(clr1,clr2) { //Changed setGradient function to take arguments for the colors, rather than always take the values from the color inputs. This allows for the Random button to provide its own arguments to the same function while retaining original functionality
	console.log();
	body.style.background = 
	"linear-gradient(to right, " 
	+ clr1
	+ ", " 
	+ clr2
	+ ")";

	css.textContent = body.style.background + ";";
}

//The following functions ultimately create the setRandomColors, which provides random values for the setGradient function
randomTo255 = () => Math.floor(Math.random()*256); //creates random number between 0 and 255

createRBGArray = () => { //creates an array of 3 random RGB values
	let RBGArray = [];
	for (i = 0; i < 3; i++){
		RBGArray.push(randomTo255());
	}
	return RBGArray;
}

convertRGBArrayToString = (array) => { //takes array of 3 RGB values and formats into proper format for RGB color
	let convertedArray = array.join(", ");
	return ("rgb(" + convertedArray + ")");
}

setRandomColors = () => { //Set color1 and color2 values to random RGB values
	let clr1 = convertRGBArrayToString(createRBGArray());
	let clr2 = convertRGBArrayToString(createRBGArray());
	setGradient(clr1,clr2);
}

// Create Random button, append it to proper place, attach random color functionality
var randomButton = document.createElement("button");
randomButton.appendChild(document.createTextNode("Randomize"));
body.insertBefore(randomButton, css);

//Set event listeners to relevant inputs
color1.addEventListener("input", function(){setGradient(color1.value, color2.value)}); //setGradient is placed in an anonymous function so that arguments can be passed without invoking it immediately

color2.addEventListener("input", function(){setGradient(color1.value, color2.value)});

randomButton.addEventListener("click",setRandomColors);

//Set initial background to color inputs' default values
setGradient(color1.value, color2.value);
