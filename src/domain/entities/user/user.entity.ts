import { User } from './user.interface';

export class UserEntity implements User {
	constructor(
		public name: string,
		public id: string,
	) {}
}
