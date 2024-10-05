import { BeforeCreate, Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Task } from 'src/task/task.entity';
import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export enum ProjectStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Table
export class TaskStatusEntity extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  state: TaskStatus;

  @ForeignKey(() => Task)
  @Column
  taskId: string;

  @BelongsTo(() => Task)
  task: Task;

  @BeforeCreate
  static generateId(instance: TaskStatusEntity) {
    instance.id = uuidv4();
  }
}

@Table
export class ProjectStatusEntity extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  state: ProjectStatus;

  @ForeignKey(() => Project)
  @Column
  projectId: string;

  @BelongsTo(() => Project)
  project: Project;

  @BeforeCreate
  static generateId(instance: ProjectStatusEntity) {
    instance.id = uuidv4();
  }
}
