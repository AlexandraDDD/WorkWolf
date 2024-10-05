import { BeforeCreate, Column, Model, PrimaryKey, Table, HasMany, BelongsToMany, HasOne, BelongsTo, ForeignKey, DataType, Default } from 'sequelize-typescript';
import { Task } from 'src/task/task.entity';
import { Comment } from 'src/comment/comment.entity';
import { v4 as uuidv4 } from 'uuid';
import { Team } from 'src/team/team.entity';

export enum ProjectStatus {
  BY_PLAN = 'BY_PLAN',
  LOSS = 'LOSS',
  ABSENT = 'ABSENT',
  POSTPONED = 'POSTPONED',
}
 

@Table
export class Project extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @ForeignKey(() => Team)
  @Column
  teamId: string;

  @BelongsTo(() => Team)
  team: Team;

  @HasMany(() => Task)
  tasks: Task[];

  @HasMany(() => Comment)
  comments: Comment[];

  @Column({
    type: DataType.ENUM('BY_PLAN', 'LOSS', 'ABSENT', 'POSTPONED'),
    defaultValue: ProjectStatus.BY_PLAN,
  })
  @Default(ProjectStatus.BY_PLAN)
  status: ProjectStatus;

  @BeforeCreate
  static generateId(instance: Project) {
    instance.id = uuidv4();
  }
}
