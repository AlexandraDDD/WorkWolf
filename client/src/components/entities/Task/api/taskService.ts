// src/services/taskService.ts
import axios from 'axios';
import { Task } from '../types';
import { CreateTaskDto } from '../types/dto/CreateTaskDto';
import { UpdateTaskDto } from '../types/dto/UpdateTaskDto';

const API_URL = 'http://localhost:3000/api/tasks';

export const taskService = {
  createTask: async (task: CreateTaskDto): Promise<Task> => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
  },
  getTasks: async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  },
  getTaskById: async (id: string): Promise<Task> => {
    const response = await axios.get<Task>(`${API_URL}/${id}`);
    return response.data;
  },
  updateTask: async (id: string, task: UpdateTaskDto): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${id}`, task);
    return response.data;
  },
  deleteTask: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
/*   createComment: async (comment: CreateCommentDto): Promise<Comment> => {
    const response = await axios.post<Comment>(`${API_URL}/comments`, comment);
    return response.data;
  },
  deleteComment: async (commentId: string): Promise<void> => {
    await axios.delete(`${API_URL}/comments/${commentId}`);
  },
  updateStatus: async (taskId: string, status: TaskStatus): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${taskId}/status`, { status });
    return response.data;
  },
  createSubtask: async (subtask: CreateSubtaskDto): Promise<Subtask> => {
    const response = await axios.post<Subtask>(`${API_URL}/subtasks`, subtask);
    return response.data;
  },
  updateSubtask: async (id: string, subtask: UpdateSubtaskDto): Promise<Subtask> => {
    const response = await axios.put<Subtask>(`${API_URL}/subtasks/${id}`, subtask);
    return response.data;
  },
  deleteSubtask: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/subtasks/${id}`);
  },
  updateDeadline: async (taskId: string, deadline: Date): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${taskId}/deadline`, { deadline });
    return response.data;
  },
  updatePriority: async (taskId: string, priority: PriorityLevel): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${taskId}/priority`, { priority });
    return response.data;
  }, */
};
