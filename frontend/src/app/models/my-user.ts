export class MyUser {
	constructor(
		_id = '', name = '',
		 username='', role = ''
		){
			this._id =_id;
			this.name = name;
			this.username = username;
			this.role = role;
		}
	_id: string;
	name: string;
	username: string;
	role: string;
}
