import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('')
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  createTask(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string) {
    return this.taskService.updateTask(id);
  }
}
