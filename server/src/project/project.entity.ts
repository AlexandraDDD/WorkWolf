import { BeforeCreate, Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo, HasMany, DataType, Default } from 'sequelize-typescript';
import { Task } from 'src/task/task.entity';
import { Comment } from 'src/comment/comment.entity';
import { v4 as uuidv4 } from 'uuid';
import { Team } from 'src/team/team.entity';

export enum ProjectStatus {
  BY_PLAN = 'BY_PLAN',
  LOSS = 'LOSS',
  ABSENT = 'ABSENT',
  POSTPONED = 'POSTPONED',
  NONE = 'NONE',
}

@Table({ timestamps: false }) 
export class Project extends Model {
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

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  files: string;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  teamId: string;



  @BelongsTo(() => Team)
  team: Team;

  @HasMany(() => Task)
  tasks: Task[];

  @HasMany(() => Comment)
  comments: Comment[];

  @Column({
    type: DataType.ENUM('BY_PLAN', 'LOSS', 'ABSENT', 'POSTPONED', 'NONE'),
    defaultValue: ProjectStatus.NONE,
  })
  /* @Default(ProjectStatus.BY_PLAN) */
  status: ProjectStatus;

  @BeforeCreate
  static generateId(instance: Project) {
    instance.id = uuidv4();
  }
}