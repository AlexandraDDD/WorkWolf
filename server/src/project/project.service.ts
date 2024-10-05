// src/project/project.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const projectData = {
      name: createProjectDto.name,
      teamId: createProjectDto.teamId,
      status: createProjectDto.status
    };
    return this.projectModel.create(projectData);
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.findAll();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findByPk(id);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const project = await this.findOne(id);
    return project.update(updateProjectDto);
  }

  async remove(id: string): Promise<void> {
    const project = await this.findOne(id);
    await project.destroy();
  }
}
