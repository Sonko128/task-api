import { Module } from '@nestjs/common';
import { AssignService } from './assign.service';
import { AssignController } from './assign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assign } from './entities/assign.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Assign])],
  controllers: [AssignController],
  providers: [AssignService],
})
export class AssignModule {}
