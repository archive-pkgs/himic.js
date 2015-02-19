// => HIMIC.js library for working with common chemistry tasks in JS
// LICENSE: MIT

var h = {
	VERSION: '1.0.0',
	author: 'Oleh Kuchuk'
};

// fix old version issue
function himicImport() {
	var oldHimic = window.h;

	h.fixConflict = function () {
		window.h = oldHimic;
		return this;
	};

	window.h = h;
}

// define as AMD module
if (typeof define === 'function' && define.amd) {
	define(h);
}

// add to global object
if (typeof window !== undefined) {
	himicImport();
}

// elements of period table
h.Elements = {
	'H': {
		'name': 'Hydrogen',
		'number': 1,
		'weight': 1.008,
		'period': 1,
		'group': 1,
		'groupType': 'hydrogen',
		'state': 'gas'
	},
	'Li': {
		'name': 'Lithium',
		'number': 3,
		'weight': 6.941,
		'period': 2,
		'group': 1,
		'groupType': 'alkali metal',
		'state': 'solid'
	},
	'Be': {
		'name': 'Beryllium',
		'number': 4,
		'weight': 9.012,
		'period': 2,
		'group': 2,
		'groupType': 'alkaline earth',
		'state': 'solid'
	},
	'He': {
		'name': 'Helium',
		'number': 2,
		'weight': 4.003,
		'period': 1,
		'group': 18,
		'groupType': 'noble gas',
		'state': 'gas'
	},
	'Ha': {
		'name': 'Sodium',
		'number': 11,
		'weight': 22.990,
		'period': 3,
		'group': 1,
		'groupType': 'alkali metal',
		'state': 'solid'
	},
	'Mg': {
		'name': 'Magnesium',
		'number': 12,
		'weight': 24.305,
		'period': 3,
		'group': 2,
		'groupType': 'alkaline earth',
		'state': 'solid'
	}
};

// define common constansts
h.con = {
	nA: {
		'value': 6.02 * Math.pow(10, 23),
		'measure': 'mole'
	},

	Vm: {
		'value': 22.413,
		'measure': 'l/mole'
	}
};

// helper function
function parseValue(value) {
	var array = value.split('-');
	return array;
}

function isElement(el) {
	return h.Elements[el] ? true : false;
}

// => return object
h.search = function() {
	var searchArray = h.Elements;
	for (var i = 0; i < searchArray.length; i++ ) {
		console.log('sd');
	}
};

// common functions
h.action = {
	calcMol: function(arg) {
		return arg * h.Avogadro.value;
	},

	Mr: function(arg) {
		var array = parseValue(arg);
		var mass = 0;

		for (var i = 0; i < array.length; i++) {
			if (h.Elements[array[i]]) {
				mass += h.Elements[array[i]].weight;
			} else {
				return 'unknown element idenificator';
			}
		}
		return mass;
	},

	n: function(formula, data) {
		var n = 0;
		var elW;

		if(typeof data === 'object' && data.type && data.value && formula) {
			
			if (isElement(formula)) {
				elW = h.Elements[formula].weight;
			}
			
			switch (data.type) {
				case 'mass':
					n += parseInt(data.value, 10) / elW;
					break;
				default:
					n = null;
			}
		}

		return n;
	}
};
