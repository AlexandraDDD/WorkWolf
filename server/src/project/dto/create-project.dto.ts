import { IsString, IsNotEmpty, IsUUID, IsEnum } from 'class-validator';
import { ProjectStatus } from '../project.entity';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  teamId: string;

  @IsEnum(ProjectStatus)
  status: ProjectStatus;
}

