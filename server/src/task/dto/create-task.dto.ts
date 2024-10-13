import { IsString, IsNotEmpty, IsUUID, IsDate, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus, PriorityLevel } from '../task.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  @IsNotEmpty()
  projectId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status: TaskStatus;

  @IsDate()
  @IsOptional()
  deadline?: Date;

  @IsEnum(PriorityLevel)
  @IsOptional()
  priority?: PriorityLevel;
}