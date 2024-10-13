import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { BeforeCreate, Column, Model, PrimaryKey, Table, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { UserRole } from 'src/common/UserRole/user-role.entity';
import { UserTeam } from 'src/common/UserTeam/user-team.entity';
import { Role } from 'src/roles/roles.entity';
import { Task } from 'src/task/task.entity';

import { Team } from 'src/team/team.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ timestamps: false }) 
export class User extends Model {
  @ApiProperty({example: '1'})
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  
  @ApiProperty({example: 'Jhon'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  
  @ApiProperty({example: 'mail@email.ru'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @ApiProperty({example: '1234'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Exclude()
  @BelongsToMany(() => Team, () => UserTeam)
  teams: Team[];

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @HasMany(() => Task)
  tasks: Task[];

/*   @HasMany(() => Comment)
  comments: Task[]; */


  @BeforeCreate
  static generateId(instance: User) {
    instance.id = uuidv4();
  }
}