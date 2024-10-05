import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  projectId?: string;
  taskId?: string;
}

function isProjectId(id: string | undefined): id is string {
  return id !== undefined && id.startsWith('project-');
}

function isTaskId(id: string | undefined): id is string {
  return id !== undefined && id.startsWith('task-');
}

export function validateCreateCommentDto(dto: CreateCommentDto): void {
  if (isProjectId(dto.projectId) && isTaskId(dto.taskId)) {
    throw new Error('Comment must be associated with either a project or a task, but not both');
  }

  if (dto.projectId === undefined && dto.taskId === undefined) {
    throw new Error('Comment must be associated with either a project or a task');
  }
}

