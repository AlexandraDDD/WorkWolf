import { BeforeCreate, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table, DataType } from 'sequelize-typescript';
import { Task } from 'src/task/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ timestamps: false }) 
export class Subtask extends Model {
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
  })
  description: string;

  @ForeignKey(() => Task)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  taskId: string;

  @BelongsTo(() => Task)
  task: Task;

  @BeforeCreate
  static generateId(instance: Subtask) {
    instance.id = uuidv4();
  }
}
