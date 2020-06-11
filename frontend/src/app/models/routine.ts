export class Routine {
	constructor(
		_id = '', name = '',
		exercises = [], coach='',
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
			this.exercises = exercises;
			this.coach = coach;
			this.active = active;
			this.days = days;
		}
		_id:string;
		name: string;
		exercises?: string[];
		coach: string;
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
