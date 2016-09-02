class Base{
	constructor(argument) {
		this.lang(argument&&argument['lang'])
	}
	implement(obj) {
		Object.assign(this, obj);
		return this;
	}
	plugin(func, args){
		func instanceof Function && func.apply(this, args);
		return this;
	}
	i18n(lang, msg){
		var args = Array.from(arguments);
		if(args.length == 0){
			return
		}else if(args = 1){
			this[this.lang] = msg;
		}else{
			this[lang] = msg;
		}
	}
	lang(lang = 'cn') {
		this.lang = lang;
	}
}
export { Base };