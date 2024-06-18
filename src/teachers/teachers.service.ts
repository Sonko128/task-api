import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher) private readonly teacherRepository:Repository<Teacher>,
  ){}
  async create(createTeacherDto: CreateTeacherDto) {
    return await this.teacherRepository.save(createTeacherDto);
  }

  findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({ where: { id } });

  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const todo = await this.teacherRepository.findOne({ where:{id}});
    Object.assign(todo,updateTeacherDto);
    return await this.teacherRepository.save(todo);
  }

  async remove(id: number) {
    const result = await this.teacherRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
    return `Teacher with ID ${id} deleted sucessful`;
  }
  }

