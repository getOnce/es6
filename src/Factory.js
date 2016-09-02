import { Base } from './OO'

class Factory extends Base{
	constructor(arg){
		super(arg);
	}
	sayName(){
		return this;
	}
	setName(name){
		this.name = name;
		return this;
	}
}

export { Factory }