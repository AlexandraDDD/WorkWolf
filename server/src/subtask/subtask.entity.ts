import { BeforeCreate, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Task } from 'src/task/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Subtask extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => Task)
  @Column
  taskId: string;

  @BelongsTo(() => Task)
  task: Task;
  
  @BeforeCreate
  static generateId(instance: Subtask) {
    instance.id = uuidv4();
  }
}
