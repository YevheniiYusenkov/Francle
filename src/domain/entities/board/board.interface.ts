import { Task } from '../task';

export interface Board {
	id: string,
	name: string,
	userId: string,
	tasks: Task[],
}
