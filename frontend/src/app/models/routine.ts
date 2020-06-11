export class Routine {
	constructor(
		_id = '', name = '',
		exercise = [], coachId='',
		active = true, days = { 
			monday: false,
			tuesday: false,
			wednesday: false,
			thursday: false,
			friday: false,
			saturday: false,
			sunday: false }
		){
			this._id =_id;
			this.name = name;
			this.exercise = exercise;
			this.coachId = coachId;
			this.active = active;
			this.days = days;
		}
		_id:string;
		name: string;
		exercise?: string[];
		coachId: string;
		active: boolean;
		days: {
			monday: boolean,
			tuesday: boolean,
			wednesday: boolean,
			thursday: boolean,
			friday: boolean,
			saturday: boolean,
			sunday: boolean
		};
		__v: number;
}
