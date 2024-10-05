import { BeforeCreate, Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Comment } from 'src/comment/comment.entity';
import { Subtask } from 'src/subtask/subtask.entity';
import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  NOT_CONFIRM_YET = 'NOT_CONFIRM_YET',
}

@Table
export class Task extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => Project)
  @Column
  projectId: string;

  @BelongsTo(() => Project)
  project: Project;

  @HasMany(() => Subtask)
  subtasks: Subtask[];

  @HasMany(() => Comment)
  comments: Comment[];

  @Column({
    type: DataType.ENUM('TODO', 'IN_PROGRESS', 'DONE', 'NOT_CONFIRM_YET'),
  })
  status: TaskStatus;

  @BeforeCreate
  static generateId(instance: Task) {
    instance.id = uuidv4();
  }
}
