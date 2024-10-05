import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team)
    private teamModel: typeof Team,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const teamData = {
      name: createTeamDto.name,
      users: createTeamDto.users
    };
    return this.teamModel.create(teamData);
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.findAll();
  }

  async findOne(id: string): Promise<Team> {
    return this.teamModel.findByPk(id);
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
