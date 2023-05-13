/**
 * Created by colby on 11/26/2017.
 */
var keyCodes = {
		0: "Left Button",
		1: "Middle Button",
		2: "Right Button"
	},
	animation = new mojs.Shape({
		left: 0, top: 0,
		stroke: '#FFFFFF',
		strokeWidth: {50: 0},
		fill: 'none',
		scale: {0: 1, easing: 'quad.out'},
		radius: 25,
		duration: 150
	}),
	animationInverse = new mojs.Shape({
		left: 0, top: 0,
		stroke: '#FFFFFF',
		strokeWidth: {0: 50},
		fill: 'none',
		scale: {1: 0, easing: 'quad.out'},
		radius: 25,
		duration: 150
	}),
	app = new Vue(
		{
			el: "#app",
			data: {
				key: {
					code: null,
					name: null
				},
				registerMouse: function (event, down) {
					this.key.code = event.button;
					this.key.name = keyCodes[event.button] || "Unknown";

					(down ? animationInverse : animation)
						.stop()
						.tune({
							x: event.clientX,
							y: event.clientY
						})
						.play();
				}
			}
		});


document.onmousedown = function (evt) {
	evt = evt || window.event;
	if (evt.path[0].nodeName === "A")
		return;
	app.registerMouse(evt, true);
	evt.preventDefault();
};

document.onmouseup = function (evt) {
	evt = evt || window.event;
	app.registerMouse(evt, false);
	evt.preventDefault();
};

document.oncontextmenu = function (evt) {
	evt = evt || window.event;
	evt.preventDefault();
};
