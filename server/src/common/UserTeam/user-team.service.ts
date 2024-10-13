import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserTeam } from './user-team.entity';
import { CreateUserTeamDto } from './dto/create-user-team.dto';


@Injectable()
export class UserTeamService {
  constructor(
    @InjectModel(UserTeam)
    private userTeamModel: typeof UserTeam,
  ) {}

  async create(createUserTeamDto: CreateUserTeamDto): Promise<UserTeam> {
    const UserTeamData ={
        userId: createUserTeamDto.userId,
        teamId: createUserTeamDto.teamId,
    }
    return this.userTeamModel.create(UserTeamData);
  }
  async bulkCreate(userTeams: Partial<UserTeam>[]): Promise<UserTeam[]> {
    return this.userTeamModel.bulkCreate(userTeams);
  }
  async findAll(): Promise<UserTeam[]> {
    return this.userTeamModel.findAll();
  }

  async findOne(id: string): Promise<UserTeam> {
    return this.userTeamModel.findByPk(id);
  }

  async remove(id: string): Promise<void> {
    const userTeam = await this.findOne(id);
    await userTeam.destroy();
  }
}