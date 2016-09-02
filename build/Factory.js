'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Factory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OO = require('./OO');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Factory = function (_Base) {
	_inherits(Factory, _Base);

	function Factory(arg) {
		_classCallCheck(this, Factory);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Factory).call(this, arg));
	}

	_createClass(Factory, [{
		key: 'sayName',
		value: function sayName() {
			console.log(this.name);
			return this;
		}
	}, {
		key: 'setName',
		value: function setName(name) {
			this.name = name;
			return this;
		}
	}]);

	return Factory;
}(_OO.Base);

exports.Factory = Factory;