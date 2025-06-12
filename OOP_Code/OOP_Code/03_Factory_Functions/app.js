//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const secondColor = {};
	
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		console.log(this);
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor)
firstColor.hex(); //'#23ff96'
firstColor.rgb(); //"rgb(35, 255, 150)"
// firstColor.r = 255; //255
// firstColor.rgb(); //"rgb(255, 255, 150)"
// firstColor.hex(); //'#ffff96'

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"
