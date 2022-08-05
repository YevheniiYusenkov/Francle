import { Task } from './task.interface';

export class TaskEntity implements Task {
	constructor(
		public name: string,
		public id: string,
		public description: string,
		public status: string,
	) {}
}
