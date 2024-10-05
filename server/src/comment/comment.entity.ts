import { BeforeCreate, Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Task } from 'src/task/task.entity';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Comment extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  text: string;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Project)
  @Column
  projectId: string;

  @ForeignKey(() => Task)
  @Column
  taskId: string;

  @BelongsTo(() => Project)
  project: Project;

  @BelongsTo(() => Task)
  task: Task;

  @BeforeCreate
  static generateId(instance: Comment) {
    instance.id = uuidv4();
  }
}
