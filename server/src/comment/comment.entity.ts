import {
  BeforeCreate,
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
  Validate,
} from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Task } from 'src/task/task.entity';
import { User } from 'src/user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Comment extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, })
  id: string;

  @Column({ type: DataType.TEXT, allowNull: false, })
  text: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID, })
  projectId: string;

  @BelongsTo(() => Project)
  project: Project;

  @ForeignKey(() => Task)
  @Column({ type: DataType.UUID, allowNull: true, })
  taskId: string;

  @BelongsTo(() => Task)
  task: Task;

  @BeforeCreate
  static generateId(instance: Comment) {
    instance.id = uuidv4();
  }
}
