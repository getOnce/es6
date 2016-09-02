'use strict';

var _Factory = require('./Factory');

{
	console.log(_Factory.Factory);

	var f = new _Factory.Factory();
	f.setName('hw').sayName();
}