import { BeforeCreate, Column, HasMany, Model, PrimaryKey, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { UserTeam } from 'src/common/UserTeam/user-team.entity';

import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ timestamps: false }) 
export class Team extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => User, () => UserTeam)
  users: User[];

  

  @BeforeCreate
  static generateId(instance: Team) {
    instance.id = uuidv4();
  }
}
