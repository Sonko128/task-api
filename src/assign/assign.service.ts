import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssignDto } from './dto/create-assign.dto';
import { UpdateAssignDto } from './dto/update-assign.dto';
import { Assign } from './entities/assign.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssignService {
  constructor(
    @InjectRepository(Assign) private readonly assignRepository:Repository<Assign>,
  ){}
  async create(createAssignDto: CreateAssignDto) {
    return await this.assignRepository.save(createAssignDto);
  }

  findAll() {
    return this.assignRepository.find();
  }

  async findOne(id: number) {
    return await this.assignRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAssignDto: UpdateAssignDto) {
    const todo = await this.assignRepository.findOne({ where:{id}});
    Object.assign(todo,updateAssignDto);
    return await this.assignRepository.save(todo);
  }

  async remove(id: number) {
    const result = await this.assignRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return `Assignment with ID ${id} deleted sucessful`;
  }
}
