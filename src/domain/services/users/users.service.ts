import { v4 as uuid } from 'uuid';

import { User, UserEntity } from '../../entities';
import { CreateUserDto } from '../../dto';
import { Storage } from '../storage';

export class UsersService {
	constructor(private readonly storage: Storage) {}
	
	public async createUser(dto: CreateUserDto): Promise<User> {
		const user = new UserEntity(dto.name, uuid());
		
		await this.storage.saveUser(user);
		
		return user;
	}
	
	public async getUser(id: string): Promise<User> {
		const user = await this.storage.findUser(id);
		
		return user;
	}
}
