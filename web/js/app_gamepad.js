/**
 * Created by colby on 11/26/2017.
 */

var app = new Vue(
	{
		el: "#app",
		data: {
			haveEvents: 'GamepadEvent' in window,
			haveWebkitEvents: 'WebKitGamepadEvent' in window,
			controllers: [],
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

				for (var j = 0; j < app.controllers[0].axes.length; j++)
					app.bars[j].animate(app.controllers[0].axes[j]);

				app.requestFrame(app.updateStatus);
			},
			connectGamepad: function (gamepad) {
				this.controllers.splice(gamepad.index, 1, gamepad);

				if (gamepad.index === 0) {
					for (var i = 0; i < gamepad.axes.length; i++)
						this.bars.push(new ProgressBar.Line("#bar" + i, {
							strokeWidth: 5,
							duration: 100,
							trailColor: '#eee'
						}));
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

app.scanGamepads();
if (app.haveEvents) {
	window.addEventListener("gamepadconnected", app.connectHandler);
	window.addEventListener("gamepaddisconnected", app.disconnectHandler);
} else if (app.haveWebkitEvents) {
	window.addEventListener("webkitgamepadconnected", app.connectHandler);
	window.addEventListener("webkitgamepaddisconnected", app.disconnectHandler);
} else {
	setInterval(app.scanGamepads, 1000);
}

