import { Board, User } from '../../entities';
import { Database } from './database.interface';
import { Storage } from './storage.interface';

export class StorageService implements Storage {
	constructor(private readonly database: Database) {}
	
	public async saveUser(user: User): Promise<boolean> {
		return await this.database.save(user);
	}
	
	public async findUser(id: string): Promise<User> {
		return await this.database.findUser(id);
	}
	
	public async saveBoard(board: Board): Promise<boolean> {
		return await this.database.save(board);
	}
	
	public async findBoard(id: string): Promise<Board> {
		return await this.database.findBoard(id);
	}
}
