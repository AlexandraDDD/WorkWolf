import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PriorityLevel, Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Comment } from 'src/comment/comment.entity';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { Subtask } from 'src/subtask/subtask.entity';
import { CreateSubtaskDto } from 'src/subtask/dto/subtask-create.dto';
import { UpdateSubtaskDto } from 'src/subtask/dto/subtask-update.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
    @InjectModel(Comment)
    private commentModel: typeof Comment,
    @InjectModel(Subtask)
    private subtaskModel: typeof Subtask,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const TasktData = {
      name: createTaskDto.name,
      description: createTaskDto.description,
      projectId: createTaskDto.projectId,
      userId: createTaskDto.userId,
      status: createTaskDto.status,
      deadline: createTaskDto.deadline,
      priority: createTaskDto.priority,
    };
    return this.taskModel.create(TasktData);
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findByPk(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    return task.update(updateTaskDto);
  }

  async remove(id: string): Promise<void> {
    const task = await this.findOne(id);
    await task.destroy();
  }

    /* ------------------COMMENT----------------- */
  
    async createComment(createCommentDto: CreateCommentDto ): Promise<Comment> {
      if (!createCommentDto.taskId) {
        throw new HttpException('Отсутствует taskId', HttpStatus.BAD_REQUEST)
      }
      const task = await this.findOne(createCommentDto.taskId)
  
      if (!task){
        throw new HttpException('Задача с таким id отсутствует', HttpStatus.BAD_REQUEST)
      }
      
      const commentData = {
        text:createCommentDto.text,
        taskId: createCommentDto.taskId,
        userId: createCommentDto.userId,
      };
      
      return this.commentModel.create(commentData);
    }
  
    async deleteComment(commentId: string): Promise<void> {
      const comment = await this.commentModel.findByPk(commentId);
      if (!comment) {
        throw new HttpException('Комментарий не найден', HttpStatus.BAD_REQUEST)
      }
  
      await comment.destroy();
    }
  
     /* ------------------STATUS----------------- */
  
     async createStatus(taskId: string, status: TaskStatus): Promise<Task> {
      const task = await this.findOne(taskId);
      if (!task) {
        throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
      }
  
      task.status = status;
      return task.save();
    }
  
    async updateStatus( taskId: string,  status: TaskStatus): Promise<Task> {
      const task = await this.findOne(taskId);
      if (!task) {
        throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
      }
  
      task.status = status;
      return task.save();
    }
  
  /*   async deleteStatus(taskId: string): Promise<Task> {
      const task = await this.findOne(taskId);
      if (!task) {
        throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
      }
  
      task.status = TaskStatus.TODO; 
      return task.save();
    } */
    /* ------------------SUBTASK----------------- */

  async createSubtask(createSubtaskDto: CreateSubtaskDto): Promise<Subtask> {
    if (!createSubtaskDto.taskId) {
      throw new HttpException('Отсутствует taskId', HttpStatus.BAD_REQUEST)
    }
    const task = await this.findOne(createSubtaskDto.taskId)

    if (!task) {
      throw new HttpException('Задача с таким id отсутствует', HttpStatus.BAD_REQUEST)
    }

    const subtaskData = {
      name: createSubtaskDto.name,
      description: createSubtaskDto.description,
      taskId: createSubtaskDto.taskId,
    };

    return this.subtaskModel.create(subtaskData);
  }

  async updateSubtask(id: string, updateSubtaskDto: UpdateSubtaskDto): Promise<Subtask> {
    const subtask = await this.subtaskModel.findByPk(id);
    if (!subtask) {
      throw new HttpException('Подзадача не найдена', HttpStatus.BAD_REQUEST)
    }

    return subtask.update(updateSubtaskDto);
  }

  async removeSubtask(id: string): Promise<void> {
    const subtask = await this.subtaskModel.findByPk(id);
    if (!subtask) {
      throw new HttpException('Подзадача не найдена', HttpStatus.BAD_REQUEST)
    }

    await subtask.destroy();
  }

    /* ------------------DEADLINE----------------- */

    async updateDeadline(taskId: string, deadline: Date): Promise<Task> {
      const task = await this.findOne(taskId);
      if (!task) {
        throw new HttpException('Задача с таким id отсутствует', HttpStatus.BAD_REQUEST);
      }
  
      task.deadline = deadline;
      return task.save();
    }
  
    /* ------------------PRIORITY----------------- */
  
    async updatePriority(taskId: string, priority: PriorityLevel): Promise<Task> {
      const task = await this.findOne(taskId);
      if (!task) {
        throw new HttpException('Задача с таким id отсутствует', HttpStatus.BAD_REQUEST);
      }
  
      task.priority = priority;
      return task.save();
    }
  
}