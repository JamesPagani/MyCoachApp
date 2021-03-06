export class User {

	constructor(
	_id = '', name = '', email='',
	password = '', mobile_phone = '', comments = '',
	role = '', customers = [],
	measures = { age : 0, weight : 0, height : 0},
	objectives = '', parentId = '', routines = [],
	active = true
	){
		this._id =_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobile_phone = mobile_phone;
		this.comments = comments;
		this.role = role;
		this.customers = customers;
		this.measures = measures;
		this.objectives = objectives;
		this.routines = routines;
		this.parentId = parentId;
		this.active = active;
	}
	_id:string;
	name: string;
	email: string
	password: string;
	mobile_phone?: string;
	comments?: string;
	role: string;
	customers?: string[];
	measures?: {
	age: number,
	weight: number,
	height: number
	};	
	objectives?: string;
	routines: string[];
	parentId?: string;
	active: boolean;
}
