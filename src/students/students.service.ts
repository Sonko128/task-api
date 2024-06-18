import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private readonly studentRepository:Repository<Student>,
  ){}
 async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto);
  }

  findAll() {
    return this.studentRepository.find();
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const todo = await this.studentRepository.findOne({ where:{id}});
    Object.assign(todo,updateStudentDto);
    return await this.studentRepository.save(todo);
  
  }
  

  async remove(id: number){
    const result = await this.studentRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return `Student with ID ${id} deleted sucessful`;
  }
}
