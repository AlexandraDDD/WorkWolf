// teams.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { User } from 'src/user/user.entity';
import { UserTeamService } from 'src/common/UserTeam/user-team.service';
import { UserTeam } from 'src/common/UserTeam/user-team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team)
    private teamModel: typeof Team,
    @InjectModel(UserTeam)
   
    private userTeamService: UserTeamService,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const teamData = {
      name: createTeamDto.name,
      userIds: createTeamDto.userIds
    };

    console.log(teamData);
    
    const team = await this.teamModel.create(teamData);

    const userTeams = teamData.userIds.map(userId => ({
      userId,
      teamId: team.id,
    }));

    await this.userTeamService.bulkCreate(userTeams);

    return team;
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.findAll({
      /* attributes: { exclude: ['createdAt', 'updatedAt'] }, */
      include: [
        {
          model: User,
          attributes: { exclude: ['UserTeam',  'password'] },
        },
      ],
    });
  }
  
  async findOne(id: string): Promise<Team> {
    return this.teamModel.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: User,
          attributes: { exclude: [ 'UserTeam', 'password'] },
        },
      ],
    });
  }
  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const team = await this.findOne(id);
    return team.update(updateTeamDto);
  }

  async remove(id: string): Promise<void> {
    const team = await this.findOne(id);
    await team.destroy();
  }
}
