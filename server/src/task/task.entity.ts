import { BeforeCreate, Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo, HasMany, DataType, HasOne } from 'sequelize-typescript';
import { Project } from 'src/project/project.entity';
import { Comment } from 'src/comment/comment.entity';
import { Subtask } from 'src/subtask/subtask.entity';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/user.entity';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  NOT_CONFIRM_YET = 'NOT_CONFIRM_YET',
}

export enum PriorityLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

@Table({ timestamps: false }) 
export class Task extends Model {
  
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

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deadline: Date;

  @Column({
    type: DataType.ENUM('LOW', 'MEDIUM', 'HIGH'),
    allowNull: true,
  })
  priority: PriorityLevel;
  
  // PROJECT
  @ForeignKey(() => Project)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  projectId: string;

  @BelongsTo(() => Project)
  project: Project;

   // USER
   @ForeignKey(() => User)
   @Column({
     type: DataType.UUID,
     allowNull: false,
   })
   userId: string;
 
   @BelongsTo(() => User, 'userId')
   assignedUser: User;
 

  // OTHER
  @HasMany(() => Subtask)
  subtasks: Subtask[];

  @HasMany(() => Comment)
  comments: Comment[];

  @Column({
    type: DataType.ENUM('TODO', 'IN_PROGRESS', 'DONE', 'NOT_CONFIRM_YET'),
    allowNull: false,
  })
  status: TaskStatus;

  @BeforeCreate
  static generateId(instance: Task) {
    instance.id = uuidv4();
  }
}