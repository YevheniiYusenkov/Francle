import { DatabaseService } from './src/application';
import { BoardsService, UsersService, StorageService } from '@app/domain';

async function main() {
	const databaseService = new DatabaseService();
	
	const storageService = new StorageService(databaseService);
	const usersService = new UsersService(storageService);
	const boardsService = new BoardsService(storageService);
	
	const user = await usersService.createUser({ name: 'Yevhenii' });
	console.log(user);
	
	const getUser = await usersService.getUser('1');
	console.log(getUser);
	
	const board = await boardsService.createBoard({ name: 'Clean Architecture' }, user);
	console.log(board);
}

main();
