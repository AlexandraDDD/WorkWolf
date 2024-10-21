import { TaskApi } from '@/components/entities/Task/api/taskService';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice from '@/components/entities/Task/model/taskSlice'

const rootReducer = combineReducers({
  [TaskApi.reducerPath]: TaskApi.reducer,
  tasks: taskSlice

});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(TaskApi.middleware)
  });
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
