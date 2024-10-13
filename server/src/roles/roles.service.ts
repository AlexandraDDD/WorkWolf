import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role, RoleEnum } from './roles.entity';
import { CreateRoleDto } from './dto/roles-create.dto';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role)
        private roleModel: typeof Role,
      ) {}
      
      async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const roleData = {
          value: createRoleDto.value as RoleEnum,
          description: createRoleDto.description,
        };
        return this.roleModel.create(roleData);
      }
    
/*       async findAll(): Promise<Task[]> {
        return this.taskModel.findAll();
      } */
    
      async findOne(value: string): Promise<Role> {
        return this.roleModel.findOne({where: {value}});
      }
    
     
      }
