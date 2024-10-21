import { TaskApi } from "./taskService";
import { setTasks, addTask, updateTask, removeTask, setLoading,  } from '../model/taskSlice';
import { AppDispatch } from "@/store";
import { CreateTaskDto } from "../types/dto/CreateTaskDto";
import { toast } from 'react-toastify';
import { UpdateTaskDto } from "../types/dto/UpdateTaskDto";
import { TaskStatus } from "../types";

export const fetchTasks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const result = await dispatch(TaskApi.endpoints.getTasks.initiate()).unwrap();
    dispatch(setTasks(result));
  } catch (error) {
 
    console.error('Failed to fetch tasks:', error);
  }
};

export const createTask = (task: CreateTaskDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const result = await dispatch(TaskApi.endpoints.createTask.initiate(task)).unwrap();
    dispatch(addTask(result));
    toast.success('Task created successfully');
  } catch (error) {
    
    console.error('Failed to create task:', error);
    toast.error('Failed to create task');
  }
};

export const editTask = (id: string, task: UpdateTaskDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const result = await dispatch(TaskApi.endpoints.updateTask.initiate({ id, task })).unwrap();
    dispatch(updateTask(result));
    toast.success('Task updated successfully');
  } catch (error) {
    console.error('Failed to update task:', error);
    toast.error('Failed to update task');
  }
};
export const editTaskStatus = (id: string, status: TaskStatus) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const result = await dispatch(TaskApi.endpoints.updateTaskStatus.initiate({ id, status })).unwrap();
    dispatch(updateTask(result));
    toast.success('Task status updated successfully');
  } catch (error) {
   
    console.error('Failed to update task status:', error);
    toast.error('Failed to update task status');
  }
};

export const deleteTask = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    await dispatch(TaskApi.endpoints.deleteTask.initiate(id)).unwrap();
    dispatch(removeTask(id));
    toast.success('Task deleted successfully');
  } catch (error) {
   
    console.error('Failed to delete task:', error);
    toast.error('Failed to delete task');
  }
};
