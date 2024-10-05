import { IsEnum, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ProjectStatus, TaskStatus } from './status.entity';

export class CreateStatusDto {
  @IsNotEmpty()
  @IsEnum(TaskStatus)
  taskState: TaskStatus;

  @IsNotEmpty()
  @IsEnum(ProjectStatus)
  projectState: ProjectStatus;

  @IsNotEmpty()
  @IsString()
  taskId: string;

  @IsNotEmpty()
  @IsString()
  projectId: string;
}

export class UpdateStatusDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  taskState?: TaskStatus;

  @IsOptional()
  @IsEnum(ProjectStatus)
  projectState?: ProjectStatus;

  @IsOptional()
  @IsString()
  taskId?: string;

  @IsOptional()
  @IsString()
  projectId?: string;
}
