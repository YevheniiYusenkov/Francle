import { Board, User } from '../../entities';

export interface Storage {
	saveUser(user: User): Promise<boolean>;
	findUser(id: string): Promise<User>;
	
	saveBoard(user: Board): Promise<boolean>;
	findBoard(id: string): Promise<Board>;
}
