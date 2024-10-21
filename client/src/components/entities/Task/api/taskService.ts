import { Task } from '../types';
import { CreateTaskDto } from '../types/dto/CreateTaskDto';
import { UpdateTaskDto } from '../types/dto/UpdateTaskDto';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../../../shared/api/basequery'

export const TaskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery:  fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    createTask: builder.mutation<Task, CreateTaskDto>({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
    }),
    getTasks: builder.query<Task[], void>({
      query: () => '/tasks',
    }),
    getTaskById: builder.query<Task, string>({
      query: (id) => `/tasks/${id}`,
    }),
    updateTask: builder.mutation<Task, { id: string; task: UpdateTaskDto }>({
      query: ({ id, task }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: task,
      }),
    }),
    updateTaskStatus: builder.mutation<Task, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/tasks/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = TaskApi;

