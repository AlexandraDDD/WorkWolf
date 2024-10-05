import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';




@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User, 
  ) {}

  async create( createUserDto: CreateUserDto) {
    const userData = {
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    };
    return this.usersRepository.create(userData);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findByPk(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(updateUserDto);
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.usersRepository.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
  }
}
