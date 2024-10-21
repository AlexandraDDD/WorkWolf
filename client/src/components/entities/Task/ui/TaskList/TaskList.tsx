import React, { FC, useEffect } from 'react';
import { Task, TaskStatus } from '../../types';
import { TaskCheckbox, TaskDeadline, TaskItem, TaskLabel, TaskListContainer } from './styles';
import { editTaskStatus, fetchTasks } from '../../api/taskActions';
import { useAppDispatch, useAppSelector } from '@/store/customReduxHooks';
import Checkbox from '@mui/material/Checkbox';
import { Skeleton } from '@mui/material';

interface TaskListProps {
    tasks: Task[],
    status: string,

}

export const TaskList: FC<TaskListProps> = ({ tasks, status }) => {

    const dispatch = useAppDispatch();

    const onTaskToggle = (taskId: string, taskStatus: string) => {
        dispatch(editTaskStatus(taskId, TaskStatus.DONE));
    }
 
    const getCurrentDate = (deadline: string) => {
        const date = new Date(deadline)
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }).slice(0, 3);
        return `${day} ${month}`
    };
    
    if (status === 'loading') {
        return <>
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        </>
    }
    return (
        <TaskListContainer>
            {tasks && tasks.map((task: Task) => (
                <TaskItem key={task.id}>
                    <Checkbox
                        checked={task.status === 'DONE'}
                        color="default"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 20 },
                            '&.Mui-checked': {
                                color: 'primary.main',
                            },
                            '&.MuiCheckbox-root': {
                                color: 'primary.main',
                            },
                        }}
                        onChange={() => onTaskToggle(task.id)}
                    />
                    <TaskLabel>{task.name}</TaskLabel>
                    <TaskDeadline overdue={new Date(task.deadline) < new Date()}>
                        {getCurrentDate(task.deadline)}
                    </TaskDeadline>
                </TaskItem>
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
