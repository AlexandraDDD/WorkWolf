import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';


@Module({
  imports: [SequelizeModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class UsersModule {}
