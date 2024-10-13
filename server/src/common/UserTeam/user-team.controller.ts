import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserTeamService } from './user-team.service';
import { CreateUserTeamDto } from './dto/create-user-team.dto';

@Controller('user-teams')
export class UserTeamController {
  constructor(private readonly userTeamService: UserTeamService) {}

  @Post()
  create(@Body() createUserTeamDto: CreateUserTeamDto) {
    return this.userTeamService.create(createUserTeamDto);
  }

  @Get()
  findAll() {
    return this.userTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTeamService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTeamService.remove(id);
  }
}