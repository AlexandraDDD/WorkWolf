import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserTeamController } from './user-team.controller';
import { UserTeamService } from './user-team.service';
import { UserTeam } from './user-team.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserTeam])],
  controllers: [UserTeamController],
  providers: [UserTeamService]
})
export class UserTeamModule {}
