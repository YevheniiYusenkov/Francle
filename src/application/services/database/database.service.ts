import { Database, User, Task, Board, BoardEntity } from '@app/domain';

// For mock. Should be deleted.
import { UserEntity } from '@app/domain';

export class DatabaseService implements Database {
	private readonly mockUser: User;
	private readonly mockBoard: Board;
	
	constructor() {
		this.mockUser = new UserEntity('mock', '1');
		this.mockBoard = new BoardEntity('1', 'mock', '1', []);
	}
	
	public async findUser(id: string): Promise<User> {
		return this.mockUser;
	}
	
	public async findBoard(id: string): Promise<Board> {
		return this.mockBoard;
	}
	
	public async save(entity: User | Board | Task): Promise<boolean> {
		return true;
	}
}
