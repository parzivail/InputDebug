/**
 * Created by colby on 11/26/2017.
 */

var app = new Vue(
	{
		el: "#app",
		data: {
			haveEvents: 'GamepadEvent' in window,
			haveWebkitEvents: 'WebKitGamepadEvent' in window,
			controllers: [
				{
					id: "Dummy Controller",
					axes: [0, 0.25, 0.75, 1],
					buttons: [0, 0, 1, 0]
				}
			],
			bars: [],
			requestFrame: function (cb) {
				window.requestAnimationFrame(cb);
			},
			scanGamepads: function () {
				var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
				for (var i = 0; i < gamepads.length; i++) {
					if (gamepads[i]) {
						if (!(gamepads[i].index in this.controllers)) {
							this.connectGamepad(gamepads[i]);
						} else {
							this.controllers.splice(gamepads[i].index, 1, gamepads[i]);
						}
					}
				}
			},
			updateStatus: function () {
				app.scanGamepads();

				app.requestFrame(app.updateStatus);
			},
			connectGamepad: function (gamepad) {
				this.controllers.splice(gamepad.index, 1, gamepad);

				if (gamepad.index === 0) {
				}

				this.requestFrame(this.updateStatus);
			},
			disconnectGamepad: function (gamepad) {
				this.controllers.splice(gamepad.index, 1);
			},
			connectHandler: function (e) {
				app.connectGamepad(e.gamepad);
			},
			disconnectHandler: function (e) {
				app.disconnectGamepad(e.gamepad);
			}
		}
	});

// app.scanGamepads();
// if (app.haveEvents) {
// 	window.addEventListener("gamepadconnected", app.connectHandler);
// 	window.addEventListener("gamepaddisconnected", app.disconnectHandler);
// } else if (app.haveWebkitEvents) {
// 	window.addEventListener("webkitgamepadconnected", app.connectHandler);
// 	window.addEventListener("webkitgamepaddisconnected", app.disconnectHandler);
// } else {
// 	setInterval(app.scanGamepads, 1000);
// }
//
