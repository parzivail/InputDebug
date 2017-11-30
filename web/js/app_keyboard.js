/**
 * Created by colby on 11/26/2017.
 */
var CTX_WINDOWS = "Windows",
	CTX_MAC = "Mac",
	CTX_MAC_JAPAN = "Mac (Japan)",
	CTX_CHROMEOS = "Chrome OS",
	CTX_FIREFOX = "Firefox",
	CTX_AZERTY = "AZERTY",
	CTX_USA = "USA",
	CTX_GB = "GB",
	CTX_DEAD = "Dead",
	CTX_INTLRO = "IntlRo",
	CTX_GNOME = "GNOME",
	keyCodes = {
		0: [{
			name: "None",
			context: null
		}],
		3: [{
			name: "Break",
			context: null
		}],
		8: [{
			name: "Backspace",
			context: CTX_WINDOWS
		}, {
			name: "Delete",
			context: CTX_MAC
		}],
		9: [{
			name: "Tab",
			context: null
		}],
		12: [{
			name: "Clear",
			context: null
		}],
		13: [{
			name: "Enter",
			context: null
		}],
		16: [{
			name: "Shift",
			context: null
		}],
		17: [{
			name: "Control",
			context: null
		}],
		18: [{
			name: "Alt",
			context: null
		}],
		19: [{
			name: "Pause/Break",
			context: null
		}],
		20: [{
			name: "Caps Lock",
			context: null
		}],
		21: [{
			name: "Hangul",
			context: null
		}],
		22: [{
			name: "英数",
			context: CTX_MAC_JAPAN
		}],
		25: [{
			name: "Hanja",
			context: null
		}],
		27: [{
			name: "Escape",
			context: null
		}],
		28: [{
			name: "Conversion",
			context: null
		}],
		29: [{
			name: "Non-Conversion",
			context: null
		}],
		32: [{
			name: "Spacebar",
			context: null
		}],
		33: [{
			name: "Page Up",
			context: null
		}],
		34: [{
			name: "Page Down",
			context: null
		}],
		35: [{
			name: "End",
			context: null
		}],
		36: [{
			name: "Home",
			context: null
		}],
		37: [{
			name: "Left Arrow",
			context: null
		}],
		38: [{
			name: "Up Arrow",
			context: null
		}],
		39: [{
			name: "Right Arrow",
			context: null
		}],
		40: [{
			name: "Down Arrow",
			context: null
		}],
		41: [{
			name: "Select",
			context: null
		}],
		42: [{
			name: "Print",
			context: null
		}],
		43: [{
			name: "Execute",
			context: null
		}],
		44: [{
			name: "Print Screen",
			context: null
		}],
		45: [{
			name: "Insert",
			context: null
		}],
		46: [{
			name: "Delete",
			context: null
		}],
		47: [{
			name: "Help",
			context: null
		}],
		48: [{
			name: "0",
			context: null
		}],
		49: [{
			name: "1",
			context: null
		}],
		50: [{
			name: "2",
			context: null
		}],
		51: [{
			name: "3",
			context: null
		}],
		52: [{
			name: "4",
			context: null
		}],
		53: [{
			name: "5",
			context: null
		}],
		54: [{
			name: "6",
			context: null
		}],
		55: [{
			name: "7",
			context: null
		}],
		56: [{
			name: "8",
			context: null
		}],
		57: [{
			name: "9",
			context: null
		}],
		58: [{
			name: ":",
			context: null
		}],
		59: [{
			name: "Equals",
			context: null
		}, {
			name: "Semicolon",
			context: CTX_FIREFOX
		}],
		60: [{
			name: "Less Than Symbol",
			context: null
		}],
		61: [{
			name: "Equals",
			context: CTX_FIREFOX
		}],
		63: [{
			name: "ß",
			context: null
		}],
		64: [{
			name: "At Symbol",
			context: CTX_FIREFOX
		}],
		65: [{
			name: "a",
			context: null
		}],
		66: [{
			name: "b",
			context: null
		}],
		67: [{
			name: "c",
			context: null
		}],
		68: [{
			name: "d",
			context: null
		}],
		69: [{
			name: "e",
			context: null
		}],
		70: [{
			name: "f",
			context: null
		}],
		71: [{
			name: "g",
			context: null
		}],
		72: [{
			name: "h",
			context: null
		}],
		73: [{
			name: "i",
			context: null
		}],
		74: [{
			name: "j",
			context: null
		}],
		75: [{
			name: "k",
			context: null
		}],
		76: [{
			name: "l",
			context: null
		}],
		77: [{
			name: "m",
			context: null
		}],
		78: [{
			name: "n",
			context: null
		}],
		79: [{
			name: "o",
			context: null
		}],
		80: [{
			name: "p",
			context: null
		}],
		81: [{
			name: "q",
			context: null
		}],
		82: [{
			name: "r",
			context: null
		}],
		83: [{
			name: "s",
			context: null
		}],
		84: [{
			name: "t",
			context: null
		}],
		85: [{
			name: "u",
			context: null
		}],
		86: [{
			name: "v",
			context: null
		}],
		87: [{
			name: "w",
			context: null
		}],
		88: [{
			name: "x",
			context: null
		}],
		89: [{
			name: "y",
			context: null
		}],
		90: [{
			name: "z",
			context: null
		}],
		91: [{
			name: "Windows Key",
			context: CTX_WINDOWS
		}, {
			name: "Left ⌘",
			context: CTX_MAC
		}, {
			name: "Search",
			context: CTX_CHROMEOS
		}],
		92: [{
			name: "Right Window Key",
			context: null
		}],
		93: [{
			name: "Windows Menu",
			context: CTX_WINDOWS
		}, {
			name: "Right ⌘",
			context: CTX_MAC
		}],
		95: [{
			name: "Sleep",
			context: null
		}],
		96: [{
			name: "Numpad 0",
			context: null
		}],
		97: [{
			name: "Numpad 1",
			context: null
		}],
		98: [{
			name: "Numpad 2",
			context: null
		}],
		99: [{
			name: "Numpad 3",
			context: null
		}],
		100: [{
			name: "Numpad 4",
			context: null
		}],
		101: [{
			name: "Numpad 5",
			context: null
		}],
		102: [{
			name: "Numpad 6",
			context: null
		}],
		103: [{
			name: "Numpad 7",
			context: null
		}],
		104: [{
			name: "Numpad 8",
			context: null
		}],
		105: [{
			name: "Numpad 9",
			context: null
		}],
		106: [{
			name: "Multiply",
			context: null
		}],
		107: [{
			name: "Add",
			context: null
		}],
		108: [{
			name: "Numpad Decimal",
			context: CTX_FIREFOX
		}],
		109: [{
			name: "Subtract",
			context: null
		}],
		110: [{
			name: "Decimal Point",
			context: null
		}],
		111: [{
			name: "Divide",
			context: null
		}],
		112: [{
			name: "F1",
			context: null
		}],
		113: [{
			name: "F2",
			context: null
		}],
		114: [{
			name: "F3",
			context: null
		}],
		115: [{
			name: "F4",
			context: null
		}],
		116: [{
			name: "F5",
			context: null
		}],
		117: [{
			name: "F6",
			context: null
		}],
		118: [{
			name: "F7",
			context: null
		}],
		119: [{
			name: "F8",
			context: null
		}],
		120: [{
			name: "F9",
			context: null
		}],
		121: [{
			name: "F10",
			context: null
		}],
		122: [{
			name: "F11",
			context: null
		}],
		123: [{
			name: "F12",
			context: null
		}],
		124: [{
			name: "F13",
			context: null
		}],
		125: [{
			name: "F14",
			context: null
		}],
		126: [{
			name: "F15",
			context: null
		}],
		127: [{
			name: "F16",
			context: null
		}],
		128: [{
			name: "F17",
			context: null
		}],
		129: [{
			name: "F18",
			context: null
		}],
		130: [{
			name: "F19",
			context: null
		}],
		131: [{
			name: "F20",
			context: null
		}],
		132: [{
			name: "F21",
			context: null
		}],
		133: [{
			name: "F22",
			context: null
		}],
		134: [{
			name: "F23",
			context: null
		}],
		135: [{
			name: "F24",
			context: null
		}],
		144: [{
			name: "Num Lock",
			context: null
		}],
		145: [{
			name: "Scroll Lock",
			context: null
		}],
		146: [{
			name: "Dictionary",
			context: CTX_DEAD
		}],
		147: [{
			name: "Unregister word",
			context: CTX_DEAD
		}],
		148: [{
			name: "Register word",
			context: CTX_DEAD
		}],
		149: [{
			name: "Left OYAYUBI",
			context: CTX_DEAD
		}],
		150: [{
			name: "Right OYAYUBI",
			context: CTX_DEAD
		}],
		160: [{
			name: "Circumflex (^)",
			context: null
		}],
		161: [{
			name: "Exclamation Point",
			context: null
		}],
		163: [{
			name: "Hash",
			context: null
		}],
		164: [{
			name: "Dollar Sign",
			context: null
		}],
		165: [{
			name: "ù",
			context: null
		}],
		166: [{
			name: "Page Backward",
			context: null
		}],
		167: [{
			name: "Page Forward",
			context: null
		}],
		168: [{
			name: "Refresh",
			context: null
		}],
		169: [{
			name: "Close Parenthesis",
			context: CTX_AZERTY
		}],
		170: [{
			name: "Multiply",
			context: null
		}],
		171: [{
			name: "Plus",
			context: null
		}],
		172: [{
			name: "Home",
			context: null
		}],
		173: [{
			name: "Minus",
			context: CTX_FIREFOX
		}, {
			name: "Mute",
			context: null
		}],
		174: [{
			name: "Decrease Volume",
			context: null
		}],
		175: [{
			name: "Increase Volume",
			context: null
		}],
		176: [{
			name: "Next",
			context: null
		}],
		177: [{
			name: "Previous",
			context: null
		}],
		178: [{
			name: "Stop",
			context: null
		}],
		179: [{
			name: "Play/Pause",
			context: null
		}],
		180: [{
			name: "Email",
			context: null
		}],
		181: [{
			name: "Mute",
			context: CTX_FIREFOX
		}],
		182: [{
			name: "Decrease Volume",
			context: CTX_FIREFOX
		}],
		183: [{
			name: "Increase Volume",
			context: CTX_FIREFOX
		}],
		186: [{
			name: "Semicolon",
			context: null
		}],
		187: [{
			name: "Equals",
			context: null
		}],
		188: [{
			name: "Comma",
			context: null
		}],
		189: [{
			name: "Dash",
			context: null
		}],
		190: [{
			name: "Period",
			context: null
		}],
		191: [{
			name: "Forward Slash",
			context: null
		}, {
			name: "ç",
			context: CTX_DEAD
		}],
		192: [{
			name: "Grave",
			context: CTX_USA
		}, {
			name: "ñ",
			context: null
		}, {
			name: "æ",
			context: null
		}, {
			name: "ö",
			context: null
		}],
		193: [{
			name: "Forward Slash",
			context: null
		}, {
			name: "ろ",
			context: CTX_INTLRO
		}],
		194: [{
			name: "Numpad Period",
			context: CTX_CHROMEOS
		}],
		219: [{
			name: "Open Bracket",
			context: null
		}],
		220: [{
			name: "Backslash",
			context: null
		}],
		221: [{
			name: "Close Bracket",
			context: CTX_USA
		}, {
			name: "Backslash",
			context: null
		}],
		222: [{
			name: "Single Quote",
			context: CTX_USA
		}, {
			name: "At Symbol",
			context: CTX_GB
		}],
		223: [{
			name: "Grave",
			context: null
		}],
		224: [{
			name: "⌘",
			context: CTX_FIREFOX
		}],
		225: [{
			name: "AltGr",
			context: null
		}],
		226: [{
			name: "ろ",
			context: CTX_INTLRO
		}],
		230: [{
			name: "Compose",
			context: CTX_GNOME
		}],
		231: [{
			name: "ç",
			context: null
		}],
		233: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		234: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		235: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		236: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		237: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		238: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		239: [{
			name: "OEM",
			context: CTX_DEAD
		}],
		240: [{
			name: "Alphanumeric",
			context: null
		}],
		242: [{
			name: "Hiragana/Katakana",
			context: null
		}],
		243: [{
			name: "Half-Width/Full-Width",
			context: null
		}],
		244: [{
			name: "Kanji",
			context: null
		}],
		255: [{
			name: "Function",
			context: null
		}]
	},
	animation = new mojs.Shape({
		left: 0, top: 0,
		stroke: '#FFFFFF',
		strokeWidth: {50: 0},
		fill: 'none',
		scale: {0: 1, easing: 'quad.out'},
		radius: 25,
		duration: 200
	}),
	app = new Vue(
		{
			el: "#app",
			data: {
				key: {
					code: null,
					names: null
				},
				registerKey: function (event) {
					this.key.code = event.keyCode;
					this.key.names = keyCodes[event.keyCode] || [{name: "Unknown", context: null}];

					var ani = document.getElementById("animation");
					var box = ani.getBoundingClientRect();

					animation
						.stop()
						.tune({
							x: box.left + box.width / 2,
							y: box.top + box.height / 2
						})
						.play();
				}
			}
		});

document.onkeydown = function (evt) {
	evt = evt || window.event;
	app.registerKey(evt);
	evt.preventDefault();
};
