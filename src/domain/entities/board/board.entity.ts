import { Board } from './board.interface';
import { Task } from '../task';

export class BoardEntity implements Board {
	constructor(
		public id: string,
		public name: string,
		public userId: string,
		public tasks: Task[]
	) {}
}
