import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectStatus } from './project.entity';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }

  /* ------------------COMMENT----------------- */

  @Post('comments')
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.projectService.createComment(createCommentDto);
  }

  @Delete('comments/:commentId')
  deleteComment(@Param('commentId') commentId: string) {
    return this.projectService.deleteComment(commentId);
  }

  
  /* ------------------STATUS----------------- */

  @Post(':projectId/status')
  createStatus(
    @Param('projectId') projectId: string,
    @Body('status') status: ProjectStatus,
  ) {
    return this.projectService.createStatus(projectId, status);
  }

  @Put(':projectId/status')
  updateStatus(
    @Param('projectId') projectId: string,
    @Body('status') status: ProjectStatus,
  ) {
    return this.projectService.updateStatus(projectId, status);
  }

  @Delete(':projectId/status')
  deleteStatus(@Param('projectId') projectId: string) {
    return this.projectService.deleteStatus(projectId);
  }
}
