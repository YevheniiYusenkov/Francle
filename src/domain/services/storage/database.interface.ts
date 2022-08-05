import { Board, Task, User } from '../../entities';

export interface Database {
	save(entity: User | Board | Task): Promise<boolean>;
	findUser(id: string): Promise<User>;
	findBoard(id: string): Promise<Board>;
}
