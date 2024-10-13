// users.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { Role } from 'src/roles/roles.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Post(':userId/roles/:roleId')
  async addRoleToUser(@Param('userId') userId: string, @Param('roleId') roleId: string): Promise<User> {
    return this.usersService.addRoleToUser(userId, roleId);
  }

  @Delete(':userId/roles/:roleId')
  async removeRoleFromUser(@Param('userId') userId: string, @Param('roleId') roleId: string): Promise<User> {
    return this.usersService.removeRoleFromUser(userId, roleId);
  }
}
