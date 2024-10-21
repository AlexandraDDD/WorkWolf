import React, { FC, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskList from "@/components/entities/Task/ui/TaskList/TaskList";

import { Card } from '../../../../shared/styles/components'
import { ButtonCustom, ButtonCustomGroup, Line } from '@/components/shared/styles/components';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store/customReduxHooks';
import { fetchTasks } from '../../api/taskActions';
import { Task, TaskStatus } from '../../types';

export const TaskCard: FC = () => {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks.items);
    const status = useAppSelector(state => state.tasks.status);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks); 

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    useEffect(() => {
        setFilteredTasks(tasks); // Обновите отфильтрованные задачи при изменении списка задач
    }, [tasks]);

    const handleFilter = (option: string) => {
        let filtered: Task[] = [];
        switch (option) {
            case 'pending':
                filtered = tasks.filter(task => task.status === TaskStatus.TODO);
                break;
            case 'overdue':
                filtered = tasks.filter(task => new Date(task.deadline) < new Date() && task.status !== TaskStatus.DONE);
                break;
            case 'done':
                filtered = tasks.filter(task => task.status === TaskStatus.DONE);
                break;
            default:
                filtered = tasks;
                break;
        }
        setFilteredTasks(filtered); // Обновите состояние отфильтрованных задач
    };

   /*  const [filteredTasks, setFiltedeTasks] = useState(tasks)

    const handleFilter = (option: string) => {
        switch (option) {
            case 'pending':
                setFiltedeTasks(
                    tasks.filter(task => task.status === TaskStatus.TODO)
                )
                break;
            case 'overlude':
                setFiltedeTasks(
                    tasks.filter(task => {
                        new Date(task.deadline) < new Date()
                            && task.status !== TaskStatus.DONE
                    }))
                break;
            case 'done':
                setFiltedeTasks(
                    tasks.filter(task => task.status === TaskStatus.DONE)
                )
                break;
            default:
                setFiltedeTasks(tasks)

                break;
        }

    } */
    return (
        <Card>
            <h3>My Tasks</h3>
            <ButtonCustomGroup >
                <ButtonCustom onClick={() => handleFilter('pending')}>предстоит</ButtonCustom>
                <ButtonCustom onClick={() => handleFilter('overlude')} >просрочено</ButtonCustom>
                <ButtonCustom onClick={() => handleFilter('done')}>выполнено</ButtonCustom>
            </ButtonCustomGroup>
            <Line />
            <Button><AddIcon /> <span>addTask</span></Button> {/* // форма для добавления задачи */}
            <TaskList status={status} tasks={filteredTasks} />
        </Card>
    );
};

export default TaskList;
