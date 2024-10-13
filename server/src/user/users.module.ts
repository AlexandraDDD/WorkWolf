import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Role } from 'src/roles/roles.entity';
import { Task } from 'src/task/task.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Role, Task])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
