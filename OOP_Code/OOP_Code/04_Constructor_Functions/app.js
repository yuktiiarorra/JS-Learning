// black
// {r: 0, g: 0, b: 0, rgb: ƒ, hex: ƒ}
// firstColor
// {r: 35, g: 255, b: 150, rgb: ƒ, hex: ƒ}
// black.hex === firstColor.hex
// false
// "h1".slice === "bye".slice
// true

// This is a Constructor Function...
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

// color1.hex ===  color2.hex
// true

// color1.rgb()
// 'rgb(40, 255, 60)'
// color1.hex()
// '#28ff3c'
// color1.rgba(0.5)
// 'rgba(40, 255, 60, 0.5)'
// document.body.style.backgroundColor = color1.rgb()
// 'rgb(40, 255, 60)'
