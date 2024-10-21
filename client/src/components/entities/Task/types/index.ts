// src/types/task.ts
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
  
  export interface Task {
    id: string;
    name: string;
    description: string;
    deadline: string;
    priority: PriorityLevel;
    projectId: string;
    userId: string;
    status: TaskStatus;
    subtasks: Subtask[];
    comments: Comment[];
  }
  
  export interface Subtask {
    id: string;
    name: string;
    completed: boolean;
  }
  
  export interface Comment {
    id: string;
    content: string;
    userId: string;
  }
  
  export interface Project {
    id: string;
    name: string;
  }
  
  export interface User {
    id: string;
    name: string;
  }
  