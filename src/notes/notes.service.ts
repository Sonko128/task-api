import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository:Repository<Note>,
  ){}
 async create(createNoteDto: CreateNoteDto) {
    return await this.noteRepository.save(createNoteDto);
  }

  findAll() {
    return this.noteRepository.find();
  }

  async findOne(id: number) {
    return await this.noteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const todo = await this.noteRepository.findOne({ where:{id}});
    Object.assign(todo,updateNoteDto);
    return await this.noteRepository.save(todo);
  }

 async remove(id: number) {
    const result = await this.noteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Notes with ID ${id} not found`);
    }
    return `Notes with ID ${id} deleted sucessful`;
  }
  }

