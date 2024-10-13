import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRole } from './user-role.entity';


@Module({
  imports: [SequelizeModule.forFeature([UserRole])],

})
export class UserRoleModule {}
