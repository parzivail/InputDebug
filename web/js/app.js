/**
 * Created by Colby on 11/29/2017.
 */
var nav = new Vue(
	{
		el: "#nav",
		data: {
			nav: [
				{
					title: "Keyboard",
					url: "index.html"
				},
				{
					title: "Mouse",
					url: "mouse.html"
				},
				{
					title: "Gamepad",
					url: "gamepad.html"
				}
			]
		}
	});
