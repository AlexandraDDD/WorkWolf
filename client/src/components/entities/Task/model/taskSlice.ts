import { Task } from '@/components/entities/Task/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },

  },
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
