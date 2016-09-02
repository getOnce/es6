'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
	function Base(argument) {
		_classCallCheck(this, Base);

		this.lang(argument && argument['lang']);
	}

	_createClass(Base, [{
		key: 'implement',
		value: function implement(obj) {
			Object.assign(this, obj);
			return this;
		}
	}, {
		key: 'plugin',
		value: function plugin(func, args) {
			func instanceof Function && func.apply(this, args);
			return this;
		}
	}, {
		key: 'i18n',
		value: function i18n(lang, msg) {
			var args = Array.from(arguments);
			if (args.length == 0) {
				return;
			} else if (args = 1) {
				this[this.lang] = msg;
			} else {
				this[lang] = msg;
			}
		}
	}, {
		key: 'lang',
		value: function lang() {
			var _lang = arguments.length <= 0 || arguments[0] === undefined ? 'cn' : arguments[0];

			this.lang = _lang;
		}
	}]);

	return Base;
}();

exports.Base = Base;