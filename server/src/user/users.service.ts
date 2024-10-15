// users.service.ts
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Team } from 'src/team/team.entity';
import { Role } from 'src/roles/roles.entity';
import { UserRole } from 'src/common/UserRole/user-role.entity';
import { Task } from 'src/task/task.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userData = {
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    };
    const user = await this.usersRepository.create(userData);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Team,
          attributes: { exclude: ['UserTeam'] },
        },
        {
          model: Task,
          /* attributes: { exclude: ['UserTeam'] }, */
        },
      ],
    });
  }
  
  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({where: {email}})
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

  async addRoleToUser(userId: string, roleId: string): Promise<User> {
    const user = await this.usersRepository.findByPk(userId, {
      include: [{ model: Role, through: { attributes: [] } }],
    });
    if (!user) {
      throw new Error('User not found');
    }
    await user.$add('role', roleId);
    return user;
  }

  async removeRoleFromUser(userId: string, roleId: string): Promise<User> {
    const user = await this.usersRepository.findByPk(userId, {
      include: [{ model: Role, through: { attributes: [] } }],
    });
    if (!user) {
      throw new Error('User not found');
    }
    await user.$remove('role', roleId);
    return user;
  }
}
