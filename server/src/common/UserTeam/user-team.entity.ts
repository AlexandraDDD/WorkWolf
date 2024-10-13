import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { Team } from 'src/team/team.entity';
import { User } from 'src/user/user.entity';

@Table({ timestamps: false })
export class UserTeam extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  teamId: string;
}