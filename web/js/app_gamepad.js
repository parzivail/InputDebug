/**
 * Created by colby on 11/26/2017.
 */
var app = new Vue(
	{
		el: "#app",
		data: {
			haveEvents: 'GamepadEvent' in window,
			haveWebkitEvents: 'WebKitGamepadEvent' in window,
			controllers: {},
			requestFrame: window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.requestAnimationFrame,
			scanGamepads: function () {
				var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
				for (var i = 0; i < gamepads.length; i++) {
					if (gamepads[i]) {
						if (!(gamepads[i].index in controllers)) {
							this.connectGamepad(gamepads[i]);
						} else {
							this.controllers[gamepads[i].index] = gamepads[i];
						}
					}
				}
			},
			updateStatus: function () {
				this.scangamepads();
				for (j in this.controllers) {
					var controller = this.controllers[j];
					var d = document.getElementById("controller" + j);
					var buttons = d.getElementsByClassName("button");
					for (var i = 0; i < controller.buttons.length; i++) {
						var b = buttons[i];
						var val = controller.buttons[i];
						var pressed = val == 1.0;
						if (typeof(val) == "object") {
							pressed = val.pressed;
							val = val.value;
						}
						var pct = Math.round(val * 100) + "%";
						b.style.backgroundSize = pct + " " + pct;
						if (pressed) {
							b.className = "button pressed";
						} else {
							b.className = "button";
						}
					}

					var axes = d.getElementsByClassName("axis");
					for (var i = 0; i < controller.axes.length; i++) {
						var a = axes[i];
						a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
						a.setAttribute("value", controller.axes[i]);
					}
				}
				this.requestFrame(this.updateStatus);
			},
			connectGamepad: function (gamepad) {
				this.controllers[gamepad.index] = gamepad;

				/**
				 * TODO: remove
				 */
				var d = document.createElement("div");
				d.setAttribute("id", "controller" + gamepad.index);
				var t = document.createElement("h1");
				t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
				d.appendChild(t);
				var b = document.createElement("div");
				b.className = "buttons";
				for (var i = 0; i < gamepad.buttons.length; i++) {
					var e = document.createElement("span");
					e.className = "button";
					//e.id = "b" + i;
					e.innerHTML = i;
					b.appendChild(e);
				}
				d.appendChild(b);
				var a = document.createElement("div");
				a.className = "axes";
				for (i = 0; i < gamepad.axes.length; i++) {
					e = document.createElement("meter");
					e.className = "axis";
					//e.id = "a" + i;
					e.setAttribute("min", "-1");
					e.setAttribute("max", "1");
					e.setAttribute("value", "0");
					e.innerHTML = i;
					a.appendChild(e);
				}
				d.appendChild(a);
				document.getElementById("start").style.display = "none";
				document.body.appendChild(d);

				/**
				 * TODO: why does every connect trigger a new frame cycle?
				 */
				this.requestFrame(this.updateStatus);
			},
			disconnectGamepad: function(gamepad) {
				var d = document.getElementById("controller" + gamepad.index);
				document.body.removeChild(d);
				delete controllers[gamepad.index];
			},
			connectHandler: function (e) {
				this.connectGamepad(e.gamepad)
			},
			disconnectHandler: function (e) {
				this.disconnectGamepad(e.gamepad)
			}
		}
	});

if (haveEvents) {
	window.addEventListener("gamepadconnected", connecthandler);
	window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
	window.addEventListener("webkitgamepadconnected", connecthandler);
	window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
	setInterval(scangamepads, 500);
}
