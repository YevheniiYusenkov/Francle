import { v4 as uuid } from 'uuid';

import { CreateBoardDto } from '../../dto';
import { Board, BoardEntity, User } from '../../entities';
import { Storage } from '../storage';

export class BoardsService {
	constructor(private readonly storageService: Storage) {}
	
	public async createBoard(dto: CreateBoardDto, user: User): Promise<Board> {
		const board = new BoardEntity(uuid(), dto.name, user.id, []);
		
		await this.storageService.saveBoard(board);
		
		return board;
	}
	
	public async findBoard(id: string, user: User): Promise<Board | null> {
		const board = await this.storageService.findBoard(id);
		
		if (board.userId !== user.id) {
			return null;
		}
		
		return board;
	}
}
