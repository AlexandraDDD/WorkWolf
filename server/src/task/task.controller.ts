import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { PriorityLevel, Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './task.service';
import { Subtask } from 'src/subtask/subtask.entity';
import { CreateSubtaskDto } from 'src/subtask/dto/subtask-create.dto';
import { UpdateSubtaskDto } from 'src/subtask/dto/subtask-update.dto';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { Comment } from 'src/comment/comment.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }

    /* ------------------COMMENT----------------- */

    @Post('comments')
    async createComment(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
      return this.tasksService.createComment(createCommentDto);
    }
  
    @Delete('comments/:commentId')
    async deleteComment(@Param('commentId') commentId: string): Promise<void> {
      return this.tasksService.deleteComment(commentId);
    }
  
    /* ------------------STATUS----------------- */
  
    @Post(':taskId/status')
    async createStatus(@Param('taskId') taskId: string, @Body('status') status: TaskStatus): Promise<Task> {
      return this.tasksService.createStatus(taskId, status);
    }
  
    @Patch(':taskId/status')
    async updateStatus(@Param('taskId') taskId: string, @Body('status') status: TaskStatus): Promise<Task> {
      return this.tasksService.updateStatus(taskId, status);
    }
  
    /* ------------------SUBTASK----------------- */
  
    @Post('subtasks')
    async createSubtask(@Body() createSubtaskDto: CreateSubtaskDto): Promise<Subtask> {
      return this.tasksService.createSubtask(createSubtaskDto);
    }
  
    @Put('subtasks/:id')
    async updateSubtask(@Param('id') id: string, @Body() updateSubtaskDto: UpdateSubtaskDto): Promise<Subtask> {
      return this.tasksService.updateSubtask(id, updateSubtaskDto);
    }
  
    @Delete('subtasks/:id')
    async removeSubtask(@Param('id') id: string): Promise<void> {
      return this.tasksService.removeSubtask(id);
    }
  
    /* ------------------DEADLINE----------------- */
  
    @Patch(':taskId/deadline')
    async updateDeadline(@Param('taskId') taskId: string, @Body('deadline') deadline: Date): Promise<Task> {
      return this.tasksService.updateDeadline(taskId, deadline);
    }
  
    /* ------------------PRIORITY----------------- */
  
    @Patch(':taskId/priority')
    async updatePriority(@Param('taskId') taskId: string, @Body('priority') priority: PriorityLevel): Promise<Task> {
      return this.tasksService.updatePriority(taskId, priority);
    }
  
}