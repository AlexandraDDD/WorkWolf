import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/components/entities/Task/types';

interface TasksState {
  items: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TasksState = {
  items: [],
  status: 'idle',
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.items = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    removeTask(state, action: PayloadAction<string>) {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    setLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
 /*    setError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    }, */
  },
});

export const { addTask, updateTask, removeTask, setTasks, setLoading,  } = taskSlice.actions;
export default taskSlice.reducer;
