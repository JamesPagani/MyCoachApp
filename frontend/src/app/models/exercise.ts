export class Exercise {
	constructor(
		_id = '', name = '',
		description = '', quantity= 1,
		repetitions = 1, url = '',
		active = true
		){
			this._id =_id;
			this.name = name;
			this.description = description;
			this.quantity = quantity;
			this.repetitions = repetitions;
			this.url = url;
			this.active = active;
		}
		_id:string;
		name: string;
		description?: string;
		quantity:number;
		repetitions:number;
		url:string;
		active:boolean;
		__v: number;
}
