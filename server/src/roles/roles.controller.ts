// roles.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/roles-create.dto';
import { Role, RoleEnum } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get(':value')
  async findOne(@Param('value') value: string): Promise<Role> {
    const roleEnumValue = value as RoleEnum;
    return this.rolesService.findOne(roleEnumValue);
  }
}
