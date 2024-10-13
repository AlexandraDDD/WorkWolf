import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project, ProjectStatus } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Team } from '../team/team.entity';
import { Task } from 'src/task/task.entity';
import { Comment } from 'src/comment/comment.entity';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
    @InjectModel(Comment)
    private commentModel: typeof Comment,
  ) { }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const projectData = {
      name: createProjectDto.name,
      teamId: createProjectDto.teamId,
      status: createProjectDto.status,
    };
    return this.projectModel.create(projectData);
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.findAll({
    });
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findByPk(id, {
      include: [
        {
          model: Team,
          as: 'team',
          attributes:{
            exclude: ['id']
          }

        },
        {
          model: Task,
          as: 'tasks',
          attributes:{
            exclude: ['projectId']
          }

        },
        {
          model: Comment,
          as: 'comments',
          attributes:{
            exclude: ['projectId']
          }

        },
      ],
    });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const project = await this.findOne(id);
    return project.update(updateProjectDto);
  }

  async remove(id: string): Promise<void> {
    const project = await this.findOne(id);
    await project.destroy();
  }


  /* ------------------COMMENT----------------- */
  
  async createComment(createCommentDto: CreateCommentDto ): Promise<Comment> {
    if (!createCommentDto.projectId) {
      throw new HttpException('Отсутствует projectId', HttpStatus.BAD_REQUEST)
    }
    const project = await this.findOne(createCommentDto.projectId)

    if (!project){
      throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST)
    }
    
    const commentData = {
      text:createCommentDto.text,
      projectId: createCommentDto.projectId,
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

   async createStatus(projectId: string, status: ProjectStatus): Promise<Project> {
    const project = await this.findOne(projectId);
    if (!project) {
      throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
    }

    project.status = status;
    return project.save();
  }

  async updateStatus( projectId: string, status: ProjectStatus): Promise<Project> {
    const project = await this.findOne(projectId);
    if (!project) {
      throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
    }

    project.status = status;
    return project.save();
  }

  async deleteStatus(projectId: string): Promise<Project> {
    const project = await this.findOne(projectId);
    if (!project) {
      throw new HttpException('Проект с таким id отсутствует', HttpStatus.BAD_REQUEST);
    }

    project.status = ProjectStatus.NONE; 
    return project.save();
  }
}
