import { IsEmail, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { PriorityLevel, TaskStatus } from '../task.entity';


export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsDate()
  @IsOptional()
  deadline?: Date;

  @IsEnum(PriorityLevel)
  @IsOptional()
  priority?: PriorityLevel;
}