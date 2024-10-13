import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './team.entity';
import { TeamsController } from './team.controller';
import { TeamsService } from './team.service';
import { UserTeamService } from 'src/common/UserTeam/user-team.service';
import { UserTeam } from 'src/common/UserTeam/user-team.entity';


@Module({
  imports: [SequelizeModule.forFeature([Team, UserTeam])],
  controllers: [TeamsController, ],
  providers: [TeamsService, UserTeamService],
})
export class TeamsModule {}
