import { PriorityLevel, TaskStatus } from "..";

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  status?: TaskStatus;
  deadline?: Date;
  priority?: PriorityLevel;
}