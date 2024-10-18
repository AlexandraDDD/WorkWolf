import { PriorityLevel, TaskStatus } from "../model";

export interface CreateTaskDto {
  name: string;
  description: string;
  projectId: string;
  userId: string;
  status: TaskStatus;
  deadline?: Date;
  priority?: PriorityLevel;
}